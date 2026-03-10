"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiGithub, FiMail } from "react-icons/fi";

export function IntroductionSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-800 text-4xl font-bold text-white">
                KS
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-5xl font-bold text-white md:text-7xl"
          >
            Kento Suzuta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 text-xl text-blue-400 md:text-2xl"
          >
            Frontend Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-slate-300"
          >
            モダンな Web アプリケーションを構築し、使いやすい UI と保守しやすい
            実装の両立を目指しています。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-12 flex justify-center gap-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-800 p-3 transition-colors duration-300 hover:bg-slate-700"
            >
              <FiGithub className="h-6 w-6 text-white" />
            </a>

            <a
              href="mailto:kento.suzuta.dev@gmail.com"
              className="rounded-full bg-slate-800 p-3 transition-colors duration-300 hover:bg-slate-700"
            >
              <FiMail className="h-6 w-6 text-white" />
            </a>
          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => scrollToSection("about")}
            className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
          >
            詳しく見る
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FiChevronDown className="h-8 w-8 text-slate-400" />
      </motion.div>
    </section>
  );
}
