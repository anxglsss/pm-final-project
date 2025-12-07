"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React from "react";

const authors = [
  {
    role: "ML-Engineer",
    name: "Sabit Sayasat",
    image: "/photo_2025-05-27_23-42-53.jpg",
    colors: [[59, 130, 246], [147, 51, 234]], // blue to purple
  },
  {
    role: "Backend Developer",
    name: "Assanbaev Dauren",
    image: "/photo_2025-09-21_22-58-03.jpg",
    colors: [[236, 72, 153], [251, 191, 36]], // pink to yellow
  },
  {
    role: "Project Manager",
    name: "Amir Karimov",
    image: "/photo_2025-11-14_23-16-03.jpg",
    colors: [[34, 197, 94], [125, 211, 252]], // green to sky
  },
  {
    role: "Frontend Developer",
    name: "Madiyar Abiken",
    image: "/photo_2025-09-23_20-42-36.jpg",
    colors: [[168, 85, 247], [236, 72, 153]], // purple to pink
  },
];

export function AuthorsReveal() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
      {authors.map((author, index) => (
        <AuthorCard key={index} author={author} />
      ))}
    </div>
  );
}

const AuthorCard = ({ author }: { author: typeof authors[0] }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center max-w-xs w-full mx-auto p-4 relative h-[20rem] rounded-xl overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={author.colors}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,white,transparent)] bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white/20">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {author.role}
          </div>
        </div>
        <h2 className="text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {author.name}
        </h2>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

