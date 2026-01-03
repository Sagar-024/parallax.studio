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
      className="relative w-full py-10 md:py-16 lg:py-20 "
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
      "Clients want to understand exactly what they're paying for upfront, with no hidden fees or surprise costs.",
    icon: <IconCoin stroke={1.5} className="size-8" />,
  },
  {
    title: "Responsive Communication",
    description:
      "Clients want an agency that replies promptly, keeps them updated throughout the project, and doesn't ghost.",
    icon: <IconMessage2 stroke={1.5} className="size-8" />,
  },
  {
    title: "Proven Track Record",
    description:
      "Clients want to see real examples of your previous work, especially projects similar to what they need.",
    icon: <IconChartBar stroke={1.5} className="size-8" />,
  },
  {
    title: "Realistic Timelines",
    description:
      "They want agencies that set achievable deadlines and actually meet them. Clients appreciate honesty.",
    icon: <IconClock stroke={1.5} className="size-8" />,
  },
  {
    title: "Support and Maintenance",
    description:
      "Clients want to know you'll be there to fix bugs, make updates, provide training, and offer maintenance.",
    icon: <IconTool stroke={1.5} className="size-8" />,
  },
  {
    title: "Business Goals Aligned",
    description:
      "Clients want an agency that takes time to understand their specific needs and business objectives.",
    icon: <IconTarget stroke={1.5} className="size-8" />,
  },
];
