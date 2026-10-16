"use client";

import { useState } from "react";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/40 bg-[#030014]/80 backdrop-blur-md z-50 px-4 md:px-8">
      <div className="w-full min-h-[68px] flex items-center justify-between m-auto gap-4">
        <Link href="#about-me" className="flex items-center gap-3" aria-label="Muhammad Asim, home">
          <span className="flex items-center justify-center h-10 w-10 rounded-xl border border-purple-400/60 bg-purple-500/15 text-sm font-bold text-white shadow-lg shadow-purple-900/30">
            MA
          </span>
          <span className="hidden sm:block font-semibold text-gray-100">Muhammad Asim</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-200" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="hover:text-cyan-300 transition"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href={LINKS.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-cyan-300 transition"
          >
            GitHub
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              title={name}
            >
              <Icon className="h-5 w-5 text-white hover:text-cyan-300 transition" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="absolute top-[68px] left-0 w-full bg-[#030014] border-t border-white/10 p-6 flex flex-col items-center text-gray-200 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col items-center gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="hover:text-cyan-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-cyan-300 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </Link>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={name}
              >
                <Icon className="h-7 w-7 text-white" />
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
