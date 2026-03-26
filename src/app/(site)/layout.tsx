import Script from "next/script";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, restaurantSchema } from "@/components/layout/JsonLd";
import { RevealCurtain } from "@/components/ui/RevealCurtain";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Reveal curtain -- hidden by default, shown by inline script if coming from pitch */}
      <div
        id="reveal-curtain"
        style={{
          display: "none",
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "var(--color-woud)",
        }}
      >
        {/* Logo shown during curtain hold */}
        <img
          src="/images/bijwout-logo-strak.png"
          alt=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px",
            height: "auto",
            opacity: 0,
            animation: "curtainLogoIn 0.4s 0.15s ease-out forwards",
          }}
        />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `if(sessionStorage.getItem('bijwout-reveal')){document.getElementById('reveal-curtain').style.display='block';document.documentElement.dataset.reveal='1'}`,
        }}
      />
      <RevealCurtain />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-[var(--space-3)] focus:left-[var(--space-3)] focus:z-[9999] focus:bg-[var(--color-kalk)] focus:text-[var(--color-hout)] focus:px-[var(--space-3)] focus:py-[var(--space-2)] focus:rounded-[var(--radius-sm)] focus:shadow-[var(--shadow-md)]"
      >
        Ga naar inhoud
      </a>
      <JsonLd data={restaurantSchema} />
      <Navigation />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <Script
        src="https://atshvftlpuvtnredbjgc.supabase.co/functions/v1/widget?p=c92fa514-fdc4-4107-b194-01a644abde0f"
        strategy="lazyOnload"
      />
    </>
  );
}
