import React from "react";
import { Heading } from "./Heading";
import { Subheading } from "./Subheading";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import uiImage from "@/app/assets/ui.jpg";
import { Landinimage } from "./Landinimage";

export default function Hero() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-24">
      <Container>
        <Heading as="h1">
          Agent that do the work <br /> Approval that keep you happy
        </Heading>
        <Subheading className="mt-4 text-neutral-400 dark:text-neutral-600 font-inter py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </Subheading>

        <div className="flex items-center gap-4">
          <Button variant="default" className="shadow-brand">
            <Link href="/pricing" className="flex items-center gap-1">
              Start a 30 day pilot
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/demos" className="flex items-center gap-1">
              View role based demos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <Landinimage />
      </Container>
    </div>
  );
}
