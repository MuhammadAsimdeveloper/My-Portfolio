import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  const isLive = title === "Muhammad Asim Web Agency";
  const ProjectIcon = title.includes("Web Agency")
    ? GlobeAltIcon
    : title.includes("Atlas")
      ? EnvelopeIcon
      : CodeBracketIcon;

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-purple-400/20 bg-[#08051b]/85 shadow-lg shadow-purple-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-950/20"
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-[#11102d] to-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.22),transparent_50%)]" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-black/20 shadow-xl backdrop-blur-sm">
          <ProjectIcon className="h-10 w-10 text-cyan-200" aria-hidden="true" />
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm">
          {isLive ? "Live website" : "In development"}
        </span>
        <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-white/60">
          {isLive ? "Available online" : "Work in progress"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-200">
          {title}
        </h3>
        <p className="mt-3 flex-1 leading-7 text-gray-300">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
          {isLive ? "Visit live website" : "View project repository"}
          <ArrowTopRightOnSquareIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
};
