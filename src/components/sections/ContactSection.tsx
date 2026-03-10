"use client";

import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-slate-900 py-20"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Contact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2"
        >
          <a
            href="mailto:kento.suzuta.dev@gmail.com"
            className="group rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-colors duration-300 hover:border-blue-500 hover:bg-slate-700"
          >
            <div className="mb-3 inline-flex rounded-full bg-blue-600 p-3">
              <FiMail className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-white">Email</h3>
            <p className="text-sm text-slate-300">kento.suzuta.dev@gmail.com</p>
          </a>

          <a
            href="https://github.com/kentosuzuta"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-colors duration-300 hover:border-blue-500 hover:bg-slate-700"
          >
            <div className="mb-3 inline-flex rounded-full bg-blue-600 p-3">
              <FiGithub className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-white">GitHub</h3>
            <p className="text-sm text-slate-300">github.com/kentosuzuta</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
