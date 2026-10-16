import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { SKILL_DATA } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="relative z-10 flex flex-row justify-center flex-wrap gap-6 md:gap-10 items-center px-6 max-w-5xl">
        {SKILL_DATA.map((skill, index) => (
          <div key={skill.skill_name} className="flex flex-col items-center gap-3 min-w-[88px]">
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={index}
            />
            <span className="text-sm text-gray-300 text-center">{skill.skill_name}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full z-[-10] absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
