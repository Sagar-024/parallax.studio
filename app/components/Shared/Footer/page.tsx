"use client";

import React from "react";
import { Container } from "../Container";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";
import { Magnetic } from "@/app/components/ui/magnetic";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900 pt-32 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32">
          <div className="md:col-span-5 flex flex-col justify-between">
            <Link
              href="/"
              className="text-6xl md:text-8xl lg:text-[9rem] font-bold font-display tracking-tighter leading-[0.8] mb-8 md:mb-0 block text-neutral-900 dark:text-neutral-100 focus:outline-none mix-blend-difference"
            >
              PARALLAX.
            </Link>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mb-8">
              Explore
            </h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-800 dark:text-neutral-300">
              {["Home", "Selected Work", "Expertise", "Philosophy"].map(
                (item) => (
                  <li key={item}>
                    <Magnetic>
                      <Link
                        href="#"
                        className="block w-fit text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </Magnetic>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mb-8">
              Connect
            </h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-800 dark:text-neutral-300">
              {["Twitter / X", "Instagram", "LinkedIn", "GitHub"].map(
                (item) => (
                  <li key={item}>
                    <Magnetic>
                      <Link
                        href="#"
                        className="block w-fit text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </Magnetic>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mb-8">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-800 dark:text-neutral-300">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Magnetic>
                    <Link
                      href="#"
                      className="block w-fit text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-neutral-400 dark:text-neutral-600 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Parallax Inc. Est 2024.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
