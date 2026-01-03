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
    <div className="pt-10 md:pt-20 lg:pt-24">
      <Container>
        <Heading as="h1" className="tracking-[-0.04em] leading-[0.9] mb-6">
          We Don't Just Build. <br /> We Define Categories.
        </Heading>
        <Subheading className="mt-8 text-neutral-500 dark:text-neutral-400 font-inter text-lg md:text-xl max-w-2xl leading-relaxed">
          Parallax is a multidisciplinary studio blending cinematic motion,
          surgical engineering, and strategic design to create digital products
          that cannot be ignored.
        </Subheading>

        <div className="flex items-center gap-6 mt-10">
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
              Start Your Project
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
