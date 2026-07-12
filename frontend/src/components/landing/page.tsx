import { LandingBackground } from "./background";
import { LandingFaq } from "./faq";
import { LandingFeatures } from "./features";
import { LandingFooter } from "./footer";
import { LandingHero } from "./hero";
import { LandingHowItWorks } from "./how-it-works";
import { LandingNavbar } from "./navbar";

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b1120] text-slate-100">
      <LandingBackground />
      <LandingNavbar />
      <main>
        <LandingHero />
        <LandingFeatures />
        <LandingHowItWorks />
        <LandingFaq />
      </main>
      <LandingFooter />
    </div>
  );
}
