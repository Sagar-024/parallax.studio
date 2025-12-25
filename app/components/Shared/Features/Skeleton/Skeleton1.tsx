"use client";
import React from "react";
import { IconClock } from "@tabler/icons-react";
import { IconAlertCircle } from "@tabler/icons-react";
import { IconBrandDatabricks } from "@tabler/icons-react";
import { IconRipple } from "@tabler/icons-react";
import {
  IconPlus,
  IconChartBar,
  IconCircleCheck,
  IconCircleDashedCheck,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const SkeletonCard1 = () => {
  return (
    <div
      className="absolute inset-0 perspective-distant -translate-y-5   mask-radial-from-50%  mask-r-from-50%"
      style={{
        transform: "rotateX(30deg) rotateY(-25deg) rotateZ(25deg) scale(1.3)",
      }}
    >
      <SmallCard
        icon={
          <IconChartBar
            className="text-neutral-500 dark:text-neutral-400 size-5"
            stroke={2}
          />
        }
        title="Brand Identity"
        badge={<Badge variants="Last" text="Active" />}
        description="Defining the visual language, typography, and core aesthetics."
        className="top-[21%] w-[75%] z-10 left-2"
        delay={0.1}
      />

      <SmallCard
        icon={
          <IconAlertCircle
            className="text-neutral-500 dark:text-neutral-400 size-5"
            stroke={2}
          />
        }
        title="Motion Design"
        badge={<Badge variants="secondary" text="In Review" />}
        description="Crafting fluid interactions and cinematic transitions."
        className="bottom-[4.3rem] w-[85%] z-20 left-6"
        delay={0.2}
      />

      <SmallCard
        icon={
          <IconCircleDashedCheck className="text-neutral-600 dark:text-neutral-100 size-5" />
        }
        title="System Architecture"
        badge={<Badge variants="primary" text="Shipped" />}
        description="Scalable, fault-tolerant engineering for global deployments."
        tags={["React", "Next.js", "WebGL"]}
        className="bottom-0  z-30 left-10 w-[90%]"
        delay={0.3}
      />
    </div>
  );
};

interface SmallCardProps {
  icon: React.ReactNode;
  title: string;
  badge?: React.ReactNode;
  description?: string;
  tags?: string[];
  className?: string;
  delay?: number;
}

export const SmallCard = ({
  icon,
  title,
  badge,
  description,
  tags,
  className,
  delay = 0,
}: SmallCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{
        opacity: [0, 1, 1, 1, 0],
        y: [-30, 0, 0, 0, -30],
        scale: [0.95, 1, 1, 1, 0.95],
      }}
      transition={{
        delay: delay ?? 0,
        duration: 3, // Total cycle: 3 seconds
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1, // Optional: pause between cycles (adjust as needed)
        times: [0, 0.15, 0.25, 0.85, 1], // Precise timing
      }}
      className={cn(
        "absolute w-[92%] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-500 rounded-2xl p-4   origin-top cursor-pointer shadow-2xl",
        className
      )}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-neutral-800 dark:text-neutral-100 font-bold text-sm">
            {title}
          </span>
        </div>
        {badge}
      </div>

      {description && (
        <p className="text-sm text-neutral-400 dark:text-neutral-400 mb-4  leading-relaxed mt-1 font-normal">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index} texts={tag} />
          ))}
        </div>
      )}
    </motion.div>
  );
};
export const Badge = ({
  variants,
  text,
  className,
}: {
  variants: "primary" | "secondary" | "Last";
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "px-2 py-0.5 flex justify-between items-center gap-1.5 rounded-full w-fit border",
        variants === "primary" &&
          "bg-red-500/10 border-red-500/20 text-red-400",
        variants === "secondary" &&
          "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        variants === "Last" &&
          "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
        className
      )}
    >
      <IconClock className={cn("size-3.5")} stroke={1.5} />
      <p className="text-xs font-semibold font-mono tracking-tighter">{text}</p>
    </div>
  );
};

export const Tag = ({ texts }: { texts: string }) => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 font-medium rounded-full whitespace-nowrap">
      {texts}
    </div>
  );
};
