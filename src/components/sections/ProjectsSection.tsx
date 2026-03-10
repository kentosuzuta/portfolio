"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type Project = {
  title: string;
  summary: string;
  features: string[];
  highlights: string[];
  tech: string[];
  github: string;
  demo: string;
};

const PROJECTS: Project[] = [
  {
    title: "ユーザー管理 管理画面(Demo)",
    summary:
      "Next.js（App Router）で構築したユーザー管理の管理画面。デモ認証、ダッシュボード、ユーザーCRUD、検索/絞り込み、設定更新までを実装。",
    features: [
      "ログイン / ログアウト（デモ認証）",
      "ダッシュボード表示（KPI / 構成比 / 最近登録ユーザー）",
      "ユーザー一覧・詳細・編集・削除",
      "キーワード検索、ロール/ステータス絞り込み",
      "設定画面の取得/更新（API経由）",
    ],
    highlights: [
      "service層を分けて API 呼び出しと画面責務を分離",
      "認証・検索・絞り込み・CRUD の業務フローを一連で実装",
      "MSW によるモックでフロント単体検証しやすい構成に整理",
    ],
    tech: ["Next.js", "React", "TypeScript", "MUI", "SWR", "MSW"],
    github: "https://github.com/kentosuzuta/user-management-admin",
    demo: "https://user-management-admin.vercel.app/",
  },
  {
    title: "ECサイト(Demo)",
    summary:
      "Next.js + TypeScript + Supabase で構築した EC デモ。商品一覧/詳細、カート・お気に入り、チェックアウト3ステップ、注文確定APIまでの購入フローを実装。",
    features: [
      "商品一覧（カテゴリ/検索）と商品詳細（カラー・サイズ・数量）",
      "お気に入り追加/削除、カート追加/削除/数量変更",
      "チェックアウト3ステップ（配送先 / 支払い方法 / 注文確認）",
      "フォームバリデーションと共通通知表示",
    ],
    highlights: [
      "購入導線を一覧→詳細→カート→決済→完了まで通しで設計",
      "入力バリデーションと通知表示でUXを改善",
      "注文登録を API Route 経由にして DB 更新責務を分離",
    ],
    tech: ["Next.js", "React", "TypeScript", "MUI", "Supabase", "API Route"],
    github: "https://github.com/kentosuzuta/ec-demo",
    demo: "https://ec-demo-zvmh.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center bg-slate-50 py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Projects
          </h2>
        </motion.div>

        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <Section title="概要">
                <p className="leading-relaxed text-slate-600">
                  {project.summary}
                </p>
              </Section>

              <Section title="実装機能">
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {project.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="工夫した点">
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Section>

              <Section title="使用技術">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Section>

              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:text-slate-900"
                >
                  <FiGithub className="h-5 w-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-slate-700"
                >
                  <FiExternalLink className="h-5 w-5" />
                  <span>Demo</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-5">
      <h4 className="mb-2 text-sm font-semibold text-slate-900">{title}</h4>
      {children}
    </div>
  );
}
