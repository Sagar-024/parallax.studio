"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/app/components/Shared/Container";
import { motion } from "framer-motion";
// Import all logos
import logo1 from "@/app/assets/logo1.png";
import logo2 from "@/app/assets/logo2.png";
import logo3 from "@/app/assets/logo3.png";
import logo4 from "@/app/assets/logo4.png";
import logo5 from "@/app/assets/logo5.png";
import logo6 from "@/app/assets/logo6.png";

const logos = [
  { title: "Grok", src: logo4 },
  { title: "Anthropic", src: logo2 },
  { title: "OpenAI", src: logo3 },
  { title: "Airbnb", src: logo5 },
  { title: "Oracle", src: logo6 },
  { title: "Character AI", src: logo1 },
];

export const LogoCloud = () => {
  return (
    <section className="py-20 md:py-32 border-y border-neutral-100 dark:border-neutral-900 bg-neutral-50/30 dark:bg-neutral-950/30 overflow-hidden">
      <Container>
        <p className="text-center text-xs md:text-sm font-semibold text-neutral-500 dark:text-neutral-500 mb-12 uppercase tracking-[0.2em]">
          Deployed by the Disruptors
        </p>
      </Container>

      <div className="relative flex overflow-x-hidden group select-none mask-linear-gradient">
        <motion.div
          className="flex whitespace-nowrap items-center min-w-full"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          style={{ display: "flex" }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-12 md:mx-16 relative w-32 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Premium Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-50 dark:from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-50 dark:from-black to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default LogoCloud;
