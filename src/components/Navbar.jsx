import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="nav-shell mx-auto w-[min(1120px,100%)]"
      >
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
        <ul className="nav-links flex w-full flex-wrap items-center justify-center gap-2 py-1 sm:gap-3 lg:w-auto lg:flex-nowrap lg:justify-center lg:py-0">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 self-end lg:self-auto">
          <a
            href="/resume-anuj-tanwar.txt"
            download
            className="glass-btn nav-resume-btn hidden items-center gap-2 rounded-full px-4 py-2 text-sm sm:flex"
          >
            <FiDownload /> Resume
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
