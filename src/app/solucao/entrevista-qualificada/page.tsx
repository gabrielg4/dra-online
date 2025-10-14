import { CompaniesLogos } from "@/components/home-sections/companies-logos";
import { GetInTouch } from "@/components/home-sections/get-in-touch";
import { ImpactsCarousel } from "@/components/impacts-carousel";
import { TestimonialsSection } from "@/components/shared-sections/testimonials";
import { SmartphoneSectionCards } from "@/components/smartphone-section-cards";
import { Hero } from "@/components/solucoes-section/hero";
import React from "react";

export default function EntrevistaQualificadaPage() {
  return (
    <>
      <Hero />
      <div className="pt-10">
        <CompaniesLogos />
      </div>

      <section className="py-10 lg:py-14">
        <div className="container">
          <p className="mb-2 text-center text-[16px] leading-normal text-white">
            <span className="text-brand-light-green font-bold">
              O impacto da
            </span>{" "}
            <span className="font-bold text-white">
              dr
              <span className="text-brand-light-green">.</span>
            </span>{" "}
            online
          </p>
          <h2 className="md-6 md:10 text-center text-[32px] leading-[110%] font-bold text-white md:text-[40px] lg:mb-14">
            Como grandes empresas têm usado a nossa
            <br />
            solução de entrevista qualificada
          </h2>
          <ImpactsCarousel customClassNames="sm:basis-1/2 md:basis-1/2" />
        </div>
      </section>
      <SmartphoneSectionCards />
      <TestimonialsSection>
        <h2 className="mb-10 text-center text-[32px] leading-[110%] font-bold text-white md:text-start lg:text-[40px]">
          O que diz quem
          <br className="hidden md:inline-block" /> já usa dr
          <span className="text-brand-light-green">.</span>
          <span className="font-normal">online</span>
        </h2>
      </TestimonialsSection>
      <GetInTouch />
    </>
  );
}
