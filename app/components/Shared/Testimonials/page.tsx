"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading } from "../Hero/Heading";
import { Subheading } from "../Hero/Subheading";
import { Container } from "../Container";
import Image from "next/image";

const testimonials = [
  {
    quote: "They don't just build software. They build intellectual property.",
    author: "Sarah Jenkins",
    role: "Founder, TechFlow (Acquired)",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    metric: "2x Valuation",
  },
  {
    quote:
      "We vetted 20 agencies. They were the only ones who questioned our assumptions.",
    author: "David Chen",
    role: "CEO, Nexus AI",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    metric: "400% Growth",
  },
  {
    quote:
      "Surgical precision. They shipped in 3 weeks what our internal team struggled with for 6 months.",
    author: "Elena Rodriguez",
    role: "VP Product, Bloom",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    metric: "6mo Saved",
  },
  {
    quote:
      "A rare combination of elite engineering and world-class aesthetics.",
    author: "Michael Ross",
    role: "Director, Vercel",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    metric: "99.9% Uptime",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-0 border-t border-neutral-200 dark:border-neutral-800 pt-8"
    >
      <div className="mb-6">
        <span className="block text-4xl md:text-6xl font-display font-bold text-neutral-900 dark:text-neutral-100 tracking-tighter mb-4">
          {testimonial.metric}
        </span>
        <p className="text-lg md:text-xl font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <div className="relative w-8 h-8 rounded-full overflow-hidden grayscale opacity-70">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-200 uppercase tracking-widest">
            {testimonial.author}
          </h4>
          <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-40 bg-background">
      <Container>
        <div className="max-w-4xl mb-20 md:mb-32">
          <Heading as="h2" className="mb-8">
            Outcomes over Output.
          </Heading>
          <Subheading>
            We align with your P&L, not just your backlog.{" "}
            <br className="hidden md:block" />
            See the impact of surgical product design.
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
