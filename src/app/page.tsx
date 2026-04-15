import { DownloaderSection } from "@/components/downloader-section";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { FAQ } from "@/components/faq";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-background pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="mx-auto max-w-screen-lg px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Download LinkedIn Videos
                <span className="block text-accent">Free. Fast. No Login.</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-fg max-w-2xl mx-auto">
                Paste any LinkedIn post URL and save the video to your device in
                HD quality. No sign-up, no watermark, no hassle.
              </p>
              <DownloaderSection />
            </div>

            {/* Demo mockup */}
            <div className="mt-12 sm:mt-16">
              <div className="relative mx-auto max-w-3xl">
                <div className="rounded-2xl border border-border-color overflow-hidden shadow-2xl bg-panel">
                  {/* Browser chrome */}
                  <div className="bg-panel-hover border-b border-border-color px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-panel rounded-md px-3 py-1 text-xs text-muted border border-border-color max-w-xs mx-auto text-center">
                        linkedinvideodownloader.com
                      </div>
                    </div>
                  </div>

                  {/* Mockup content */}
                  <div className="p-6 sm:p-8">
                    {/* Step 1: URL input */}
                    <div className="flex items-center gap-2 bg-background rounded-xl px-4 py-3 border border-border-color">
                      <span className="text-sm text-muted-fg truncate flex-1">
                        https://linkedin.com/posts/johndoe-video-12345
                      </span>
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 2: Result */}
                    <div className="mt-4 rounded-xl border border-border-color bg-background p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Video found!</p>
                          <p className="text-xs text-muted">HD Quality - MP4 Format</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-panel-hover border border-border-color">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">linkedin-video.mp4</p>
                            <p className="text-xs text-muted">1080p - 24.5 MB</p>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-accent text-white text-xs font-medium rounded-lg">
                          Download
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
