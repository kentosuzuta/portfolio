"use client";

import { pageMotion, pageTransition } from "@/motions/page";
import type { Transition } from "framer-motion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const transition: Transition = reduced ? { duration: 0 } : pageTransition;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduced ? false : "initial"}
        animate="animate"
        exit="exit"
        variants={pageMotion}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
