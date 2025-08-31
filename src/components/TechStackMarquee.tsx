"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  { name: "React", logo: "/assets/React.svg" },
  { name: "Next.js", logo: "/assets/Next.svg" },
  { name: "Tailwind CSS", logo: "/assets/Tailwind.svg" },
  { name: "TypeScript", logo: "/assets/Typescript.svg" },
  { name: "Vite", logo: "/assets/Vite.svg" },
  { name: "Storybook", logo: "/assets/Storybook.svg" },
  { name: "Node.js", logo: "/assets/Node.svg" },
  { name: "Express", logo: "/assets/Express.svg" },
//   { name: "HTML5", logo: "/assets/html5.svg" },
  { name: "CSS3", logo: "/assets/CSS.svg" },
//   { name: "JavaScript", logo: "/assets/javascript.svg" },
//   { name: "Framer Motion", logo: "/assets/framer.svg" },
];

export default function TechStackMarquee() {
  return (
    <section className="bg-gradient-to-br from-brand-light via-white to-brand-sand pt-12 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-brand-brown mb-8">
        Our Tech Stack
      </h2>

      <div className="relative w-full overflow-hidden pb-3">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center px-6 py-4 rounded-xl shadow-lg flex-shrink-0 w-32 h-32 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
              <span className="text-lg font-semibold text-brand-dark text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
