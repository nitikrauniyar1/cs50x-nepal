"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Img from "./Img";
import ExtLink from "./ExtLink";
import { images } from "@/config/images";
import { navItems, links, site } from "@/data/links";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedTheme = null;
    try {
      savedTheme = window.localStorage.getItem("cs50x-nepal-theme");
    } catch {
      // Continue with the system preference when storage is unavailable.
    }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(useDark);
    document.documentElement.dataset.theme = useDark ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !darkMode;
    setDarkMode(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    try {
      window.localStorage.setItem("cs50x-nepal-theme", nextIsDark ? "dark" : "light");
    } catch {
      // The current page still updates when persistent storage is unavailable.
    }
  };

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <button
        type="button"
        onClick={() => document.getElementById("main")?.focus()}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </button>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Img src={images.brand.logo} alt="" width={32} height={32} className="transition-transform duration-200 group-hover:scale-105 h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="nav-link text-sm font-medium text-ink/80 transition-colors hover:text-crimson"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            aria-pressed={darkMode}
            title={`Switch to ${darkMode ? "light" : "dark"} mode`}
            className="glass-control theme-toggle icon-action inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-crimson/10 hover:text-crimson"
          >
            {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <ExtLink href={links.enroll} className="btn-gold hidden !py-2 !bg-gold !text-[#151D49] sm:inline-flex">
            Enrollment <ArrowUpRight size={16} aria-hidden="true" />
          </ExtLink>
          <button
            type="button"
            className="glass-control icon-action inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="glass-surface h-[calc(100vh-4rem)] supports-[height:100dvh]:h-[calc(100dvh-4rem)] overflow-y-auto lg:hidden">
          <ul className="container-x flex flex-col py-6">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-ink/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="nav-link block py-4 font-display text-3xl font-bold transition-colors hover:text-crimson"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-8">
              <ExtLink href={links.enroll} className="btn-gold w-full">
                Enrollment information <ArrowUpRight size={16} aria-hidden="true" />
              </ExtLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
