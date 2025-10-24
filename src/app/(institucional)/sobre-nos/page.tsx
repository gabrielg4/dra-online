import { CompanyValues } from "@/components/about-us-sectionts/company-values";
import { Hero } from "@/components/about-us-sectionts/hero";
import { OurHistory } from "@/components/about-us-sectionts/our-history";
import { TimeLine } from "@/components/about-us-sectionts/timeline";
import { CompaniesLogos } from "@/components/home-sections/companies-logos";
import { TestimonialsSection } from "@/components/shared-sections/testimonials";
import React from "react";

export default function SobreNosPage() {
  return (
    <>
      <Hero />
      <CompaniesLogos textGradient />
      <OurHistory />
      <TimeLine />
      <CompanyValues />
      {/* <section className="bg-white py-14">
        <div className="container">
          <h2 className="text-brand-dark-green mb-10 text-center text-[32px] leading-[110%] font-normal lg:text-[40px]">
            <strong>Reconhecimento</strong> pelo que importa
          </h2>

          <div className="mx-auto w-full max-w-[800px]">
            <RecognitionsCarousel />
          </div>
        </div>
      </section> */}
      <TestimonialsSection hasBlur>
        <h2 className="mb-10 text-center text-[32px] leading-[110%] font-bold text-white md:text-start lg:text-[40px]">
          A dr<span className="text-brand-light-green">.</span>
          <span className="font-normal">online</span> fazendo a diferença para
          empresas e seus beneficiários
        </h2>
      </TestimonialsSection>
    </>
  );
}
