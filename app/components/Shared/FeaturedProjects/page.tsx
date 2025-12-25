"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading } from "../Hero/Heading";
import { Subheading } from "../Hero/Subheading";
import { Container } from "../Container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Neon Fintech",
    category: "Fintech  /  Strategy",
    description:
      "A liquid interface for next-gen banking. 400% increase in user retention.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    color: "bg-blue-950/20",
  },
  {
    id: 2,
    title: "Orbital AI",
    category: "R&D  /  Product",
    description: "Autonomous agent dashboard. Complexity reduced to zero.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    color: "bg-purple-950/20",
  },
  {
    id: 3,
    title: "Velvet Space",
    category: "Architecture  /  Brand",
    description: "Immersive 3D experiential platform. Sold out in 48 hours.",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
    color: "bg-orange-950/20",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
        delay: index * 0.1,
      }}
      className="group relative w-full cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-none md:rounded-sm aspect-[16/10] md:aspect-[2.4/1] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <div
          className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 saturate-0 group-hover:saturate-100"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

        <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6 px-2">
        <div>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-500 mt-2 uppercase tracking-widest">
            {project.category}
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-sm text-lg leading-relaxed md:text-right">
          {project.description}
        </p>
      </div>
      <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 mt-8 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors duration-700" />
    </motion.div>
  );
};

export const FeaturedProjects = () => {
  return (
    <section className="py-24 md:py-40 bg-background">
      <Container>
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <Heading as="h2" className="mb-8">
              Selected Works
            </Heading>
            <Subheading>
              We define categories. <br className="hidden md:block" />
              Here are a few moments of impact.
            </Subheading>
          </div>
          <Link href="/work" className="hidden md:block">
            <ButtonWithArrow>View All</ButtonWithArrow>
          </Link>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 md:mt-32 flex justify-center md:hidden">
          <Link href="/work">
            <ButtonWithArrow>View All Projects</ButtonWithArrow>
          </Link>
        </div>
      </Container>
    </section>
  );
};

const ButtonWithArrow = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium text-lg overflow-hidden transition-all hover:pr-12">
      <span className="relative z-10">{children}</span>
      <span className="absolute right-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <ArrowUpRight className="w-5 h-5" />
      </span>
    </button>
  );
};
