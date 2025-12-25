"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/app/components/ui/magnetic";

export const CTA = () => {
  return (
    <section className="py-32 md:py-48 bg-black text-white overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-20%] right-[0%] w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[0%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-mono text-neutral-400 mb-8 uppercase tracking-widest">
              Limited Availability for Q1 2026
            </p>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter mb-12 leading-[0.9]">
              Let's create <br />
              <span className="text-neutral-500">the inevitable.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Magnetic>
              <Button className="h-20 px-12 text-2xl rounded-full bg-white text-black hover:bg-neutral-100 transition-all duration-300 shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
                Start Your Project
                <ArrowRight className="ml-3 w-8 h-8" />
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
