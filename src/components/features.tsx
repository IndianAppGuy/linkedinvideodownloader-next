const features = [
  {
    title: "100% Free",
    description: "No hidden charges, no premium plans. Download unlimited LinkedIn videos at no cost.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "No Login Required",
    description: "No need to sign in to LinkedIn or create an account. Just paste the URL and download.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "HD Quality",
    description: "Download videos in the highest available quality. Original resolution preserved.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "No Watermark",
    description: "Clean downloads with no watermarks, logos, or branding added to your videos.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Works on All Devices",
    description: "Desktop, tablet, or mobile. Works in any modern browser — no app needed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Fast & Secure",
    description: "Lightning-fast downloads. We don't store your videos or data. Privacy protected.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-screen-lg px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-accent">Features</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Use Our LinkedIn Video Downloader
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border-color bg-panel p-5 hover:border-accent/30 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-muted-fg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
