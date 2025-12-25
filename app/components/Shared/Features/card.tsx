"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Heading } from "../Hero/Heading";
import {
  IconPlus,
  IconChartBar,
  IconAlertCircle,
  IconCircleCheck,
  IconCircleDashedCheck,
} from "@tabler/icons-react";
import { Badge } from "./Skeleton/Skeleton1";
import { SkeletonCard1 } from "./Skeleton/Skeleton1";
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative p-[1px] rounded-lg overflow-hidden group ",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), transparent 40%)`,
        }}
      />
      <div className="relative z-20 bg-neutral-100 dark:bg-neutral-800 rounded-lg h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export const Cardtittle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(" text-lg md:text-2xl font-bold font-display", className)}
    >
      {children}
    </h3>
  );
};

export const CardPlus = () => {
  return (
    <button className="border border-neutral-200 dark:border-neutral-800 rounded-full">
      <IconPlus stroke={2} className="size-5 md:size-10" />
    </button>
  );
};

export const CardSkeloton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-40 md:h-80 relative overflow-hidden  bg-white dark:bg-neutral-900 flex justify-center"
      )}
    >
      {children}
    </div>
  );
};
