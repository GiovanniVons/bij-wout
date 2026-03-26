import type { Metadata } from "next";
import { PitchContent } from "./PitchContent";

export const metadata: Metadata = {
  title: "Je Nieuwe Website | Bij Wout",
  robots: { index: false, follow: false },
};

export default function StartPage() {
  return <PitchContent />;
}
