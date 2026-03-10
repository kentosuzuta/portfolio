"use client";

import { motion } from "framer-motion";

const CORE_SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "MUI",
  "Tailwind CSS",
  "SWR",
  "REST API",
  "API Routes",
  "Java (読解・API実装の一部)",
  "SQL Developer (データ確認)",
  "Node.js",
  "Storybook",
  "Jest",
  "Git / GitHub",
  "Vercel",
] as const;

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex min-h-screen items-center justify-center bg-slate-900 py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Skills
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-2xl border border-slate-700 bg-slate-800 p-8 md:p-10"
        >
          <h3 className="mb-6 text-2xl font-bold text-white">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {CORE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-600 bg-slate-700/60 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
