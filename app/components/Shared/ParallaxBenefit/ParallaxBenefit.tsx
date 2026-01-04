"use client";

import React from "react";
import { Container } from "../Container";
import { motion } from "framer-motion";

export const ParallaxBenefit = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white dark:bg-black overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Benefit of Parallax
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Why Settle for Less? Before you dive in, let's show you why our
            subscription is the game-changer your business needs.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
