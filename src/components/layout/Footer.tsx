const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Over Wout", href: "/over-wout" },
  { label: "Groepen", href: "/groepen" },
  { label: "Maandagavond", href: "/maandagavond" },
  { label: "Reserveren", href: "/reserveren" },
];

export function Footer() {
  return (
    <footer
      data-theme="brand"
      className="bg-[var(--color-bg)]"
    >
      <div className="container-default pt-[var(--section-space-lg)] pb-[var(--section-space-sm)]">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-[var(--space-6)] md:text-left text-center">
          {/* Column 1: Brand */}
          <div>
            <img
              src="/images/bijwout-logo-strak.png"
              alt="Bij Wout"
              className="h-8 w-auto mb-[var(--space-2)] md:mx-0 mx-auto"
              style={{ filter: "invert(1)" }}
              loading="eager"
              decoding="async"
            />
            <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] italic text-[var(--footer-text)] !mb-[var(--space-5)]">
              Lokaal genieten.
            </p>
            <div className="flex gap-[var(--space-2)] md:justify-start justify-center -ml-[var(--space-2)]">
              <a
                href="https://www.instagram.com/bijwout/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline p-[var(--space-2)]"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/bijwout/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline p-[var(--space-2)]"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.nl/Restaurant_Review-g2553743-d8490650-Reviews-Bij_Wout-Moergestel_North_Brabant_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline p-[var(--space-2)]"
                aria-label="TripAdvisor"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7.5" cy="14" r="3" />
                  <circle cx="16.5" cy="14" r="3" />
                  <circle cx="7.5" cy="14" r="1" fill="currentColor" stroke="none" />
                  <circle cx="16.5" cy="14" r="1" fill="currentColor" stroke="none" />
                  <path d="M4.5 14a3 3 0 013-3h0a7.5 7.5 0 019 0h0a3 3 0 013 3" />
                  <path d="M12 8V5" />
                  <path d="M15 6l3-1" />
                  <path d="M9 6L6 5" />
                </svg>
              </a>
              <a
                href="https://untappd.com/v/bij-wout/2683005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--footer-text)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline p-[var(--space-2)]"
                aria-label="Untappd"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2l4 8-4 8" />
                  <path d="M16 2l-4 8 4 8" />
                  <ellipse cx="12" cy="19" rx="4" ry="2" />
                  <line x1="8" y1="19" x2="16" y2="19" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <p
              className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--footer-accent)] tracking-[var(--letter-spacing-wide)] uppercase !mb-[var(--space-3)]"
            >
              Pagina&apos;s
            </p>
            <nav className="flex flex-col gap-[var(--space-2)]">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p
              className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--footer-accent)] tracking-[var(--letter-spacing-wide)] uppercase !mb-[var(--space-3)]"
            >
              Contact
            </p>
            <div className="flex flex-col gap-[var(--space-2)]">
              <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--footer-text)] !mb-0">
                Sint Jansplein 7
              </p>
              <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--footer-text)] !mb-0">
                5066 AR Moergestel
              </p>
              <a
                href="tel:+31138508300"
                className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--footer-text)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline mt-[var(--space-2)]"
              >
                013 850 8300
              </a>
              <a
                href="mailto:info@bijwout.nl"
                className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--footer-text)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline"
              >
                info@bijwout.nl
              </a>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div
          className="flex flex-col items-center gap-[var(--space-2)] mt-[var(--section-space-sm)] pt-[var(--space-4)]"
          style={{ borderTop: "var(--border-width-thin) solid var(--footer-divider)" }}
        >
          <p className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--footer-copyright)] !mb-0">
            &copy; 2026 Bij Wout. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-[var(--space-3)] items-center">
            <a
              href="https://nexus.vonzie.app/p/6543/bij-wout/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--footer-copyright)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline"
            >
              Privacybeleid
            </a>
            <span className="text-[var(--footer-copyright)]" aria-hidden="true">&middot;</span>
            <a
              href="https://nexus.vonzie.app/p/6543/bij-wout/cookie"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--footer-copyright)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline"
            >
              Cookiebeleid
            </a>
          </div>
          <a
            href="https://vonzie.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--footer-copyright)] hover:text-[var(--footer-link-hover)] transition-colors duration-200 no-underline opacity-60"
          >
            Creatie door Vonzie Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
