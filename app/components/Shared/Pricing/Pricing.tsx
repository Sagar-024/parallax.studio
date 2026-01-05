"use client";
import React from "react";
import { Container } from "../Container";
import { IconCheck, IconSparkles, IconRocket } from "@tabler/icons-react";

export const PricingSection = () => {
  return (
    <Container id="pricing" className="relative w-full py-20 ">
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <StarterPricingCard />
        <ProPricingCard />
      </div>
    </Container>
  );
};

// ============================================
// STARTER TIER - Dark Top, Light Bottom
// ============================================
// ============================================
// STARTER TIER - Dark Top, Light Bottom
// ============================================
const StarterPricingCard = () => {
  const features = [
    "Up to 3 pages (Home, About, Contact or Services)",
    "Responsive design – works perfectly on mobile, tablet, and desktop",
    "Modern UI/UX design – clean, easy to navigate, professional look",
    "Contact form integration – lets your visitors get in touch easily",
    "Basic website animations – smooth hover effects and transitions",
    "Fast-loading website – optimized for performance",
    "Cross-browser compatibility – works on Chrome, Firefox, Safari, Edge",
    "1–2 revision rounds – we make sure it's how you want it",
    "SSL ready – safe and secure website setup",
    "Basic SEO setup – meta tags, titles, and keywords for search engines",
    "Google Maps integration – for business location if needed",
  ];

  return (
    <article className="group relative">
      {/* Card Container */}
      <div className="relative rounded-[25px] bg-gradient-to-br from-neutral-100 via-white to-neutral-50 dark:from-neutral-800 dark:via-neutral-900 dark:to-black border border-neutral-300/60 dark:border-white/[0.1] shadow-2xl shadow-neutral-900/10 dark:shadow-black/40 transition-all duration-500 ">
        <div className="p-[3px] rounded-[25px]">
          {/* Header Section - Dark Background */}
          <header className="relative overflow-hidden rounded-t-[22px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black dark:from-white dark:via-neutral-50 dark:to-neutral-100 p-6 md:p-8 lg:p-10">
            {/* Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 dark:via-black/20 to-transparent" />

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-neutral-900 mb-3 tracking-tight leading-[1.1]">
              Basic Package
            </h3>
            <p className="text-neutral-300 dark:text-neutral-600 text-base leading-relaxed mb-8 max-w-md">
              Ideal for personal websites, portfolios, startups, and small
              businesses. Professional online presence without breaking the
              bank.
            </p>

            {/* Pricing Display */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white dark:text-neutral-900 tracking-tighter">
                  $299
                </span>
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-600 mt-2">
                One-time payment • Ready in 1-2 weeks
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://cal.com/sagar-kharal-dos0d4/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full overflow-hidden rounded-xl block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 dark:from-black/0 dark:via-black/30 dark:to-black/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative py-4 px-6 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-bold text-base rounded-xl shadow-lg shadow-white/20 dark:shadow-black/40 group-hover/btn:shadow-xl group-hover/btn:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </header>

          {/* Features Section - Light Background */}
          <div className="relative rounded-b-[22px] bg-white dark:bg-neutral-950 p-6 md:p-8 lg:p-10">
            {/* Divider */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/[0.08] to-transparent" />

            {/* Features Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/[0.08]">
                <IconSparkles
                  className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400"
                  stroke={2}
                />
                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                  What's Included
                </span>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 rounded-full blur-sm opacity-40 group-hover/item:opacity-70 transition-opacity duration-300" />
                    <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-200 flex items-center justify-center shadow-lg ring-1 ring-neutral-900/10 dark:ring-white/10">
                      <IconCheck
                        className="w-3.5 h-3.5 text-white dark:text-neutral-900"
                        stroke={3.5}
                      />
                    </div>
                  </div>

                  <span className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300 font-medium group-hover/item:text-neutral-900 dark:group-hover/item:text-neutral-100 transition-colors duration-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

// ============================================
// PRO TIER - Light Top, Dark Bottom (INVERTED)
// ============================================
const ProPricingCard = () => {
  const features = [
    "Up to 8 pages (Home, About, Services, Blog, Contact, Portfolio, FAQ, etc.)",
    "Fully customized, feature-rich design – modern and professional",
    "Responsive and mobile-optimized for all devices",
    "Advanced UI/UX design – animations, hover effects, interactive elements",
    "Contact forms + newsletter signup + social media integration",
    "Blog or portfolio section – showcase your content professionally",
    "Basic SEO optimization – meta tags, titles, descriptions, keywords",
    "Fast-loading website – optimized images, scripts, and performance",
    "Cross-browser compatibility – works perfectly on all major browsers",
    "SSL setup – safe and secure",
    "Google Maps integration – for multiple locations if needed",
    "3–5 revision rounds – ensures full satisfaction",
  ];

  return (
    <article className="group relative">
      {/* Popular Badge - Floating */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 border border-blue-400/20">
          <IconRocket className="w-4 h-4 text-white" stroke={2.5} />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      </div>

      {/* Card Container */}
      <div className="relative rounded-[25px] bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-black dark:to-neutral-950 border-2 border-neutral-300/50 dark:border-white/[0.12] shadow-2xl shadow-neutral-900/15 dark:shadow-black/50 transition-all duration-500">
        <div className="p-[3px] rounded-[25px]">
          {/* Header Section - LIGHT Background (INVERTED) */}
          <header className="relative overflow-hidden rounded-t-[22px] bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black p-6 md:p-8 lg:p-10">
            {/* Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Top Accent Line - Neutral gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-400/40 dark:via-white/20 to-transparent" />

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-[1.1]">
              Premium Package
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed mb-8 max-w-md">
              Ideal for startups, small businesses, e-commerce landing pages, or
              anyone wanting a polished professional web presence.
            </p>

            {/* Pricing Display */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 dark:text-white tracking-tighter">
                  $799
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                One-time payment • Ready in 2-4 weeks
              </p>
            </div>

            {/* CTA Button - Premium neutral gradient */}
            <a
              href="https://cal.com/sagar-kharal-dos0d4/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full overflow-hidden rounded-xl block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-400/0 via-neutral-400/20 dark:via-white/20 to-neutral-400/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative py-4 px-6 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-white dark:to-neutral-100 text-white dark:text-neutral-900 font-bold text-base rounded-xl shadow-lg shadow-neutral-900/30 dark:shadow-white/20 group-hover/btn:shadow-xl group-hover/btn:shadow-neutral-900/40 dark:group-hover/btn:shadow-white/30 group-hover/btn:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Building
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </header>

          {/* Features Section - DARK Background (INVERTED) */}
          <div className="relative rounded-b-[22px] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black dark:from-white dark:via-neutral-50 dark:to-neutral-100 p-6 md:p-8 lg:p-10">
            {/* Divider - Neutral accent */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-neutral-700/40 dark:via-neutral-300/30 to-transparent" />

            {/* Features Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 backdrop-blur-sm">
                <IconSparkles
                  className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500"
                  stroke={2}
                />
                <span className="text-xs font-semibold text-white/90 dark:text-black/90 uppercase tracking-wider">
                  Premium Features
                </span>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-300 dark:to-neutral-500 rounded-full blur-sm opacity-50 group-hover/item:opacity-80 transition-opacity duration-300" />
                    <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-400 flex items-center justify-center shadow-lg shadow-neutral-900/40 dark:shadow-neutral-400/30 ring-1 ring-neutral-700/30 dark:ring-neutral-300/30">
                      <IconCheck
                        className="w-3.5 h-3.5 text-white dark:text-neutral-900"
                        stroke={3.5}
                      />
                    </div>
                  </div>

                  <span className="text-[15px] leading-relaxed text-neutral-300 dark:text-neutral-700 font-medium group-hover/item:text-white dark:group-hover/item:text-neutral-900 transition-colors duration-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
