import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { SheildIllustration } from "@/Illustrations/general";
import security1 from "@/app/assets/security1.png";
import Image from "next/image";
export const SkeletonCard3 = () => {
  return (
    <div className=" relative h-full w-full flex items-center justify-center mask-radial-from-50% mask-radial-to-70%   ">
      <DottedGlowBackground
        className=" z-0 "
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <div className="relative z-10">
        <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-full scale-75 blur-sm" />
        <SheildIllustration className="relative w-40 h-40" />
      </div>
    </div>
  );
};
