"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading } from "../Hero/Heading";
import { Subheading } from "../Hero/Subheading";
import { Container } from "../Container";

const steps = [
  {
    number: "01",
    title: "Deconstruct",
    description:
      "We strip your challenge to its core physics. No assumptions. Only raw data and human intent.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design efficient systems, not just screens. Every interaction is mapped for maximum impact.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Surgical code quality. Motion that feels organic. We build for performance at global scale.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Data-driven iteration. We ensure your product dominates the market long after launch.",
  },
];

const Step = ({ step, index }: { step: (typeof steps)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="relative pl-12 md:pl-24 py-16 border-l border-neutral-200 dark:border-neutral-800 last:border-0 group"
    >
      {/* Surgical Crosshair Indicator */}
      <div className="absolute left-[-1px] top-16 w-3 h-px bg-neutral-900 dark:bg-neutral-100 group-hover:w-6 transition-all duration-300" />
      <div className="absolute left-[-5px] top-[63px] w-px h-3 bg-neutral-900 dark:bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
        <span className="text-xs md:text-sm font-mono font-medium text-neutral-400 dark:text-neutral-600 mt-2 uppercase tracking-widest group-hover:text-black dark:group-hover:text-white transition-colors">
          {step.number}
        </span>
        <div>
          <h3 className="text-3xl md:text-5xl font-display font-semibold mb-4 text-neutral-900 dark:text-neutral-100 tracking-[-0.03em]">
            {step.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed text-lg font-medium">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Process = () => {
  return (
    <section className="py-24 md:py-40 bg-neutral-50 dark:bg-black/50">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3 relative md:sticky md:top-32 h-fit">
            <Heading as="h2" className="mb-6">
              The Method
            </Heading>
            <Subheading>
              Precision over probability.
              <br />A surgical approach to digital dominance.
            </Subheading>
          </div>

          <div className="md:w-2/3">
            <div className="relative">
              {/* Continuous line background */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

              {steps.map((step, index) => (
                <Step key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
