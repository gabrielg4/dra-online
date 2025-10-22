import { Hero } from "@/components/home-sections/hero";
import { CompaniesLogos } from "@/components/home-sections/companies-logos";
import { Diferentials } from "@/components/home-sections/diferentials";
import { MetricsSection } from "@/components/home-sections/metrics";
import { SecurityInformation } from "@/components/home-sections/security-information";
import { Midia } from "@/components/home-sections/midia";
import { Blog } from "@/components/home-sections/blog";
import { FrequentlyQuestions } from "@/components/home-sections/frequently-questions";
import { GetInTouch } from "@/components/home-sections/get-in-touch";
// import { ChallengersAnimation } from "@/components/home-sections/challenges-animation";
import { ChallengersAnimationV2 } from "@/components/home-sections/challenges-animationV2";

export default function Home() {
  return (
    <>
      <Hero />
      <CompaniesLogos />
      {/* <ChallengersAnimation /> */}
      <ChallengersAnimationV2 />
      <Diferentials />
      <MetricsSection />
      <SecurityInformation />
      <Midia />
      <Blog />
      <FrequentlyQuestions />
      <GetInTouch />
    </>
  );
}
