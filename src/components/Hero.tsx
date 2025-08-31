"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-light via-white to-brand-sand text-brand-dark min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-black leading-tight">
            Empowering Innovation with{" "}
            <span className="text-brand-brown relative">
              INFIX TECH
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-brand-sand/60 -z-10 rounded"></span>
            </span>
          </h1>

          <motion.p
            className="mt-6 text-lg lg:text-xl font-body text-brand-dark/80 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We integrate intelligence into technology to help businesses
            innovate, scale, and thrive in the digital era.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="btn-primary hover:scale-105 hover:shadow-lg transition-transform">
              Schedule a Meeting
            </button>
            <button className="btn-outline hover:scale-105 hover:shadow-md transition-transform">
              Discover How We Work
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual / Illustration */}
        <motion.div
          className="relative flex-1 flex justify-center mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-2xl shadow-2xl bg-brand-sand flex items-center justify-center relative"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden bg-brand-sand flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400"
                className="w-full h-full"
              >
                <defs>
                  {/* Updated line gradient for contrast */}
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5A3E36" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#A17C6B" stopOpacity="0.8" />
                  </linearGradient>
                  {/* Node glow gradient */}
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#5A3E36" stopOpacity="1" />
                    <stop offset="100%" stopColor="#A17C6B" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Digital grid lines */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="20"
                    y1={80 + i * 60}
                    x2="380"
                    y2={80 + i * 60}
                    stroke="#5A3E36/50"
                    strokeWidth="1"
                  />
                ))}
                {Array.from({ length: 5 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={80 + i * 60}
                    y1="20"
                    x2={80 + i * 60}
                    y2="380"
                    stroke="#5A3E36/50"
                    strokeWidth="1"
                  />
                ))}

                {/* Nodes */}
                <circle cx="80" cy="80" r="6" fill="url(#nodeGlow)" />
                <circle cx="140" cy="140" r="6" fill="url(#nodeGlow)" />
                <circle cx="200" cy="200" r="8" fill="url(#nodeGlow)" />
                <circle cx="260" cy="260" r="6" fill="url(#nodeGlow)" />
                <circle cx="320" cy="320" r="6" fill="url(#nodeGlow)" />

                {/* Connections */}
                <line x1="80" y1="80" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
                <line x1="140" y1="140" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
                <line x1="260" y1="260" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
                <line x1="320" y1="320" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
              </svg>

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6">
                <p className="text-white text-lg lg:text-2xl font-heading font-bold text-center">
                  Building the Future with Intelligence + Innovation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Glow */}
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-brown/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
