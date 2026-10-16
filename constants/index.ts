import { FaEnvelope } from "react-icons/fa";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 72, height: 72 },
  { skill_name: "CSS", image: "css.png", width: 72, height: 72 },
  { skill_name: "JavaScript", image: "js.png", width: 66, height: 66 },
  { skill_name: "React", image: "react.png", width: 72, height: 72 },
  { skill_name: "Next.js", image: "next.png", width: 72, height: 72 },
  { skill_name: "TypeScript", image: "ts.png", width: 72, height: 72 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 72, height: 72 },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/MuhammadAsimdeveloper",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/muhammad-asim-developer",
  },
] as const;

export const PROJECTS = [
  {
    title: "Muhammad Asim Web Agency",
    description:
      "A live agency website built to present web design and development work for small businesses. The site is live and continues to evolve.",
    link: "https://asim-web-agency.netlify.app",
  },
  {
    title: "Atlas Outreach Automation",
    description:
      "An in-progress outreach workflow with lead review, CSV import/export, and email outreach support. This is a development project, not a claimed launched SaaS.",
    link: "https://github.com/MuhammadAsimdeveloper/Atlas-outreach-automation-",
  },
  {
    title: "Coding Vibes",
    description:
      "An in-progress AI-assisted coding and website-building project focused on helping turn ideas into working web experiences.",
    link: "https://github.com/MuhammadAsimdeveloper/CodingVibes",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Explore",
    data: [
      {
        name: "GitHub projects",
        icon: RxGithubLogo,
        link: "https://github.com/MuhammadAsimdeveloper",
      },
      {
        name: "Muhammad Asim Web Agency",
        icon: null,
        link: "https://asim-web-agency.netlify.app",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/muhammad-asim-developer",
      },
      {
        name: "Email",
        icon: FaEnvelope,
        link: "mailto:sanjarkhanabbasi786@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "About", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/MuhammadAsimdeveloper/My-Portfolio",
};
