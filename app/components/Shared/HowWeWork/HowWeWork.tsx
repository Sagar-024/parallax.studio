"use client";

import React from "react";
import { Container } from "../Container";
import { motion } from "framer-motion";
import {
  IconSearch,
  IconBulb,
  IconPalette,
  IconCode,
  IconRocket,
  IconHeadset,
} from "@tabler/icons-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We dive deep into your business, audience, and goals to understand what makes you unique and what drives your success.",
    icon: IconSearch,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We craft a tailored roadmap aligned with your vision, defining milestones, timelines, and success metrics.",
    icon: IconBulb,
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "Our designers create stunning, user-centric interfaces that captivate and convert, validated through prototypes.",
    icon: IconPalette,
  },
  {
    number: "04",
    title: "Development & Testing",
    description:
      "Expert developers bring designs to life with clean code, rigorous testing, and performance optimization.",
    icon: IconCode,
  },
  {
    number: "05",
    title: "Launch & Deployment",
    description:
      "We ensure a flawless launch with careful deployment, monitoring, and final quality assurance checks.",
    icon: IconRocket,
  },
  {
    number: "06",
    title: "Support & Growth",
    description:
      "Our partnership doesn't end at launch. We provide ongoing support, updates, and strategies for continuous growth.",
    icon: IconHeadset,
  },
];

export const HowWeWork = () => {
  return (
    <Container className="relative mt-0">
      <div className="w-full relative">
        <section
          id="how-we-work"
          className="relative py-16 md:py-24 lg:py-32 overflow-hidden z-10"
        >
          {/* Background Grid - Now properly layered */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 z-0"
            aria-hidden="true"
          />

          <Container className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8 font-[family-name:var(--font-cormorant)]">
                How We Work
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                Our proven process transforms your vision into reality through
                six carefully crafted stages.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border-2 border-black dark:border-white hover:border-neutral-800 dark:hover:border-neutral-200 transition-all duration-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_8px_rgba(255,255,255,0.06)]">
                    {/* Step Number - Large Background */}
                    <div className="absolute top-6 right-6 text-8xl font-bold text-neutral-100 dark:text-neutral-800 opacity-50 select-none font-[family-name:var(--font-space-grotesk)]">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6 inline-flex p-3 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300">
                      <step.icon
                        className="size-6 text-white dark:text-black"
                        stroke={2}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </Container>
  );
};
