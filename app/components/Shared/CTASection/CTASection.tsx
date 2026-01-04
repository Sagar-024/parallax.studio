"use client";

import React from "react";
import { Container } from "../Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "minimal" | "bold";
}

export const CTASection = ({
  title = "Ready to Start Your Project?",
  subtitle = "Let's discuss how we can bring your vision to life.",
  variant = "default",
}: CTASectionProps) => {
  if (variant === "minimal") {
    return (
      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white mb-4 tracking-tight leading-tight">
              {title}
            </h3>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <a
              href="https://cal.com/sagar-kharal-dos0d4/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium text-base transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </a>
          </motion.div>
        </Container>
      </section>
    );
  }

  if (variant === "bold") {
    return (
      <section className="py-24 md:py-32 lg:py-40 bg-neutral-900 dark:bg-black relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 via-transparent to-transparent" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <a
              href="https://cal.com/sagar-kharal-dos0d4/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </a>
          </motion.div>
        </Container>
      </section>
    );
  }

  // Default variant - Apple-inspired clean design
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Clean, centered layout */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Premium button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://cal.com/sagar-kharal-dos0d4/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium text-base transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Book Your Free Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </a>

              {/* Subtle trust indicator */}
              <span className="text-sm text-neutral-500 dark:text-neutral-500 font-normal">
                30 minutes · No commitment
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
