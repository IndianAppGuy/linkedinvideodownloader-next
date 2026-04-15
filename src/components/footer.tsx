export function Footer() {
  return (
    <footer className="border-t border-border-color bg-panel">
      <div className="mx-auto max-w-screen-lg px-6 py-8 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <span className="font-semibold text-foreground text-sm">
                LinkedIn Video Downloader
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-fg leading-relaxed">
              Free online tool to download LinkedIn videos in HD quality.
              No login required. No watermarks.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-fg">
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Other Tools
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-fg">
              <li>
                <a href="https://linkedincarousel.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  LinkedIn Carousel Generator
                </a>
              </li>
              <li>
                <a href="https://www.magicslides.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  AI Presentation Maker
                </a>
              </li>
              <li>
                <a href="https://www.askvideo.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Chat with YouTube Videos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border-color space-y-3">
          <p className="text-xs text-muted-fg text-center font-medium">
            Disclaimer: LinkedInVideoDownloader.io is an independent tool and is not affiliated with, endorsed by, or associated with LinkedIn Corporation or Microsoft Corporation in any way. LinkedIn&reg; is a registered trademark of LinkedIn Corporation and/or Microsoft Corporation.
          </p>
          <p className="text-xs text-muted text-center">
            This tool is provided for personal use only. Please respect content creators&apos; rights and copyrights when downloading videos. We do not store any videos or user data.
          </p>
        </div>
      </div>
    </footer>
  );
}
