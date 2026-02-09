"use client";

import { motion, type Variants } from "framer-motion";

export type AboutSectionProps = {
  variants: Variants;
  title?: string;
  className?: string;
};

export function AboutSection({
  variants,
  title = "About",
  className,
}: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      variants={variants}
      transition={{ delay: 0.2 }}
      className={[
        "min-h-[calc(100dvh-64px)] flex items-center",
        "scroll-mt-24",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="w-full space-y-6">
        <h2 className="text-3xl font-bold">{title}</h2>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold">概要</h3>
          <p className="text-sm text-zinc-700">
            フロントエンドエンジニアとして React / TypeScript
            を中心に開発してきました。
            業務では既存画面の改修、UI実装、API連携などを担当しました。
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold">経験</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700">
            <li>React / TypeScript での画面実装・改修</li>
            <li>REST API連携（ローディング・エラーハンドリング含む）</li>
            <li>共通コンポーネント利用・コンポーネント分割</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold">今後やりたいこと</h3>
          <p className="text-sm text-zinc-700">
            UI/UXの品質を担保しつつ、テストや保守性も意識したフロントエンド開発に強くなりたいです。
          </p>
        </section>
      </div>
    </motion.section>
  );
}
