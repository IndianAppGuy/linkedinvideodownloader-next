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
              Supported Formats
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-fg">
              <li>LinkedIn Post Videos</li>
              <li>LinkedIn Article Videos</li>
              <li>LinkedIn Profile Videos</li>
              <li>LinkedIn Company Page Videos</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border-color">
          <p className="text-xs text-muted text-center">
            This tool is not affiliated with LinkedIn. LinkedIn is a trademark of Microsoft Corporation.
            Please respect content creators&apos; rights when downloading videos.
          </p>
        </div>
      </div>
    </footer>
  );
}
