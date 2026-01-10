"use client";
import React from "react";
import { Container } from "../Container";
import { motion } from "framer-motion";
import { IconQuote, IconStar } from "@tabler/icons-react";

export const Testimonials = () => {
  return (
    <Container
      id="testimonials"
      className="relative w-full py-16 md:py-24 lg:py-32"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 70%, transparent 100%)",
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                Client Reviews
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight leading-[1.1]">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-400">
              Clients Say
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Real feedback from real clients who trusted us with their vision.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-4 text-neutral-400 dark:text-neutral-600">
                  <IconQuote stroke={1.5} className="size-8" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <IconStar
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                      stroke={1.5}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center">
                    <span className="text-lg font-bold text-neutral-700 dark:text-neutral-300">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-100/50 to-transparent dark:from-neutral-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Below Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
            Ready to join our satisfied clients?
          </p>
          <a
            href="https://cal.com/sagar-kharal-dos0d4/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </Container>
    </Container>
  );
};

// Placeholder testimonials - ready to be replaced with real client reviews
const testimonials = [
  {
    quote:
      "Working with Sagar was exceptional. The website exceeded our expectations in both design and functionality. Highly professional and responsive throughout the entire process.",
    name: "Alex Thompson",
    role: "Founder @ TechStart",
    initials: "AT",
  },
  {
    quote:
      "Delivered our project on time and exactly as discussed. The attention to detail and quality of work is outstanding. Would absolutely recommend to anyone looking for a premium website.",
    name: "Maria Garcia",
    role: "CEO @ DesignHub",
    initials: "MG",
  },
  {
    quote:
      "From the first call to final delivery, everything was smooth and professional. Our conversion rate increased by 40% after launch. Best investment we made this year.",
    name: "James Chen",
    role: "Product Lead @ StartupXYZ",
    initials: "JC",
  },
];
