import { CompaniesLogos } from "@/components/home-sections/companies-logos";
import { GetInTouch } from "@/components/home-sections/get-in-touch";
import { ImpactsCarousel } from "@/components/impacts-carousel";
import { TestimonialsSection } from "@/components/shared-sections/testimonials";
import { SmartphoneSectionCards } from "@/components/smartphone-section-cards";
import { Diferentials } from "@/components/solucoes-section/diferentials";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import React from "react";

export default function EntrevistaQualificadaPage() {
  return (
    <>
      <Hero
        title={
          <>
            Entrevista <br /> Qualificada{" "}
          </>
        }
        description={
          <>
            Decisões regulatórias seguras,
            <br /> baseadas em dados.{" "}
          </>
        }
      />
      <Diferentials
        title={
          <>
            Na saúde suplementar,
            <br className="hidden lg:inline-block" />
            <span className="text-brand-light-green">
              cada detalhe faz diferença.
            </span>
          </>
        }
        description={
          <>
            A Entrevista Qualificada da dr.online transforma dados em decisões
            assertivas, reduzindo riscos jurídicos, desperdícios e garantindo
            conformidade regulatória. Conduzida por uma equipe multidisciplinar,
            ela valida informações clínicas, comportamentais e documentais de
            forma rápida, segura e personalizada.
          </>
        }
        image={{
          src: "/images/img-secao-solucao-1.webp",
          alt: "",
        }}
      />
      <Impacts
        subtitle={
          <>
            <span className="text-brand-light-green font-bold">
              O impacto da
            </span>{" "}
            <span className="font-bold text-white">
              dr
              <span className="text-brand-light-green">.</span>
            </span>{" "}
            online
          </>
        }
        title={
          <>
            Como grandes empresas têm usado a nossa
            <br className="hidden lg:inline-block" />
            solução de entrevista qualificada
          </>
        }
      />
      <SmartphoneSectionCards />
      <TestimonialsSection>
        <h2 className="section-title mb-10 text-center text-[32px] leading-[110%] font-bold text-white lg:text-start lg:text-[40px]">
          O que diz quem
          <br className="hidden lg:inline-block" /> já usa dr
          <span className="text-brand-light-green">.</span>
          <span className="font-normal">online</span>
        </h2>
      </TestimonialsSection>
      <GetInTouch />
    </>
  );
}
