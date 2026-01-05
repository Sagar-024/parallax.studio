"use client";
import React from "react";
import { Container } from "../Container";
import { Logo } from "../Navbar/logo";
import { Magnetic } from "@/app/components/ui/magnetic";
import Link from "next/link";
import {
  IconBrandTwitter,
  IconMail,
  IconArrowUpRight,
} from "@tabler/icons-react";

const footerLinks = {
  navigation: [
    { name: "Works", href: "#works" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
  ],
  services: [
    { name: "Web Development", href: "#pricing" },
    { name: "UI/UX Design", href: "#features" },
    { name: "Brand Strategy", href: "#benefits" },
    { name: "Consultation", href: "https://cal.com/sagar-kharal-dos0d4/30min" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      <Container className="relative z-10 py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xs">
              Crafting premium digital experiences that transform ideas into
              reality. Built with precision, designed for impact.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <Magnetic>
                <a
                  href="https://x.com/skharal4_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all duration-200"
                  aria-label="Twitter"
                >
                  <IconBrandTwitter className="w-4 h-4" stroke={2} />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="mailto:sagarkharal024@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all duration-200"
                  aria-label="Email"
                >
                  <IconMail className="w-4 h-4" stroke={2} />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Magnetic>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Magnetic>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:sagarkharal024@gmail.com"
                className="group flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                <IconMail className="w-4 h-4 mt-0.5 flex-shrink-0" stroke={2} />
                <span className="break-all">sagarkharal024@gmail.com</span>
              </a>

              <a
                href="https://cal.com/sagar-kharal-dos0d4/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200"
              >
                Book a Meeting
                <IconArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  stroke={2.5}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {currentYear} Parallax. Built with love by Sagar Kharal.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-neutral-600 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
