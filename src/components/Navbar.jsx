import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Featured", href: "#menu" },
  { label: "Experience", href: "#about" },
  { label: "Menu", href: "#preview" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="shrink-0">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
            Kano
          </p>
          <h1 className="text-xl font-semibold tracking-[0.18em] uppercase text-white">
            Cilantro
          </h1>
        </a>

        <div className="hidden gap-8 text-sm text-white/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/20 md:inline-flex"
          >
            Reserve
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:bg-white/20 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="text-lg">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-black/85 px-6 py-5 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.01]"
              >
                Reserve Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}