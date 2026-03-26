"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Favorietjes", id: "favorietjes" },
  { label: "Lunch", id: "lunch" },
  { label: "Diner", id: "diner" },
  { label: "Kinderen", id: "kinderen" },
  { label: "Craft Bier", id: "craft-bier" },
];

export function StickyJumpLinks() {
  const [activeId, setActiveId] = useState("lunch");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      data-theme="warm"
      className="sticky bg-[var(--color-bg)] z-40 overflow-x-auto"
      style={{
        top: "var(--nav-offset, var(--header-height))",
        transition: "top 300ms ease",
        borderBottom: "var(--border-width-thin) solid var(--color-eik-o12)",
        scrollbarWidth: "none",
        maskImage: "linear-gradient(to right, black 0%, black calc(100% - var(--container-padding-x)), transparent)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, black calc(100% - var(--container-padding-x)), transparent)",
      }}
    >
      <div className="flex gap-[var(--space-3)] py-[var(--space-3)] px-[var(--container-padding-x)] whitespace-nowrap">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold tracking-[var(--letter-spacing-wide)] transition-all duration-200 no-underline min-h-[44px] flex items-center"
            style={{
              color: activeId === link.id ? "var(--color-koper-dark)" : "var(--color-leisteen)",
              background: activeId === link.id ? "var(--color-koper-o20)" : "transparent",
              padding: "var(--space-1) var(--space-3)",
              borderRadius: "var(--radius-pill)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
