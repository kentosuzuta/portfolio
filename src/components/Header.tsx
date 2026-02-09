"use client";

import { NAV_ITEMS } from "@/constants/nav";
import { menuMotion, overlayMotion } from "@/motions/menu";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const toHomeSectionHref = (pathname: string, href: string) => {
  if (href === "/") return "/";

  const section = href.replace(/^\//, "");
  if (!section) return "/";

  return pathname === "/" ? `#${section}` : `/#${section}`;
};

const isContactHref = (href: string) => href === "/contact";
const isSectionHref = (href: string) =>
  href !== "/" && href.startsWith("/") && !isContactHref(href);

const scrollToBottomSmooth = () => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  });
};

const scrollToSectionSmooth = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    closeMenu();

    if (isContactHref(href)) {
      e.preventDefault();

      if (pathname === "/") {
        history.replaceState(null, "", "/#contact");
        scrollToBottomSmooth();
      }
      return;
    }

    if (pathname === "/" && isSectionHref(href)) {
      e.preventDefault();

      const sectionId = href.replace(/^\//, "");
      if (!sectionId) return;

      history.replaceState(null, "", `/#${sectionId}`);
      scrollToSectionSmooth(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={(e) => {
            closeMenu();
            if (pathname === "/") {
              e.preventDefault();
              history.replaceState(null, "", "/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-lg font-semibold hover:opacity-80"
        >
          Portfolio
        </Link>

        {/* PC/Tablet 用ナビ */}
        <nav className="hidden gap-4 text-sm sm:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={toHomeSectionHref(pathname, item.href)}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "rounded-md bg-zinc-800 px-2 py-1 font-medium text-white"
                    : "px-2 py-1 text-zinc-600 hover:text-zinc-900"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* SP 用ハンバーガー */}
        <button
          type="button"
          className="relative z-30 inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 p-2 text-zinc-100 shadow-sm transition hover:bg-zinc-800 sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>

        {/* SP 用ドロップダウン */}
        <AnimatePresence>
          {open && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu overlay"
                className="fixed inset-0 z-10 cursor-default bg-black/40 sm:hidden"
                onClick={() => setOpen(false)}
                {...overlayMotion}
              />

              <motion.nav
                id="mobile-nav"
                aria-label="Mobile navigation"
                className="absolute right-0 top-full z-20 mt-2 w-32 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-lg sm:hidden"
                onClick={(e) => e.stopPropagation()}
                {...menuMotion}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <ul className="flex flex-col">
                  {NAV_ITEMS.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    return (
                      <li key={item.href}>
                        <Link
                          href={toHomeSectionHref(pathname, item.href)}
                          onClick={(e) => handleNavClick(e, item.href)}
                          aria-current={active ? "page" : undefined}
                          className={
                            active
                              ? "block bg-zinc-900 text-white px-3 py-2.5 text-sm font-medium text-white"
                              : "block px-3 py-2.5 text-sm text-zinc-200 hover:bg-zinc-700"
                          }
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
