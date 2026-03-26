import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroStrip } from "@/components/sections/home/IntroStrip";
import { MenuPreview } from "@/components/sections/home/MenuPreview";
import { MondayCallout } from "@/components/sections/home/MondayCallout";
import { AboutTeaser } from "@/components/sections/home/AboutTeaser";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { CTAStrip } from "@/components/sections/home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroStrip />
      <MenuPreview />
      <MondayCallout />
      <AboutTeaser />
      <SocialProof />
      <CTAStrip />
    </>
  );
}
