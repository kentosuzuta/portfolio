"use client";

import { motion } from "framer-motion";
import { FiCode, FiPenTool, FiZap } from "react-icons/fi";

const STRENGTHS = [
  {
    icon: FiCode,
    title: "要件を実装に落とし込む力",
    description:
      "要件を整理し、画面・状態・APIの責務を分けて、保守しやすい形で実装します。",
  },
  {
    icon: FiPenTool,
    title: "使いやすさを意識したUI",
    description:
      "操作導線や状態表示を整理し、分かりやすい UI になるよう意識して実装しています。",
  },
  {
    icon: FiZap,
    title: "保守性を意識した実装",
    description:
      "型定義や責務分離を意識し、変更時に影響範囲を追いやすい実装を心がけています。",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-slate-50 py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {STRENGTHS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="rounded-2xl bg-white p-10 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
