"use client";
import React from "react";
import { Magnetic } from "@/app/components/ui/magnetic";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "../Container";
import { ModeToggle } from "../Theme/ModeToggle";
import { Button } from "@/components/ui/button";
import Sidebar from "./sidebar";
import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Benefits", href: "#benefits" },
  { name: "Pricing", href: "#pricing" },
];
const navLinks2 = [
  { name: "Book a Meeting", href: "https://cal.com/sagar-kharal-dos0d4/30min" },
];

export const Navbar = () => {
  return (
    <div className="flex items-center border-b border-b-neutral-200 dark:border-b-neutral-800 w-screen">
      <Desktopbar />
      <Mobilebar />
    </div>
  );
};

export default Navbar;

const Desktopbar = () => {
  return (
    <Container className=" py-4 flex justify-between items-center w-full hidden md:flex ">
      <Logo />
      <nav className="flex ">
        <ul className="flex gap-x-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              <Magnetic>
                <Link href={link.href} className="block px-2 py-1">
                  {link.name}
                </Link>
              </Magnetic>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        <a
          href="https://cal.com/sagar-kharal-dos0d4/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="default" className="cursor-pointer">
            Book a Meeting
          </Button>
        </a>
        <ModeToggle />
      </div>
    </Container>
  );
};

const Mobilebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden py-4 px-4 justify-between items-center w-full">
      <Logo />

      <Button
        className="cursor-pointer"
        variant="ghost"
        onClick={() => setOpen((value) => !value)}
      >
        <Sidebar className="size-6" />
      </Button>

      {open && (
        <motion.div
          className="fixed inset-0 w-screen min-h-screen z-50"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1, backdropFilter: "blur(15px)" }}
          exit={{ opacity: 0, scale: 0.98, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between p-4">
            <Logo className="text-2xl" />

            <div className="flex gap-2 items-center">
              <ModeToggle />
              <Button
                className="cursor-pointer"
                variant="ghost"
                onClick={() => setOpen((value) => !value)}
              >
                <IconX className="size-9 font-bold" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 font-bold font-display p-4 text-2xl">
            <div className="flex gap-3 ">
              {navLinks2.map((link, index) => {
                return (
                  <motion.div
                    key={index + link.name}
                    initial={{
                      opacity: 0,
                      scale: 0.98,
                      backdropFilter: "blur(2px)",
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      backdropFilter: "blur(0px)",
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                      backdropFilter: "blur(2px)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <Button variant="default" asChild className="font-bold">
                      <a href={link.href}>{link.name}</a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>

            {navLinks.map((link, index) => {
              return (
                <motion.div
                  key={index + link.name}
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    backdropFilter: "blur(2px)",
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    backdropFilter: "blur(0px)",
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    backdropFilter: "blur(2px)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};
