import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = "https://linkedinvideodownloader.io";

export const metadata: Metadata = {
  title: {
    default: "LinkedIn Video Downloader - Download LinkedIn Videos Free Online",
    template: "%s | LinkedIn Video Downloader",
  },
  description:
    "Download LinkedIn videos for free in HD quality. No login required, no watermark. Paste any LinkedIn post URL and save videos instantly. Fast, free, and easy to use.",
  keywords: [
    "linkedin video downloader",
    "download linkedin video",
    "linkedin video download",
    "save linkedin video",
    "linkedin video saver",
    "download video from linkedin",
    "linkedin post video download",
    "free linkedin video downloader",
    "linkedin video downloader online",
    "linkedin video downloader free",
    "download linkedin videos online",
    "linkedin video download hd",
  ],
  authors: [{ name: "LinkedIn Video Downloader" }],
  creator: "LinkedIn Video Downloader",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LinkedIn Video Downloader - Download LinkedIn Videos Free Online",
    description:
      "Download LinkedIn videos for free in HD quality. No login required, no watermark. Paste any LinkedIn post URL and save videos instantly.",
    url: siteUrl,
    siteName: "LinkedIn Video Downloader",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Video Downloader - Download LinkedIn Videos Free Online",
    description:
      "Download LinkedIn videos for free in HD quality. No login required, no watermark.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LinkedIn Video Downloader",
    url: siteUrl,
    description:
      "Download LinkedIn videos for free in HD quality. No login required, no watermark.",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I download a video from LinkedIn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Copy the LinkedIn post URL containing the video, paste it into our downloader, and click Download. The video will be saved to your device in HD quality.",
        },
      },
      {
        "@type": "Question",
        name: "Is it free to download LinkedIn videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our LinkedIn video downloader is completely free to use. No registration, no login, and no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to log in to my LinkedIn account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you do not need to log in to your LinkedIn account. Simply paste the URL of the LinkedIn post with the video and download it instantly.",
        },
      },
      {
        "@type": "Question",
        name: "What video quality can I download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide the highest available quality for each video. Most LinkedIn videos are available in HD (720p or 1080p) quality.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download LinkedIn videos on my phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our tool works on all devices including iPhone, Android, tablets, and desktop computers. No app installation required.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
