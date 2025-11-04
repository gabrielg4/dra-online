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
        <strong>Porta de entrada estruturada:</strong> até 90% das demandas
        clínicas resolvidas na APS, evitando sobrecarga de pronto-socorros e
        especialistas.
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
        <strong>Fluxo integrado: </strong> encaminhamento digital com critérios
        clínicos definidos, contrarreferência estruturada e visão 360° do
        paciente.
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
        <strong>Dashboard inteligente:</strong> indicadores assistenciais e
        operacionais em tempo real, orientando decisões estratégicas.
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

  {
    title: (
      <>
        <strong>Quadruple Aim da saúde: </strong> melhores desfechos,
        experiência do paciente, redução de custos e satisfação do profissional
        de saúde.
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
    description: "Eficiência e consequentemente redução de custos.",
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
        classHeroVideo="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Gesta%CC%83o%20Integrada/envato_video_gen_Oct_08_2025_17_12_32.mp4"
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
            <br className="inline-block" />
            <span className="text-brand-light-green">
              {" "}
              cada detalhe faz diferença
            </span>
          </>
        }
        description={
          <>
            Acreditamos que saúde de qualidade começa na coordenação inteligente
            do cuidado. Por isso, desenvolvemos um modelo completo de atenção
            baseado nos princípios da atenção primaria em saúde (APS) e Saúde
            Baseada em Valor (VBHC), que combina tecnologia, protocolos clínicos
            e equipe altamente qualificada para garantir resolutividade,
            continuidade e personalização do atendimento.
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
