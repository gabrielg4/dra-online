import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import React from "react";
import { ContactSolution } from "@/components/solucoes-section/contact-solution";
import { Diferentials3 } from "@/components/solucoes-section/diferentials3";
import { StepsSection } from "@/components/solucoes-section/steps-section";

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
    title: "Para o Beneficiário",
    description: "Acolhimento, continuidade e resolutividade.",
    isColumn: false,
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title: "Para a Operadora",
    description: "Eficiência e consequente redução de custos.",
    isColumn: false,
    icon: {
      src: "/images/ic-hospital.svg",
      alt: "",
    },
  },
];

export default function GestaoIntegradaPage() {
  return (
    <>
      <Hero
        classHeroVideo="/videos/video-solucao-7.mp4"
        title={
          <>
            Gestão Integrada <br />
            do Cuidado
          </>
        }
        description={
          <>
            Mais que cuidado, <br className="hidden max-sm:block" />
            gestão inteligente <br className="block max-sm:hidden" /> em saúde.
          </>
        }
      />
      <Diferentials3
        differentials={differentialsData}
        title={
          <>
            Na saúde suplementar,
            <br className="hidden lg:inline-block" />
            <span className="text-brand-light-green">
              {" "}
              cada detalhe faz diferença
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
      <StepsSection />

      <ContactSolution />
    </>
  );
}
