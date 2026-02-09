"use client";

import { motion, type Variants } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";

export type ContactSectionProps = {
  variants: Variants;
  title?: string;
  email?: string;
  githubUrl?: string;
  className?: string;
};

export function ContactSection({
  variants,
  title = "Contact",
  email = "your-email@example.com",
  githubUrl = "https://github.com/",
  className,
}: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      variants={variants}
      transition={{ delay: 0.25 }}
      className={[
        "min-h-[calc(100dvh-64px)]",
        "scroll-mt-24",
        "flex flex-col",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex flex-1 items-center">
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
              お問い合わせはメール、または各種SNSからお願いします。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${email}`}
              aria-label="Send email"
              className="group inline-flex w-full items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md sm:w-[260px]"
            >
              <FiMail className="h-5 w-5 text-zinc-700 transition group-hover:text-zinc-900" />
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="text-xs font-medium text-zinc-900">Email</span>
                <span className="truncate text-[11px] text-zinc-500">
                  {email}
                </span>
              </div>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="group inline-flex w-full items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md sm:w-[260px]"
            >
              <FiGithub className="h-5 w-5 text-zinc-700 transition group-hover:text-zinc-900" />
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="text-xs font-medium text-zinc-900">
                  GitHub
                </span>
                <span className="truncate text-[11px] text-zinc-500">
                  {githubUrl}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
