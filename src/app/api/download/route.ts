import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return Response.json(
        { error: "Please provide a valid LinkedIn URL" },
        { status: 400 }
      );
    }

    // Validate LinkedIn URL
    const linkedinPattern =
      /^https?:\/\/(www\.)?linkedin\.com\/(posts|feed|pulse|embed|video|in\/[^/]+\/recent-activity|company\/[^/]+\/posts)\/.*/i;

    if (!linkedinPattern.test(url)) {
      return Response.json(
        { error: "Please provide a valid LinkedIn post URL" },
        { status: 400 }
      );
    }

    // Fetch the LinkedIn page
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch the LinkedIn page. Please try again." },
        { status: 500 }
      );
    }

    const html = await response.text();

    // Extract video URLs from the page HTML
    const videoUrls = extractVideoUrls(html);

    if (videoUrls.length === 0) {
      return Response.json(
        {
          error:
            "No video found in this LinkedIn post. Make sure the post contains a video.",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      videos: videoUrls,
    });
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function extractVideoUrls(html: string): { url: string; quality: string }[] {
  const videos: { url: string; quality: string }[] = [];
  const seen = new Set<string>();

  // Pattern 1: data-sources attribute with video URLs
  const dataSourcesRegex = /data-sources="([^"]+)"/g;
  let match;
  while ((match = dataSourcesRegex.exec(html)) !== null) {
    try {
      const decoded = match[1]
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&#34;/g, '"');
      const sources = JSON.parse(decoded);
      if (Array.isArray(sources)) {
        for (const source of sources) {
          const srcUrl = source.src || source.url;
          if (srcUrl && !seen.has(srcUrl)) {
            seen.add(srcUrl);
            videos.push({
              url: srcUrl,
              quality: source.data?.width
                ? `${source.data.width}p`
                : "HD",
            });
          }
        }
      }
    } catch {
      // skip malformed JSON
    }
  }

  // Pattern 2: Direct video source URLs in meta tags or video elements
  const videoSrcPatterns = [
    /content="(https:\/\/[^"]*dms\.licdn\.com\/playlist\/vid[^"]*\.mp4[^"]*)"/g,
    /src="(https:\/\/[^"]*dms\.licdn\.com\/playlist\/vid[^"]*\.mp4[^"]*)"/g,
    /data-src="(https:\/\/[^"]*dms\.licdn\.com\/playlist\/vid[^"]*\.mp4[^"]*)"/g,
    /"(https:\/\/dms\.licdn\.com\/playlist\/[^"]*\.mp4[^"]*)"/g,
    /"(https:\/\/[^"]*linkedin[^"]*\/mp4[^"]*)"/g,
  ];

  for (const pattern of videoSrcPatterns) {
    while ((match = pattern.exec(html)) !== null) {
      let videoUrl = match[1].replace(/&amp;/g, "&");
      if (!seen.has(videoUrl)) {
        seen.add(videoUrl);
        videos.push({ url: videoUrl, quality: "HD" });
      }
    }
  }

  // Pattern 3: og:video meta tag
  const ogVideoRegex =
    /<meta[^>]*property=["']og:video["'][^>]*content=["']([^"']+)["']/gi;
  while ((match = ogVideoRegex.exec(html)) !== null) {
    const videoUrl = match[1].replace(/&amp;/g, "&");
    if (!seen.has(videoUrl)) {
      seen.add(videoUrl);
      videos.push({ url: videoUrl, quality: "HD" });
    }
  }

  // Also try reverse order for og:video
  const ogVideoRegex2 =
    /<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:video["']/gi;
  while ((match = ogVideoRegex2.exec(html)) !== null) {
    const videoUrl = match[1].replace(/&amp;/g, "&");
    if (videoUrl.includes("mp4") || videoUrl.includes("video")) {
      if (!seen.has(videoUrl)) {
        seen.add(videoUrl);
        videos.push({ url: videoUrl, quality: "HD" });
      }
    }
  }

  return videos;
}
