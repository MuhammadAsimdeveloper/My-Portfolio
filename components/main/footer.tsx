import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-transparent text-gray-200 shadow-lg px-6 py-10">
      <div className="max-w-6xl flex flex-col items-center justify-center m-auto gap-8">
        <div className="w-full flex flex-row items-start justify-center md:justify-between gap-10 flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start"
            >
              <h3 className="font-bold text-base mb-1">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                  className="flex flex-row items-center my-2 hover:text-cyan-300 transition"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="text-sm ml-2">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full border-t border-white/10 pt-6 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Muhammad Asim · Built with curiosity and consistency.
        </div>
      </div>
    </footer>
  );
};
