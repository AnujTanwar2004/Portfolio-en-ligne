import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="nav-shell mx-auto w-[min(1120px,92%)] lg:min-h-[84px]"
      >
        <div className="flex items-center justify-between gap-3 lg:hidden">
          <a href="#home" className="flex items-center gap-3">
            <span className="brand-mark">
              <img
                src="/logo.png"
                alt="Anuj Tanwar logo"
                className="brand-logo"
              />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-sm tracking-[0.28em] text-white">
                ANUJ TANWAR
              </span>
              <span className="text-[11px] uppercase tracking-[0.26em] text-red-200/70">
                Portfolio
              </span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="nav-icon-btn inline-flex h-12 w-12 items-center justify-center rounded-full border text-lg transition"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="hidden w-full items-center lg:flex">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <span className="brand-mark">
              <img
                src="/logo.png"
                alt="Anuj Tanwar logo"
                className="brand-logo"
              />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-sm tracking-[0.28em] text-white">
                ANUJ TANWAR
              </span>
              <span className="text-[11px] uppercase tracking-[0.26em] text-red-200/70">
                Portfolio
              </span>
            </span>
          </a>

          <div className="flex min-w-0 flex-1 justify-center px-4 xl:px-6">
            <ul className="nav-links flex min-w-0 items-center justify-center gap-1 xl:gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/resume-anuj-tanwar.txt"
            download
            className="glass-btn nav-resume-btn flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm"
          >
            <FiDownload /> Resume
          </a>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden"
            >
              <div className="mt-3 rounded-[1.5rem] border border-white/10 bg-[#0b0b10]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                <ul className="grid gap-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="nav-link block px-4 py-3 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="/resume-anuj-tanwar.txt"
                  download
                  onClick={closeMenu}
                  className="glass-btn nav-resume-btn mt-3 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm sm:hidden"
                >
                  <FiDownload /> Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
