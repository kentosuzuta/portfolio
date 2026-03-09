"use client";

import { NAV_ITEMS } from "@/constants/nav";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={[
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white"
          >
            KS
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 pb-4 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                  className="block w-full py-3 text-left font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
