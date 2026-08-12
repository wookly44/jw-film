import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "../../data/site";
import Inner from "./Inner";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-white/20 bg-black py-4">
      <Inner className="flex items-center justify-between">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={siteConfig.image} alt="JW logo" />
        </motion.a>

        <nav className="hidden items-center gap-3 sm:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 transition hover:text-brand-red"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="rounded border border-white/70 p-2 text-white sm:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Inner>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-2 mt-4 border-t border-white/50 px-5 pb-4 pt-6 sm:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded border border-white/70 px-3 py-2 text-center text-xs font-medium tracking-wide text-white/90"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
