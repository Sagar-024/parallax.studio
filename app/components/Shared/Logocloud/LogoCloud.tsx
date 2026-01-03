"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/app/components/Shared/Container";
import { motion } from "framer-motion";
import logo1 from "@/app/assets/logo1.png";
import logo2 from "@/app/assets/logo2.png";
import logo3 from "@/app/assets/logo3.png";
import logo4 from "@/app/assets/logo4.png";
import logo5 from "@/app/assets/logo5.png";
import logo6 from "@/app/assets/logo6.png";
import { Subheading } from "../Hero/Subheading";

const logos = [
  { title: "Character.ai", src: logo1 },
  { title: "Claude", src: logo2 },
  { title: "Open AI", src: logo3 },
  { title: "Grok AI", src: logo4 },
  { title: "Perplexity", src: logo5 },
  { title: "Oracle", src: logo6 },
];

export const LogoCloud = () => {
  return (
    <div className="py-20 md:py-32 border-y border-neutral-100 dark:border-neutral-900 bg-neutral-50/30 dark:bg-neutral-950/30 overflow-hidden">
      <Container>
        <Subheading className="text-center text-xs md:text-sm font-bold text-neutral-600 dark:text-neutral-500 mb-12 uppercase tracking-[0.2em]  mx-auto">
          Integrated with the world's leading AI models
        </Subheading>
        <div className="grid grid-cols-2 md:grid-cols-3     mx-w-3xl">
          {logos.map((logo, index) => (
            <motion.div
              className="flex justify-center items-center overflow-hidden flex-1"
              key={logo.title}
              initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width={100}
                height={100}
                className="object-contain  mx-auto dark:invert"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
