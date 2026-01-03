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
  return (
    <div
      className={cn(
        "relative z-20 bg-neutral-100 dark:bg-neutral-800 rounded-lg h-full overflow-hidden mx-auto lg:mx-0 w-full ",
        className
      )}
    >
      {children}
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
        "h-80 sm:h-60 md:h-80 relative overflow-hidden  bg-neutral-100/50 dark:bg-neutral-900 flex justify-center"
      )}
    >
      {children}
    </div>
  );
};
