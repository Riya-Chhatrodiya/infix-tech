"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCommentDots } from "react-icons/fa"; // message icon

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0A0908] text-[#EAE0D5] font-montserrat shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          INFIX <span className="text-[#C6AC8F]">TECH</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 font-nunito text-lg">
            <li>
              <Link href="/" className="hover:text-[#C6AC8F] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#C6AC8F] transition-colors"
              >
                Projects
              </Link>
            </li>
          </ul>

          {/* Let's Talk Marquee Button */}
          <motion.div
            className="overflow-hidden rounded-full border-2 border-[#C6AC8F] cursor-pointer"
            animate={{ x: ["0%", "-5%", "0%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-2 bg-[#C6AC8F] text-[#0A0908] font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <button>Let&apos;s Talk</button>
              <FaRegCommentDots className="w-5 h-5" />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#EAE0D5] transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#EAE0D5] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#EAE0D5] transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0A0908] overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 font-nunito text-lg px-6 py-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C6AC8F] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#C6AC8F] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full text-[#C6AC8F] font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] transition-colors duration-300 shadow-md hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <button>Let&apos;s Talk</button>
                  <FaRegCommentDots className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
