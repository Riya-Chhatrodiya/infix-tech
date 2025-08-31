// src/components/InfixAcronym.tsx
"use client";

import { motion } from "framer-motion";

const storyBeats = [
  { letter: "I", title: "Intelligence", description: "Driving smart solutions with AI, automation, and data-driven insights." },
  { letter: "N", title: "Networked Solutions", description: "Building connected systems and integrated platforms for seamless digital experiences." },
  { letter: "F", title: "Future-Driven", description: "Building scalable, sustainable solutions that anticipate tomorrow’s challenges." },
  { letter: "I", title: "Innovation", description: "Fostering creativity and experimentation to deliver breakthrough results." },
  { letter: "X", title: "eXcellence in Tech", description: "Ensuring high-quality, robust, and secure digital experiences." },
];

export default function InfixAcronym() {
  return (
    <section className="bg-[#FDF8F2] py-16 px-6 md:flex justify-center">
      <div className="flex max-w-5xl w-full gap-8 items-start">
        {/* Left Side Vertical Label (Single Line) */}
        <div className="hidden md:flex flex-col justify-start items-baseline text-brand-brown font-bold md:mt-[200px]">
          <span className="text-2xl md:text-lg tracking-widest whitespace-nowrap transform -rotate-90 origin-left mb-2">
            OUR APPROACH
          </span>
          <span className="md:h-20 border-l-2 border-brand-brown mt-1"></span>
        </div>

        {/* Story Beats */}
        <div className="flex flex-col gap-8 w-full">
          {storyBeats.map((beat, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-brand-brown w-12 flex-shrink-0">
                {beat.letter}
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-semibold text-brand-dark">{beat.title}</span>
                <p className="text-base lg:text-lg text-brand-dark/80">{beat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
