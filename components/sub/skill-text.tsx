"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-90"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Learning, building, and improving
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl md:text-4xl text-white font-semibold mt-5 text-center mb-4"
      >
        Technologies I use and explore
      </motion.div>

      <motion.p
        variants={slideInFromRight(0.5)}
        className="max-w-3xl text-base md:text-lg text-gray-300 leading-8 mb-6"
      >
        My foundations include C, C++, JavaScript, HTML, and CSS. I&apos;m continuing to learn Python, and exploring React, Next.js, and TypeScript while building projects. This list reflects an evolving toolkit—not a claim that every technology is an expert-level skill.
      </motion.p>
    </div>
  );
};
