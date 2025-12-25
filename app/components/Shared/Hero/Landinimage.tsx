"use client";
import Image from "next/image";
import uiImage from "@/app/assets/ui1.jpg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Landingimage = () => {
  return (
    <div
      className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full mt-20 perspective-distant sm:translate-x-30 translate-x-4 mt-10 "
      style={{
        // Clip only from bottom: allow overflow on top/left/right, clip at bottom
        clipPath: "inset(-9999px -9999px 0 -9999px)",
      }}
    >
      <motion.div
        className="perspective-[4000px] shadow-2xl"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <Image
          src={uiImage}
          height={1080}
          width={1920}
          alt="agenforce-demo"
          className={cn(
            "rounded-lg shadow-xl mask-r-from-20% mask-b-from-20% absolute inset-0"
          )}
          style={{
            transform: "rotateX(40deg) rotateY(20deg) rotateZ(-35deg)",
          }}
        />
        {/* Reflection */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none rounded-lg z-20 mix-blend-overlay"
          style={{ transform: "rotateX(40deg) rotateY(20deg) rotateZ(-35deg)" }}
        />
      </motion.div>

      <motion.div
        className="perspective-[4000px] shadow-2xl sm:translate-x-8 sm:-translate-y-40 -translate-y-15 translate-x-5"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <Image
          src={uiImage}
          height={1080}
          width={1920}
          alt="agenforce-demo"
          className={cn(
            "rounded-lg shadow-xl mask-r-from-50% mask-b-from-50% absolute inset-0 border-neutral-200 dark:border-neutral-800"
          )}
          style={{
            transform: "rotateX(40deg) rotateY(20deg) rotateZ(-35deg)",
          }}
        />
        {/* Reflection */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-40 pointer-events-none rounded-lg z-20 mix-blend-overlay"
          style={{ transform: "rotateX(40deg) rotateY(20deg) rotateZ(-35deg)" }}
        />
      </motion.div>
    </div>
  );
};
