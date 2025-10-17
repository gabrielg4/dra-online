import { SmartphoneSectionCards } from "@/components/solucoes-section/smartphone-section-cards";
import { Diferentials } from "@/components/solucoes-section/diferentials";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import React from "react";
import { ContactSolution } from "@/components/solucoes-section/contact-solution";

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
    title: "Benefícios para o beneficiário",
    description:
      "Acolhimento, clareza e confiança logo na entrada do plano de saúde.",
    isColumn: false,
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title: "Benefícios para a operadora",
    description:
      "Previsibilidade, redução de sinistralidade e aderência às normas da ANS.",
    isColumn: false,
    icon: {
      src: "/images/ic-hospital.svg",
      alt: "",
    },
  },
];

export default function ConsultorioDigitalPage() {
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
      <SmartphoneSectionCards
        leftPhoneImg="/images/img-phone-left-sol-1.webp"
        middlePhoneVideo="/videos/video-middle-phone-solucao-1.mp4"
        rightPhoneImg="/images/img-phone-right-sol-1.webp"
        subtitle="Veja como funciona nossa solução de entrevista qualificada."
      />
      <ContactSolution />
    </>
  );
}
