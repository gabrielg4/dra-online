import { GetInTouch } from "@/components/home-sections/get-in-touch";
import { TestimonialsSection } from "@/components/shared-sections/testimonials";
import { SmartphoneSectionCards } from "@/components/smartphone-section-cards";
import { Diferentials } from "@/components/solucoes-section/diferentials";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import React from "react";

const differentialsData = [
  {
    title: (
      <>
        <strong>Conformidade garantida</strong> com a ANS e órgãos reguladores.
      </>
    ),
    icon: {
      src: "/images/ic-shield.svg",
      alt: "ícone escudo com um check no meio",
    },
  },
  {
    title: (
      <>
        <strong>Decisões baseadas em dados confiáveis,</strong> reduzindo
        contestações jurídicas.
      </>
    ),
    icon: {
      alt: "ícone gráfico de linhas",
      src: "/images/ic-chart.svg",
    },
  },
  {
    title: (
      <>
        <strong>Prevenção de riscos assistenciais,</strong> antecipando
        condições clínicas.
      </>
    ),
    icon: {
      alt: "ícone escudo com um check no meio",
      src: "/images/ic-heart.svg",
    },
  },
  {
    title: (
      <>
        <strong>Eficiência operacional,</strong> com menos retrabalho e mais
        produtividade.
      </>
    ),
    icon: {
      alt: "ícone escudo com um check no meio",
      src: "/images/ic-gear.svg",
    },
  },
  {
    title: (
      <>
        <strong>Melhor experiência para o beneficiário,</strong> que recebe
        acolhimento desde o primeiro contato.
      </>
    ),
    icon: {
      alt: "ícone escudo com um check no meio",
      src: "/images/ic-handshake.svg",
    },
  },
];

const impactsData = [
  {
    title:
      "Para o beneficiário, é acolhimento imediato, orientação segura e a confiança de estar cuidado em qualquer lugar, a qualquer hora e com os melhores profissionais.",
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title:
      "Para a operadora, isso significa menos idas desnecessárias ao pronto-socorro, menos custos com internações e mais eficiência assistencial.",
    icon: {
      src: "/images/ic-hospital.svg",
      alt: "",
    },
  },
];

export default function EntrevistaQualificadaPage() {
  return (
    <>
      <Hero
        classHeroVideo="/videos/video-solucao-1.mp4"
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
        differentials={differentialsData}
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
        videoUrl="/videos/video-secao-solucao-1.mp4"
      />
      <Impacts
        impacts={impactsData}
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
      <SmartphoneSectionCards
        leftPhoneImg="/images/img-phone-left-sol-1.webp"
        middlePhoneVideo="/videos/video-middle-phone-solucao-1.mp4"
        rightPhoneImg="/images/img-phone-right-sol-1.webp"
        subtitle="Veja como funciona nossa solução de entrevista qualificada."
      />
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
