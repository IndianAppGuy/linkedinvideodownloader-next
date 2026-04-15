export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-panel py-16 sm:py-20">
      <div className="mx-auto max-w-screen-lg px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-accent">How It Works</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Download LinkedIn Videos in 3 Steps
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-5">
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                Copy the LinkedIn post URL
              </h3>
              <p className="text-sm text-muted-fg mb-3">
                Click the three dots (...) on any LinkedIn post and select &quot;Copy link to post&quot;.
              </p>
              {/* LinkedIn Post Mockup */}
              <div className="rounded-2xl border border-border-color bg-background overflow-hidden shadow-sm">
                {/* Post header */}
                <div className="p-4 pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        JD
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">John Doe</p>
                        <p className="text-xs text-muted">Marketing Lead at TechCo &middot; 2d</p>
                      </div>
                    </div>
                    {/* Three dots button - highlighted */}
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="5" cy="12" r="2" />
                          <circle cx="12" cy="12" r="2" />
                          <circle cx="19" cy="12" r="2" />
                        </svg>
                      </div>
                      {/* Dropdown menu */}
                      <div className="absolute right-0 top-10 w-52 rounded-xl border border-border-color bg-panel shadow-xl z-10 py-1.5 overflow-hidden">
                        <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-fg">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                          Save
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-accent bg-accent/10 border-l-2 border-accent">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          Copy link to post
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-fg">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          Embed this post
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-fg">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                          Not interested
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground leading-relaxed">
                    Check out this amazing product demo we just launched! The team worked so hard on this...
                  </p>
                </div>
                {/* Video thumbnail placeholder */}
                <div className="mx-4 mb-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                    <div className="h-full bg-accent w-[30%]"></div>
                  </div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-[10px] text-white/60">0:45 / 2:30</span>
                  </div>
                </div>
                {/* Engagement bar */}
                <div className="px-4 pb-3 flex items-center justify-between text-xs text-muted">
                  <span>128 likes &middot; 24 comments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-5">
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                Paste the URL and click Download
              </h3>
              <div className="rounded-lg border border-border-color bg-background p-3 flex items-center gap-2">
                <span className="text-sm text-muted truncate flex-1">
                  https://linkedin.com/posts/johndoe-video-12345
                </span>
                <div className="w-7 h-7 rounded bg-accent flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-5">
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                Save the video to your device
              </h3>
              <div className="rounded-lg border border-border-color bg-background p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">linkedin-video.mp4</p>
                      <p className="text-xs text-muted">HD Quality</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-accent text-white text-xs font-medium rounded-lg">
                    Download
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
