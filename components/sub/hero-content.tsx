"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 lg:px-20 pt-28 md:pt-36 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-left">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-90 mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            BS Artificial Intelligence Student · IUB
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m Muhammad Asim.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              AI Developer in the making.
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 my-3 max-w-[650px] leading-8"
        >
          I build and improve practical web products, automation tools, and AI-focused projects. I enjoy learning by shipping real software, solving problems, and turning ideas into useful experiences.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Explore my projects
          </a>
          <a
            href="mailto:sanjarkhanabbasi786@gmail.com"
            className="py-3 px-6 text-center text-white border border-[#7042f8] hover:bg-[#7042f8]/20 transition rounded-lg"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-[420px] flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Abstract space illustration representing exploration and technology"
          height={520}
          width={520}
          priority
          draggable={false}
          className="select-none w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
