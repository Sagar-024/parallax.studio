"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee = ({
  children,
  direction = "right",
  speed = 40,
  pauseOnHover = false,
  className,
}: MarqueeProps) => {
  return (
    <div
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
      style={{
        // @ts-ignore
        "--duration": `${speed}s`,
      }}
    >
      <div
        className={cn(
          "flex gap-6 py-4 w-max",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
