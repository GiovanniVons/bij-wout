"use client";

import { useEffect, useRef } from "react";

const GUESTPLAN_ACCESS_KEY = "b93c169197217075e43ec090d2f839f0cbdb3e73";
const GUESTPLAN_WIDGET_URL = `https://widget.guestplan.com/?id=DjmErxc0${GUESTPLAN_ACCESS_KEY}&locale=nl`;

export function GuestPlanWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const iframe = document.createElement("iframe");
    iframe.src = GUESTPLAN_WIDGET_URL;
    iframe.title = "Reserveren bij Bij Wout via GuestPlan";
    iframe.style.width = "100%";
    iframe.style.minHeight = "600px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "var(--guestplan-radius)";
    iframe.allow = "payment";
    iframe.loading = "lazy";

    containerRef.current.appendChild(iframe);

    // Resize listener for responsive height
    function handleMessage(event: MessageEvent) {
      if (event.origin !== "https://widget.guestplan.com") return;
      if (event.data?.type === "guestplan:resize" && typeof event.data.height === "number") {
        iframe.style.height = `${event.data.height}px`;
      }
    }

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      iframe.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-[var(--space-6)]"
      style={{
        background: "var(--guestplan-bg)",
        border: "var(--border-width-thin) solid var(--guestplan-border)",
        borderRadius: "var(--guestplan-radius)",
        overflow: "hidden",
        boxShadow: "var(--guestplan-shadow)",
        minHeight: "600px",
      }}
    />
  );
}
