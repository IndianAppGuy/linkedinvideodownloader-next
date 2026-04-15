import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-panel/80 backdrop-blur-md border-b border-border-color">
      <div className="mx-auto max-w-screen-lg px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
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
          <span className="font-semibold text-foreground text-sm hidden sm:inline">
            LinkedIn Video Downloader
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-fg">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#features" className="hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
