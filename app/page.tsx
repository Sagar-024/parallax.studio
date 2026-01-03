import Hero from "./components/Shared/Hero/page";
import { LogoCloud } from "./components/Shared/Logocloud/page";
import { Features } from "./components/Shared/Features/page";
import { Benefits } from "./components/Shared/Benefits/page";
import { PricingSection } from "./components/Shared/Pricing/page";

export default function Home() {
  return (
    <div className="min-h-screen  font-manrope">
      <Hero />
      {/* <LogoCloud /> */}
      <Features />
      <Benefits />
      <Pricing />
      <PricingSection />
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
