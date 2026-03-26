"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Orchestrates the reveal curtain transition from /start to /.
 * Renders nothing -- directly animates the #reveal-curtain static div
 * that the inline script already made visible before React hydrated.
 */
export function RevealCurtain() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = document.getElementById("reveal-curtain");
    if (!el || el.style.display === "none") return;

    sessionStorage.removeItem("bijwout-reveal");

    if (prefersReducedMotion) {
      el.style.display = "none";
      document.documentElement.removeAttribute("data-reveal");
      return;
    }

    // Set up CSS transition on the static curtain div
    el.style.transition = "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)";

    // Hold for a beat, then slide up
    const timer = setTimeout(() => {
      el.style.transform = "translateY(-100%)";

      el.addEventListener(
        "transitionend",
        () => {
          el.style.display = "none";
          document.documentElement.removeAttribute("data-reveal");
        },
        { once: true },
      );
    }, 600);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return null;
}
