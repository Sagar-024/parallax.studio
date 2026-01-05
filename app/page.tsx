import Hero from "./components/Shared/Hero/page";
import { LogoCloud } from "./components/Shared/Logocloud/LogoCloud";
import { Features } from "./components/Shared/Features/Features";
import { Works } from "./components/Shared/Works/Works";
import { ParallaxBenefit } from "./components/Shared/ParallaxBenefit/ParallaxBenefit";
import { Benefits } from "./components/Shared/Benefits/Benefits";
import { HowWeWork } from "./components/Shared/HowWeWork/HowWeWork";
import { CTASection } from "./components/Shared/CTASection/CTASection";
import { PricingSection } from "./components/Shared/Pricing/Pricing";
import { Footer } from "./components/Shared/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen  font-manrope">
      <Hero />
      <Works />
      <CTASection
        variant="minimal"
        title="Liked What You Saw?"
        subtitle="Let's discuss how we can create something amazing for you too."
      />
      {/* <LogoCloud /> */}
      <Features />
      <ParallaxBenefit />
      <Benefits />
      <HowWeWork />
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can bring your vision to life. Book a free 30-minute consultation."
      />
      <Pricing />
      <PricingSection />
      <CTASection
        variant="bold"
        title="Let's Build Something Great Together"
        subtitle="Join 50+ companies who trusted us to transform their ideas into reality."
      />
      <Footer />
    </div>
  );
}

const Pricing = () => {
  return (
    <div className="relative z-10 mt-30">
      <div className="text-center max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
              Investment
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight leading-[1.1]">
          Launch Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-400">
            Vision
          </span>
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10 mt-2">
          Transparent pricing for every stage of growth. From quick MVPs to
          enterprise-grade platforms, built to convert.
        </p>
      </div>
    </div>
  );
};
