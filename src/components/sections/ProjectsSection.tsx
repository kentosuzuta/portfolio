"use client";

import { motion, type Variants } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  demoUrl: string;
  repoUrl: string;
};

const Projects: Project[] = [
  {
    title: "業務CRUDアプリ（準備中）",
    description:
      "業務アプリを想定したCRUD（一覧・詳細・作成・編集・削除）サンプル。API連携やエラーハンドリングも含めて実装予定。",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git / GitHub"],
    highlights: [
      "コンポーネント分割と責務整理",
      "フォームバリデーション",
      "APIエラー/ローディング表示",
    ],
    demoUrl: "",
    repoUrl: "",
  },
  {
    title: "検索UIサンプル（準備中）",
    description:
      "フィルタ・ソート・ページネーションなど、業務で使う検索UIの実装サンプル。",
    tech: ["React", "TypeScript"],
    highlights: ["検索条件の状態管理", "UIの使いやすさ", "パフォーマンス意識"],
    demoUrl: "",
    repoUrl: "",
  },
];

export const PROJECTS = Projects;

export type ProjectsSectionProps = {
  variants: Variants;
  title?: string;
  description?: string;
  projects?: Project[];
  className?: string;
};

export function ProjectsSection({
  variants,
  title = "Projects",
  description = "実務の延長を意識した個人開発の制作物です（順次アップデート）。",
  projects = PROJECTS,
  className,
}: ProjectsSectionProps) {
  return (
    <motion.section
      id="projects"
      variants={variants}
      transition={{ delay: 0.15 }}
      className={["scroll-mt-24 space-y-6", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-zinc-700">{description}</p>
      </div>

      <div className="grid gap-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-zinc-200 p-5"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{p.description}</p>

            <div className="mt-3">
              <div className="text-sm font-medium">技術</div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium">見どころ</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.demoUrl ? (
                <a
                  className="group rounded-xl border border-zinc-200 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium">Demo</div>
                      <div className="mt-1 text-[11px] text-zinc-500">
                        {p.demoUrl}
                      </div>
                    </div>
                    <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </a>
              ) : (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium">Demo</div>
                      <div className="mt-1 text-[11px] text-zinc-500">
                        準備中
                      </div>
                    </div>
                    <span className="text-zinc-300">↗</span>
                  </div>
                </div>
              )}

              {p.repoUrl ? (
                <a
                  className="group rounded-xl border border-zinc-200 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium">GitHub</div>
                      <div className="mt-1 text-[11px] text-zinc-500">
                        {p.repoUrl}
                      </div>
                    </div>
                    <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </a>
              ) : (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium">GitHub</div>
                      <div className="mt-1 text-[11px] text-zinc-500">
                        準備中
                      </div>
                    </div>
                    <span className="text-zinc-300">↗</span>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
