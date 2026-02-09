"use client";

import { motion, type Variants } from "framer-motion";

export type IntroductionSectionProps = {
  variants: Variants;
  className?: string;
};

export function IntroductionSection({
  variants,
  className,
}: IntroductionSectionProps) {
  return (
    <motion.section
      variants={variants}
      className={["min-h-[calc(100dvh-64px)] flex items-center", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-3">
        <p className="text-sm text-zinc-500">Frontend Engineer • Portfolio</p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          フロントエンドエンジニア
          <span className="block text-zinc-500">React / TypeScript</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
          React / TypeScript
          を中心に、業務アプリ・管理画面の開発を経験してきました。
          実務の延長を意識した個人開発の成果をまとめています。
        </p>
      </div>
    </motion.section>
  );
}
