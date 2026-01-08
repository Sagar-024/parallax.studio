"use client";
import React from "react";
import { Container } from "../Container";
import {
  IconChartBar,
  IconCoin,
  IconMessage2,
  IconClock,
  IconTool,
  IconTarget,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export const Benefits = () => {
  return (
    <Container
      id="benefits"
      className="relative w-full py-16 md:py-24 lg:py-32"
    >
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:20px_20px] bg-[position:0_0,0_0]"
        style={{
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center justify-center text-center p-4 rounded-3xl group cursor-pointer"
            >
              <motion.span
                className="absolute inset-0 rounded-3xl "
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              <div className="relative z-10 mb-4 text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-2xl border border-neutral-950/10 dark:border-white/50">
                {benefit.icon}
              </div>
              <h3 className="relative z-10 font-semibold text-lg md:text-xl text-neutral-800 dark:text-neutral-100 mb-2 font-display">
                {benefit.title}
              </h3>
              <p className="relative z-10 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-xs mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

const benefits = [
  {
    title: "Pricing with Good Value",
    description:
      "Transparent pricing with no hidden fees or surprise costs. You'll know exactly what you're paying for upfront.",
    icon: <IconCoin stroke={1.5} className="size-8" />,
  },
  {
    title: "Responsive Communication",
    description:
      "We reply promptly and keep you updated throughout the project. No ghosting, just consistent communication.",
    icon: <IconMessage2 stroke={1.5} className="size-8" />,
  },
  {
    title: "Proven Track Record",
    description:
      "Real examples of our previous work, including projects similar to yours. Our portfolio speaks for itself.",
    icon: <IconChartBar stroke={1.5} className="size-8" />,
  },
  {
    title: "Realistic Timelines",
    description:
      "We set achievable deadlines and actually meet them. Honesty and reliability are at the core of our process.",
    icon: <IconClock stroke={1.5} className="size-8" />,
  },
  {
    title: "Support and Maintenance",
    description:
      "We're here for the long haul. Bug fixes, updates, training, and ongoing maintenance—we've got you covered.",
    icon: <IconTool stroke={1.5} className="size-8" />,
  },
  {
    title: "Business Goals Aligned",
    description:
      "We take time to understand your specific needs and business objectives to deliver results that matter.",
    icon: <IconTarget stroke={1.5} className="size-8" />,
  },
];
