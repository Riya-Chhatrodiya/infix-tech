"use client";

import { motion } from "framer-motion";

const contentTable = [
  "We combine cutting-edge technology with strategic management to deliver exceptional solutions.",
  "Our integrated approach ensures innovative results while keeping projects on track.",
  "Collaboration, quality, and efficiency are at the heart of everything we do.",
  "From ideation to execution, we turn ideas into scalable, sustainable digital experiences.",
];

export default function InfixTechContent() {
  return (
    <section className="bg-[#FDF8F2] py-16 px-6 md:flex justify-center">
      <div className="flex max-w-5xl w-full flex-col gap-6">
        {/* Section Title */}
        <div className="flex flex-col justify-start items-start text-brand-brown font-bold mb-8">
          <span className="text-2xl md:text-3xl tracking-widest md:whitespace-nowrap mb-2">
            TECHNOLOGY + MANAGEMENT
          </span>
          <span className="md:h-1 w-28 bg-brand-brown mt-1"></span>
        </div>

        {/* Single-column table-like cards with light background and sand borders */}
        {contentTable.map((line, index) => (
          <motion.div
            key={index}
            className="bg-[#FDF8F2] border-2 border-brand-sand p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <p className="text-lg lg:text-xl text-brand-dark">{line}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
