import { Diferentials } from "@/components/solucoes-section/diferentials";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import { CardsCarousel } from "@/components/solucoes-section/pronto-atendimento/cards-carousel";
import React from "react";
import { SmartphoneSectionCards2 } from "@/components/solucoes-section/smartphone-section-cards2";
import { ContactSolution } from "@/components/solucoes-section/contact-solution";

const differentialsData = [
  {
    title: (
      <>
        <strong>Controle sobre custos assistenciais</strong> com decisões
        clínicas mais assertivas.
      </>
    ),
    icon: {
      src: "/images/ic-dolar-sign.svg",
      alt: "ícone simbolo monetário",
    },
  },
  {
    title: (
      <>
        <strong>Integração tecnológica</strong> com atendimentos registrados em
        prontuário clínico digital seguro e interoperável.
      </>
    ),
    icon: {
      alt: "ícone engrenagem",
      src: "/images/ic-gear.svg",
    },
  },
  {
    title: (
      <>
        <strong>Expansão da rede</strong> sem necessidade de investir em
        estrutura física.
      </>
    ),
    icon: {
      alt: "ícone de pontos interligados",
      src: "/images/ic-network.svg",
    },
  },
  {
    title: (
      <>
        <strong>Beneficiários mais satisfeitos e fiéis,</strong> valorizando o
        cuidado que recebem.
      </>
    ),
    icon: {
      alt: "ícone coração",
      src: "/images/ic-heart.svg",
    },
  },
  {
    title: (
      <>
        <strong>Dados estratégicos</strong> para tomada de decisão e cumprimento
        de metas regulatórias.
      </>
    ),
    icon: {
      alt: "ícone gráfico de linha",
      src: "/images/ic-line-chart.svg",
    },
  },
];

const impactsData = [
  {
    isColumn: false,
    title: "Benefícios para o beneficiário",
    description:
      "Acolhimento imediato, orientação segura e a confiança de estar cuidado em qualquer lugar, a qualquer hora e com os melhores profissionais.",
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    isColumn: false,
    title: "Benefícios para a operadora",
    description:
      "Menos idas desnecessárias ao pronto-socorro, menos custos com internações e mais eficiência assistencial.",
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
        classHeroVideo="/videos/video-solucao-2.mp4"
        title={
          <>
            Pronto <br /> Atendimento{" "}
          </>
        }
        description={
          <>
            O cuidado certo, na hora que seu <br />
            beneficiário mais precisa.
          </>
        }
      />
      <CardsCarousel />
      <Diferentials
        differentials={differentialsData}
        title={
          <>
            Mais que uma solução de <br className="hidden lg:inline-block" />
            urgência.{" "}
            <span className="text-brand-light-green">
              Uma estratégia de gestão em saúde
            </span>
          </>
        }
        description={
          <>
            Imprevistos não têm hora marcada. Por isso, a dr.online{" "}
            <br className="hidden lg:inline-block" /> garante que o acesso a um
            médico nunca esteja fora
            <br className="hidden lg:inline-block" /> de alcance. Nosso Pronto
            Atendimento 24h conecta pacientes
            <br className="hidden lg:inline-block" /> a clínicos e pediatras em
            poucos minutos, sem filas, sem
            <br className="hidden lg:inline-block" /> burocracia e com mais de
            92% de resolutividade.
          </>
        }
        videoUrl="/videos/video-secao-solucao-2.mp4"
      />
      <Impacts
        impacts={impactsData}
        title={
          <>
            <span className="">O impacto da</span>{" "}
            <span className="font-bold text-white">
              dr
              <span className="text-brand-light-green">.</span>
            </span>{" "}
            online
          </>
        }
      />
      <SmartphoneSectionCards2
        firstImage="/images/img-phone-1-sol-2.svg"
        secondImage="/images/img-phone-2-sol-2.svg"
        thirdImage="/images/img-phone-3-sol-2.svg"
        firstVideo="/videos/video22.mp4"
        secondVideo="/videos/video23.mp4"
        subtitle="Veja como funciona nossa solução de pronto atendimento 24hrs."
      />
      <ContactSolution />
    </>
  );
}
