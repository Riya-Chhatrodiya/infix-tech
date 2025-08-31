"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "919328271082"; // country code + number, no + or spaces
  const whatsappMessage =
    "Hello, I visited your Infix Tech website and would like to connect.";

  return (
    <footer className="bg-[#0A0908] text-[#EAE0D5] font-montserrat">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left: Logo & Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold tracking-wide">
            INFIX <span className="text-[#C6AC8F]">TECH</span>
          </h1>
          <p className="text-[#EAE0D5]/80 max-w-sm">
            Empowering businesses through innovation and intelligent digital solutions.
          </p>
          <p className="text-[#EAE0D5]/80">
            Email:{" "}
            <a
              href="mailto:infix.tech.company@gmail.com"
              className="underline hover:text-[#C6AC8F] transition-colors"
            >
              infix.tech.company@gmail.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/infixtechcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-[#EAE0D5] w-6 h-6 hover:text-[#C6AC8F] transition-colors" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-[#25D366] w-6 h-6 hover:opacity-80 transition-opacity" />
            </motion.a>
          </div>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#C6AC8F]">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-[#EAE0D5]/80">
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
            <li>
              <Link
                href="/contact"
                className="hover:text-[#C6AC8F] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C6AC8F]/30 mt-8 py-4 text-center text-sm text-[#EAE0D5]/60">
        &copy; {new Date().getFullYear()} Infix Tech. All rights reserved.
      </div>
    </footer>
  );
}
