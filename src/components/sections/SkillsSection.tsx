"use client";

import { motion, type Variants } from "framer-motion";

export type SkillsSectionProps = {
  variants: Variants;
  skills?: readonly string[];
  updatedLabel?: string;
  className?: string;
};

const DEFAULT_SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Git/GitHub",
  "REST API",
] as const;

export function SkillsSection({
  variants,
  skills = DEFAULT_SKILLS,
  updatedLabel = "日々更新",
  className,
}: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      variants={variants}
      transition={{ delay: 0.1 }}
      className={["scroll-mt-24 space-y-4", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold">Skills</h2>
        <span className="text-xs text-zinc-500">{updatedLabel}</span>
      </div>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
