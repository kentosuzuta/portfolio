"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSectio";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { item } from "@/motions/section";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="space-y-14 pb-16"
    >
      <IntroductionSection variants={item} />
      <div className="space-y-10">
        <SkillsSection variants={item} />
        <ProjectsSection variants={item} />
      </div>
      <AboutSection variants={item} />
      <ContactSection variants={item} />
    </motion.div>
  );
}
