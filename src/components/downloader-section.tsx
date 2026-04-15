"use client";

import { useState } from "react";

interface VideoResult {
  url: string;
  quality: string;
}

export function DownloaderSection() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videos, setVideos] = useState<VideoResult[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setVideos([]);

    if (!url.trim()) {
      setError("Please paste a LinkedIn URL");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setVideos(data.videos);
    } catch {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (videoUrl: string) => {
    try {
      const res = await fetch(videoUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `linkedin-video-${Date.now()}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(videoUrl, "_blank");
    }
  };

  return (
    <div className="mt-8 px-0 sm:px-8">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full">
        <div className="relative rounded-2xl border border-border-color bg-panel shadow-lg focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
          <input
            type="text"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(""); }}
            placeholder="Paste a LinkedIn video URL..."
            className="w-full px-5 py-4 pr-14 bg-transparent border-none rounded-2xl focus:outline-none focus:ring-0 placeholder:text-muted text-foreground text-[15px]"
            disabled={loading}
            aria-label="LinkedIn video URL"
          />
          <button
            type="submit"
            disabled={loading || !url.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-accent hover:bg-accent-hover text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Download video"
          >
            {loading ? (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            )}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500 text-left px-2">{error}</p>
        )}
      </form>

      <p className="mt-3 text-xs text-muted">
        Supports LinkedIn posts, articles, and profile activity videos
      </p>

      {videos.length > 0 && (
        <div className="mt-6 animate-fade-in max-w-xl mx-auto">
          <div className="rounded-2xl border border-border-color bg-panel overflow-hidden shadow-lg">
            <div className="p-4 border-b border-border-color">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-foreground">
                  Video found! Choose a quality to download:
                </p>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {videos.map((video, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 p-3 rounded-xl bg-panel-hover border border-border-color"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Video {videos.length > 1 ? `#${i + 1}` : ""} - {video.quality}
                      </p>
                      <p className="text-xs text-muted">MP4 Format</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(video.url)}
                    className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors cursor-pointer"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
