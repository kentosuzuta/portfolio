import type { Transition } from "framer-motion";

export const pageMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
} as const;

export const pageTransition: Transition = {
  duration: 0.22,
  ease: [0.16, 1, 0.3, 1],
};
