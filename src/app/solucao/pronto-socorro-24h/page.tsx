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
      src: "/images/ic-dolar-sign.svg",
      alt: "",
    },
  },
  {
    title: (
      <>
        <strong>Integração tecnológica </strong>com atendimentos registrados em
        prontuário clínico digital seguro e interoperável.
      </>
    ),
    icon: {
      src: "/images/ic-gear.svg",
      alt: "",
    },
  },
  {
    title: (
      <>
        <strong>Expansão da rede </strong>sem necessidade de investir em
        estrutura física.
      </>
    ),
    icon: {
      src: "/images/ic-network.svg",
      alt: "",
    },
  },
  {
    title: (
      <>
        <strong>Conformidade garantida</strong> com a ANS e órgãos reguladores.
      </>
    ),
    icon: {
      src: "/images/ic-heart.svg",
      alt: "",
    },
  },
  {
    title: (
      <>
        <strong>Conformidade garantida</strong> com a ANS e órgãos reguladores.
      </>
    ),
    icon: {
      src: "/images/ic-chart.svg",
      alt: "",
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

export default function ProntoAtendimentoPage() {
  return (
    <>
      <Hero
        classHeroImage="solution-pronto-atendimento"
        title={
          <>
            Pronto
            <br /> Atendimento
          </>
        }
        description={
          <>
            Inclua o acesso do seu cliente direto
            <br /> ao seu App, Site ou WhatsApp.
          </>
        }
      />
      <Diferentials
        differentials={differentialsData}
        title={
          <>
            Mais que uma solução de
            <br className="hidden lg:inline-block" />
            urgência.
            <span className="text-brand-light-green">
              Uma estratégia de gestão em saúde.
            </span>
          </>
        }
        description={
          <>
            Imprevistos não têm hora marcada. Por isso, a dr.online garante que
            o acesso a um médico nunca esteja fora de alcance. Nosso Pronto
            Atendimento 24h conecta pacientes a clínicos e pediatras em poucos
            minutos, sem filas, sem burocracia e com mais de 92% de
            resolutividade.
          </>
        }
        image={{
          src: "/images/img-secao-solucao-2.webp",
          alt: "",
        }}
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
            Como grandes empresas têm usado a
            <br className="hidden lg:inline-block" />
            nossa solução de pronto atendimento 24h
          </>
        }
      />
      <SmartphoneSectionCards
        cardsBigger
        leftPhoneImg="/images/img-phone-left-sol-2.webp"
        middlePhoneImg="/images/img-phone-middle-sol-2.webp"
        rightPhoneImg="/images/img-phone-right-sol-2.webp"
        subtitle="Veja como funciona nossa solução de pronto atendimento 24h."
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
