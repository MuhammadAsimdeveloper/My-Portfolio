"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section className="flex flex-col relative items-center justify-center min-h-[520px] w-full px-6 py-16">
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-35">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>

      <motion.div
        variants={slideInFromTop}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Building with purpose
        </h2>
        <p className="mt-5 text-gray-300 text-base md:text-lg leading-8">
          I want the software I build to be useful, understandable, and dependable. My approach is to start with a real problem, build a focused solution, test the details, and keep improving it.
        </p>

        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-purple-400/30 bg-[#030014]/75 px-5 py-4 shadow-lg shadow-purple-950/30">
          <Image
            src="/lock-main.png"
            alt="Lock symbol representing care for reliability and privacy"
            width={48}
            height={48}
          />
          <div className="text-left">
            <p className="text-white font-semibold">Thoughtful by design</p>
            <p className="text-sm text-gray-400">Usability · Reliability · Continuous learning</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
