"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "./Marquee";
import { Container } from "../Container";

import project1 from "@/app/assets/works/show1.webp";
import project2 from "@/app/assets/works/show2.webp";
import project3 from "@/app/assets/works/show3.webp";
import project4 from "@/app/assets/works/original-164b1526dac84e36b494e1a60d7961a2.jpg";
import project5 from "@/app/assets/works/0f4bf3c6ce651ec4b5350e4e4a2af1c4.jpg";
import project6 from "@/app/assets/works/91fce2fbc322ecb0f6b7df8958389c7e.webp";
import project7 from "@/app/assets/works/original-1840e2de901619557990728c3e74a094.jpg";

// New images
import project8 from "@/app/assets/works/show11.webp";
import project9 from "@/app/assets/works/original-11a8d808b287b6db0f9a2ca459f461cd.webp";
import project10 from "@/app/assets/works/original-1a40e7eb7549f2bd1dd6559cdecee955.webp";
import project11 from "@/app/assets/works/stage-1767518571332.webp";

const PROJECTS_ROW_1 = [
  { image: project1, alt: "Project Show 1" },
  { image: project2, alt: "Project Show 2" },
  { image: project3, alt: "Project Show 3" },
  { image: project4, alt: "Project Original 1" },
  { image: project5, alt: "Project 5" },
  { image: project6, alt: "Project 6" },
  { image: project7, alt: "Project 7" },
];

const PROJECTS_ROW_2 = [
  { image: project8, alt: "Project Show 11" },
  { image: project9, alt: "Project 8" },
  { image: project10, alt: "Project 9" },
  { image: project11, alt: "Project Stage" },
];

export const Works = () => {
  return (
    <section
      id="works"
      className="py-16 md:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950 overflow-hidden"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-12 md:mb-16">
            Selected Works
          </h2>

          <div className="flex flex-col gap-8 w-full">
            {/* First Marquee Row - Right to Left */}
            <Marquee direction="right" speed={50}>
              {PROJECTS_ROW_1.map((project, idx) => (
                <div
                  key={`work-row1-${idx}`}
                  className="relative overflow-hidden rounded-3xl h-[340px] w-[480px] md:h-[400px] md:w-[620px] lg:h-[460px] lg:w-[720px] flex-shrink-0 shadow-lg dark:shadow-2xl shadow-black/5 dark:shadow-black/40"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 60vw, 720px"
                    quality={92}
                    priority={idx < 3}
                  />
                </div>
              ))}
            </Marquee>

            {/* Second Marquee Row - Left to Right */}
            <Marquee direction="left" speed={50}>
              {PROJECTS_ROW_2.map((project, idx) => (
                <div
                  key={`work-row2-${idx}`}
                  className="relative overflow-hidden rounded-3xl h-[340px] w-[480px] md:h-[400px] md:w-[620px] lg:h-[460px] lg:w-[720px] flex-shrink-0 shadow-lg dark:shadow-2xl shadow-black/5 dark:shadow-black/40"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 60vw, 720px"
                    quality={92}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </Container>
    </section>
  );
};
