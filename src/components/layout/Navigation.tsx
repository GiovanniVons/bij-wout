"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Over Wout", href: "/over-wout" },
  { label: "Groepen", href: "/groepen" },
  { label: "Maandagavond", href: "/maandagavond" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroDark, setHeroDark] = useState(false);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  // Detect if the hero section (first section on page) has a dark theme
  useEffect(() => {
    const firstSection = document.querySelector("main > section, main > *:first-child > section:first-child, main > *:first-child");
    if (firstSection) {
      const theme = firstSection.getAttribute("data-theme");
      setHeroDark(theme === "dark" || theme === "brand");
    } else {
      setHeroDark(false);
    }
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const diff = y - lastScrollY.current;

      setScrolled(y > 80);

      if (Math.abs(diff) > 5) {
        setHidden(y > 400 && diff > 0);
      }

      lastScrollY.current = y;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync --nav-offset so sticky elements (menu jump links) follow navbar hide/show
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--nav-offset",
      hidden ? "0px" : "var(--header-height)"
    );
  }, [hidden]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") setMobileOpen(false);
      }
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href;

  // When unscrolled over a dark hero OR mobile overlay is open, use light colors
  const transparent = !scrolled;
  const lightMode = (transparent && heroDark) || mobileOpen;
  const textColor = lightMode ? "var(--color-kalk)" : "var(--color-eik)";
  const activeColor = "var(--color-koper)";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out"
        style={{
          height: "var(--header-height)",
          pointerEvents: mobileOpen ? "none" : "auto",
          backgroundColor: scrolled && !mobileOpen ? "var(--color-kalk)" : "transparent",
          borderBottom: scrolled && !mobileOpen ? "var(--border-width-thin) solid var(--header-border-bottom)" : "none",
          backdropFilter: scrolled && !mobileOpen ? "blur(12px)" : "none",
          transform: hidden && !mobileOpen ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="container-wide h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block no-underline">
            <img
              src="/images/bijwout-logo-strak.png"
              alt="Bij Wout"
              className="h-8 w-auto transition-all duration-300"
              style={{ filter: lightMode ? "invert(1)" : "none" }}
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-[var(--space-5)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] transition-colors duration-200 no-underline relative"
                style={{
                  color: isActive(link.href) ? activeColor : textColor,
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute left-0 right-0 bottom-[-var(--space-1)]"
                    style={{
                      bottom: "calc(-1 * var(--space-1))",
                      height: "2px",
                      backgroundColor: activeColor,
                    }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/reserveren"
              className="inline-flex items-center justify-center font-[var(--font-body)] text-[length:var(--btn-font-size)] font-[number:var(--btn-font-weight)] tracking-[var(--btn-letter-spacing)] uppercase rounded-[var(--btn-radius)] min-h-[var(--btn-min-height)] px-[var(--space-4)] py-[var(--space-2)] transition-all duration-200 no-underline"
              style={{
                backgroundColor: lightMode ? "var(--color-kalk)" : "var(--btn-primary-bg)",
                color: lightMode ? "var(--color-woud-darker)" : "var(--btn-primary-text)",
                border: lightMode ? "1px solid var(--color-kalk)" : "1px solid var(--btn-primary-border)",
              }}
            >
              Reserveren
            </Link>
          </nav>

          {/* Mobile hamburger (hidden when overlay is open) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 cursor-pointer transition-opacity duration-200"
            style={{ opacity: mobileOpen ? 0 : 1, pointerEvents: mobileOpen ? "none" : "auto" }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className="block w-6 h-0.5" style={{ backgroundColor: textColor }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: textColor }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: textColor }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="navigation"
            aria-label="Hoofdmenu"
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-[var(--space-4)]"
            style={{ backgroundColor: "var(--mobile-overlay-bg)" }}
            initial={prefersReducedMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-0 right-0 flex items-center justify-center cursor-pointer"
              style={{ height: "var(--header-height)", paddingInline: "var(--container-padding-x)" }}
              aria-label="Sluit menu"
            >
              <span className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-[var(--color-kalk)] rotate-45" />
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-[var(--color-kalk)] -rotate-45" />
              </span>
            </button>

            {[{ label: "Home", href: "/" }, ...navLinks].map((link, i) => (
              <motion.div
                key={link.href}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="font-[var(--font-display)] text-[length:var(--mobile-overlay-link-size)] text-[var(--mobile-overlay-link)] no-underline transition-colors duration-200 hover:text-[var(--mobile-overlay-link-hover)]"
                  style={{ color: isActive(link.href) ? "var(--color-koper)" : undefined }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-[var(--space-6)]"
            >
              <Link
                href="/reserveren"
                className="inline-flex items-center justify-center font-[var(--font-body)] text-[length:var(--btn-font-size)] font-[number:var(--btn-font-weight)] tracking-[var(--btn-letter-spacing)] uppercase rounded-[var(--btn-radius)] min-h-[var(--btn-min-height)] px-[var(--space-7)] py-[var(--space-3)] no-underline"
                data-theme="brand"
                style={{
                  backgroundColor: "var(--color-kalk)",
                  color: "var(--color-eik)",
                  border: "1px solid var(--color-kalk)",
                }}
              >
                Reserveren
              </Link>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute bottom-[var(--space-8)] text-center"
            >
              <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-kalk-o65)]">
                Sint Jansplein 7, Moergestel
              </p>
              <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-kalk-o65)] mt-[var(--space-1)]">
                013 850 8300
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
