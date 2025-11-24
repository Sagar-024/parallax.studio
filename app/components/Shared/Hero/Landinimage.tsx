"use client";
import Image from "next/image";
import uiImage from "@/app/assets/ui.jpg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "../Container";

const container = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: -200,
    filter: "blur(1px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
};

export const Landinimage = () => {
  return (
    <Container>
      <div className="relative min-h-140 w-full pt-50 ">
        <motion.div
          className="perspective-[4000px] "
          initial="hidden"
          animate="visible"
          transition={container.transition}
          variants={container}
        >
          <Image
            src={uiImage}
            width={1400}
            height={900}
            alt="agenforce-demo"
            className={cn(
              "rounded-[20px] shadow-2xl mask-r-from-20% mask-b-from-20% absolute inset-0 z-1"
            )}
            style={{
              transform: "rotateX(20deg) rotateY(30deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>

        <motion.div
          className="perspective-[4000px] "
          initial="hidden"
          animate="visible"
          transition={container.transition}
          variants={container}
        >
          <Image
            src={uiImage}
            width={1400}
            height={900}
            alt="agenforce-demo"
            className={cn(
              "rounded-[20px] shadow-2xl mask-r-from-50% mask-b-from-50% absolute inset-0 z-1 translate-x-20 -translate-y-40"
            )}
            style={{
              transform: "rotateX(20deg) rotateY(30deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
    </Container>
  );
};
