import { SmartphoneSectionCards } from "@/components/solucoes-section/smartphone-section-cards";
import { Diferentials } from "@/components/solucoes-section/diferentials";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import React from "react";
import { ContactSolution } from "@/components/solucoes-section/contact-solution";
import { Diferentials2 } from "@/components/solucoes-section/diferentials2";
import { Impacts2 } from "@/components/solucoes-section/impacts2";

const differentialsData = [
  {
    title: (
      <>
        <strong>Redução de custos indiretos,</strong> com menos afastamentos e
        maior, impacto na produtividade.
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
        <strong>Apoio estruturado em ESG e compliance trabalhista,</strong>{" "}
        fortalecendo a responsabilidade corporativa.
      </>
    ),
    icon: {
      alt: "ícone aperto de mãos",
      src: "/images/ic-handshake.svg",
    },
  },
  {
    title: (
      <>
        <strong>Gera valor para o plano de saúde,</strong> diferenciando a
        operadora como promotora de cuidado integral.
      </>
    ),
    icon: {
      alt: "ícone gráfico de linhas crescendo",
      src: "/images/ic-line-chart.svg",
    },
  },
  {
    title: (
      <>
        <strong>
          Integra-se a programas de saúde corporativa e bem-estar,
        </strong>{" "}
        fortalecendo a cultura organizacional.
      </>
    ),
    icon: {
      alt: "ícone pontos-interligados",
      src: "/images/ic-network.svg",
    },
  },
];

const differentialsData2 = [
  {
    title: (
      <>
        <strong>Baseado em protocolos validados</strong> e Terapia{" "}
        <br className="hidden md:inline-block" />
        Cognitivo-Comportamental (TCC).
      </>
    ),
    icon: {
      src: "/images/ic-shield.svg",
      alt: "ícone simbolo escudo ",
    },
  },
  {
    title: (
      <>
        <strong>Triagem estruturada</strong> com instrumentos técnicos{" "}
        <br className="hidden md:inline-block" /> (ex: DASS-21)
      </>
    ),
    icon: {
      alt: "ícone lupa de pesquisa",
      src: "/images/ic-search.svg",
    },
  },
  {
    title: (
      <>
        <strong>Planos terapêuticos customizados,</strong>{" "}
        <br className="hidden md:inline-block" />
        de 15 a 30 sessões.
      </>
    ),
    icon: {
      alt: "ícone aperto de mãos",
      src: "/images/ic-handshake.svg",
    },
  },
  {
    title: (
      <>
        <strong>Acompanhamento integrado</strong> entre psicólogos e{" "}
        <br className="hidden md:inline-block" />
        psiquiatras.
      </>
    ),
    icon: {
      alt: "ícone pontos-interligados",
      src: "/images/ic-network.svg",
    },
  },
  {
    title: (
      <>
        <strong>Resultados clínicos mensuráveis,</strong> acompanhados{" "}
        <br className="hidden md:inline-block" /> em tempo real.
      </>
    ),
    icon: {
      alt: "ícone gráfico linha crescendo",
      src: "/images/ic-line-chart.svg",
    },
  },
];

const impactsData = [
  {
    title: "Para o Beneficiário",
    description:
      "É acolhimento imediato, confiança no cuidado e apoio emocional que faz diferença nos momentos críticos.",
    isColumn: true,
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title: "Para a Operadora",
    description:
      "Menos absenteísmo, menos afastamentos prolongados e mais engajamento em saúde mental.",
    isColumn: true,
    icon: {
      src: "/images/ic-hospital.svg",
      alt: "",
    },
  },
  {
    title: "Para as Empresas",
    description:
      "Suporte e acesso digital imediato, auxiliando na NR1 como plano de ação.",
    isColumn: true,
    icon: {
      src: "/images/ic-buildings.svg",
      alt: "",
    },
  },
];

const impactsData2 = [
  {
    title: "Para o Beneficiário",
    description:
      "Acesso a um plano estruturado de cuidado, com apoio próximo, segurança e acompanhamento que faz diferença na vida.",
    isColumn: false,
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title: "Para a Operadora",
    description:
      "Reduzir custos com afastamentos, fortalecer a gestão populacional e entregar valor estratégico em saúde mental.",
    isColumn: false,
    icon: {
      src: "/images/ic-hospital.svg",
      alt: "",
    },
  },
];

export default function SaudeMentalPage() {
  return (
    <>
      <Hero
        classHeroVideo="/videos/video-solucao-5.mp4"
        title={<>Saúde Mental</>}
        description={
          <>
            Apoio imediato para quem precisa,
            <br />
            resultados estratégicos para quem cuida.
          </>
        }
      />
      <Diferentials
        differentials={differentialsData}
        title={
          <>
            <span className="text-brand-light-green">
              Teleacolhimento <br />
              Psicológico 24h
            </span>
          </>
        }
        description={
          <>
            Crises emocionais não têm hora marcada. Por isso, garantimos que o
            acesso a um psicólogo esteja sempre disponível. Nosso{" "}
            <strong>Teleacolhimento Psicológico 24h </strong> conecta
            beneficiários a profissionais especializados em poucos minutos,
            oferecendo escuta qualificada, orientação segura e direcionamento
            adequado em qualquer dia e a qualquer hora.
          </>
        }
        videoUrl="/videos/video-secao-solucao-5.mp4"
      />
      <Impacts
        impacts={impactsData}
        customClassNames="lg:grid-cols-3"
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
        leftPhoneImg="/images/img-phone-left-sol-5.webp"
        middlePhoneVideo="/videos/video-middle-phone-solucao-5.mp4"
        rightPhoneImg="/images/img-phone-right-sol-5.webp"
        subtitle="Veja como funciona nossa solução de saúde mental."
      />
      <Diferentials2
        differentials={differentialsData2}
        title={
          <>
            Conheça o{" "}
            <span className="text-brand-light-green">Integralmente</span>
          </>
        }
        description={
          <>
            O <strong>Integralmente</strong> da dr.online é um programa completo
            decuidado psicológico e psiquiátrico, baseado em ciência e alinhado
            às melhores práticas internacionais. Desde a triagem inicial até o
            acompanhamento contínuo, oferecemos planos terapêuticos
            individualizados que garantem previsibilidade, resolutividade e
            resultados mensuráveis.
          </>
        }
        videoUrl="/videos/video-secao-2-solucao-5.mp4"
      />
      <Impacts2
        impacts={impactsData2}
        title={
          <>
            Como grandes empresas têm usado o{" "}
            <span className="text-brand-light-green">Integralmente</span>
          </>
        }
      />
      <ContactSolution />
    </>
  );
}
