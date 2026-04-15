"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I download a video from LinkedIn?",
    answer:
      "Copy the URL of the LinkedIn post containing the video, paste it into the input field on our website, and click Download. The video will be processed and you can save it to your device in HD quality.",
  },
  {
    question: "Is this LinkedIn video downloader free?",
    answer:
      "Yes, completely free. No hidden fees, no subscription plans, and no limits on the number of videos you can download.",
  },
  {
    question: "Do I need to log in to my LinkedIn account?",
    answer:
      "No. Our tool works by processing the public URL of the LinkedIn post. Just paste the link and download — no login needed.",
  },
  {
    question: "What video quality can I get?",
    answer:
      "We provide the highest available quality for each video. Most LinkedIn videos are available in HD (720p or 1080p). The exact quality depends on what was originally uploaded.",
  },
  {
    question: "Can I download LinkedIn videos on my phone?",
    answer:
      "Yes! Works on all devices — iPhone, Android, iPad, and desktop. It runs directly in your browser with no app installation required.",
  },
  {
    question: "Is it legal to download LinkedIn videos?",
    answer:
      "Downloading for personal use is generally acceptable. However, always respect copyright and the original creator's rights. Don't re-upload or redistribute without permission.",
  },
  {
    question: "Where can I find the LinkedIn post URL?",
    answer:
      "On desktop, click the three dots (...) on a LinkedIn post and select 'Copy link to post'. On mobile, tap the three dots and select 'Copy link'. The URL looks like linkedin.com/posts/... or linkedin.com/feed/update/...",
  },
  {
    question: "Why is my download not working?",
    answer:
      "Make sure you're using a valid LinkedIn post URL that contains a video. Some videos may be restricted by privacy settings. Try refreshing the page and pasting the URL again.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-panel py-16 sm:py-20">
      <div className="mx-auto max-w-screen-lg px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-accent">FAQ</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border-color bg-background overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-panel-hover transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-muted transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted-fg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
