"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

import {
  IconCircleDashedCheck,
  IconRipple,
  IconReport,
  IconLoader,
} from "@tabler/icons-react";
import { Badge } from "./Skeleton1";

const cardVariants: Variants = {
  rest: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  hover: {
    opacity: [0, 1, 1, 1, 0],
    y: [0, -18, -18, -18, 0],
    x: [0, 25, 25, 25, 0],
    scale: [0.95, 1, 1, 1, 0.95],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
      times: [0, 0.15, 0.25, 0.85, 1],
    },
  },
};

const rowVariants: Variants = {
  rest: {
    opacity: 1,
    rotateX: -90,
    y: -10,
  },
  hover: {
    opacity: [0, 1, 1, 1, 0],
    rotateX: [-90, 0, 0, 0, -90],
    y: [-10, 0, 0, 0, -10],
    transition: {
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 1,
      times: [0, 0.15, 0.25, 0.85, 1],
    },
  },
};

interface RowProps {
  icon: React.ReactNode;
  text: string;
  time: string;
  delay?: number;
}

const Row = ({ icon, text, time, delay = 0 }: RowProps) => {
  // Create row variant with custom delay
  const rowVariantWithDelay: Variants = {
    rest: {
      opacity: 1,
      rotateX: 0,
      y: 0,
    },
    hover: {
      opacity: [0, 1, 1, 1, 0],
      rotateX: [-90, 0, 0, 0, -90],
      y: [-10, 0, 0, 0, -10],
      transition: {
        delay: delay,
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 1,
        times: [0, 0.15, 0.25, 0.85, 1],
      },
    },
  };

  return (
    <motion.div
      variants={rowVariantWithDelay}
      className="flex items-center justify-between px-5 py-3 flex-1"
      style={{ transformOrigin: "top center" }}
    >
      <div className="flex items-center gap-3">
        <span className="text-neutral-600 dark:text-neutral-400">{icon}</span>
        <p className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-neutral-400">
        <IconRipple className="size-3.5" />
        <p className="text-xs font-bold">{time}</p>
      </div>
    </motion.div>
  );
};

export const SkeletonCard2 = () => {
  return (
    // Outer wrapper - triggers hover on children
    <motion.div
      initial="rest"
      whileInView="hover"
      animate="rest"
      className={cn(
        "w-[85%] bg-neutral-100/50 dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-500 rounded-2xl p-4 origin-top cursor-pointer shadow-2xl h-full [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 flex flex-col perspective-distant -translate-x-14 translate-y-7"
      )}
      style={{
        transform: "rotateX(28deg) rotateZ(-25deg) scale(1.06) rotateY(25deg)",
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3">
          <IconCircleDashedCheck className="text-neutral-600 dark:text-neutral-100 size-5" />
          <span className="text-neutral-800 dark:text-neutral-100 font-bold text-sm">
            Deployment Pipeline
          </span>
        </div>
        <Badge variants="primary" text="Live" />
      </div>

      <div className="relative flex-1 mt-4 border border-neutral-400 dark:border-neutral-500 rounded-2xl bg-neutral-200 dark:bg-neutral-800">
        <Pattern />
        {/* Inner card with variants - responds to parent hover */}
        <motion.div
          variants={cardVariants}
          className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-300 dark:border-neutral-600 flex flex-col py-2 overflow-hidden divide-y divide-neutral-200 dark:divide-neutral-600"
          style={{ perspective: "1000px" }}
        >
          <Row
            icon={<IconCircleDashedCheck />}
            text="Compiling Assets"
            time="2s"
            delay={0.1}
          />
          <Row
            icon={<IconCircleDashedCheck />}
            text="Optimizing Images"
            time="4s"
            delay={0.2}
          />
          <Row
            icon={<IconCircleDashedCheck />}
            text="Running Tests"
            time="12s"
            delay={0.3}
          />
          <Row
            icon={<IconLoader />}
            text="Deploying to Edge"
            time="Active"
            delay={0.4}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  );
};
