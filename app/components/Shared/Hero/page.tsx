import React from "react";
import { Heading } from "./Heading";
import { Subheading } from "./Subheading";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Landingimage } from "./Landinimage";

export default function Hero() {
  return (
    <div className="pt-16 md:pt-24 lg:pt-32">
      <Container>
        <Heading as="h1" className="tracking-[-0.04em] leading-[0.9] mb-8">
          We Turn Your Ideas <br /> Into Working Products.
        </Heading>
        <Subheading className="mt-6 text-neutral-500 dark:text-neutral-400 font-inter text-lg md:text-xl max-w-2xl leading-relaxed">
          We build{" "}
          <span className="text-black dark:text-white font-medium">
            high-converting landing pages
          </span>
          , <span className="text-black dark:text-white font-medium">MVPs</span>
          , and{" "}
          <span className="text-black dark:text-white font-medium">
            full-stack applications
          </span>{" "}
          that scale with your vision.
        </Subheading>

        <div className="flex items-center gap-6 mt-12">
          <Button
            variant="default"
            className="shadow-brand h-12 px-6 rounded-full text-base"
            asChild
          >
            <a
              href="https://cal.com/sagar-kharal-dos0d4/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Book a Meeting
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>

          {/* <Button
            variant="ghost"
            className="h-12 px-6 rounded-full text-base hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Link href="/work" className="flex items-center gap-2">
              View Selected Work
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button> */}
        </div>
        <Landingimage />
      </Container>
    </div>
  );
}
