import { Diferentials } from "@/components/solucoes-section/diferentials";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import React from "react";
import { ContactSolution } from "@/components/solucoes-section/contact-solution";
import { SmartphoneSectionCards3 } from "@/components/solucoes-section/smartphone-section-cards3";

const differentialsData = [
  {
    title: (
      <>
        <strong>Expansão da rede assistencial</strong> sem altos custos fixos e
        sem necessidade de estrutura física.
      </>
    ),
    icon: {
      src: "/images/ic-network.svg",
      alt: "ícone pontos interligados",
    },
  },
  {
    title: (
      <>
        <strong>Gestão inteligente do cuidadol,</strong> com encaminhamentos
        resolutivos e visão completa do percurso assistencial com prescrição e
        documentos 100% digitais.
      </>
    ),
    icon: {
      alt: "ícone diagrama",
      src: "/images/ic-diagram-text.svg",
    },
  },
  {
    title: (
      <>
        <strong>Satisfação e fidelização dos beneficiários,</strong> com acesso
        ágil e experiência superior.
      </>
    ),
    icon: {
      alt: "ícone de um rosto feliz",
      src: "/images/ic-smile-face.svg",
    },
  },
  {
    title: (
      <>
        <strong>Dados clínicos e administratívos</strong> que apoiam decisões
        estratégicas e reduzem sinistralidade.
      </>
    ),
    icon: {
      alt: "ícone gráfico de linha crescendo",
      src: "/images/ic-line-chart.svg",
    },
  },
  {
    title: (
      <>
        <strong>Posicionamento inovador,</strong> fortalecendo a imagem da
        operadora como promotora de acesso, qualidade e tecnologia em saúde.
      </>
    ),
    icon: {
      alt: "ícone lâmpada",
      src: "/images/ic-lightbulb.svg",
    },
  },
  {
    title: (
      <>
        <strong>
          Redução de sinistralidade e otimização de custos assistenciais.
        </strong>
      </>
    ),
    icon: {
      alt: "ícone gráfico de linha descendo",
      src: "/images/ic-line-chart-desc.svg",
    },
  },
];

const impactsData = [
  {
    title: "Para o Beneficiário",
    description: (
      <>
        Para o <strong>beneficiário</strong>, é{" "}
        <strong>autonomia e praticidade</strong>: ele agenda com um clique, é
        atendido em menos de 24h, recebe prescrição digital e vive uma jornada
        de cuidado contínua, acolhedora e de alta qualidade.
      </>
    ),
    isColumn: false,
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title: "Para a Operadora",
    description: (
      <>
        Para a <strong>operadora</strong>, significa{" "}
        <strong>
          ampliar a capacidade assistencial sem investimento em infraestrutura
          física, reduzir filas e tempos de espera, e elevar o valor percebido
          pelo beneficiário
        </strong>
        , com controle total do fluxo clínico e acesso a{" "}
        <strong>dados estratégicos para gestão populacional</strong>.
      </>
    ),
    isColumn: false,
    icon: {
      src: "/images/ic-hospital.svg",
      alt: "",
    },
  },
];

export default function ConsultaEletivaComEspecialistaPage() {
  return (
    <>
      <Hero
        classHeroVideo="/videos/video3.mp4"
        title={
          <>
            Consulta Eletiva <br />
            com Especialistas
          </>
        }
        description={
          <>
            Transforme o acesso em cuidado. E o cuidado
            <br /> em resultado.
          </>
        }
      />
      <Diferentials
        noImage
        differentials={differentialsData}
        title={
          <>
            <span className="text-brand-light-green">
              Saúde completa precisa
            </span>
            <br className="hidden lg:inline-block" />
            de acesso especializado
          </>
        }
        description={
          <>
            A dr.online conecta beneficiários a uma ampla rede multidisciplinar
            com{" "}
            <strong>
              mais de 30 especialidades médicas e multiprofissionais,
            </strong>{" "}
            garantindo um cuidado integrado, humanizado e resolutivo. Médicos
            com RQE, psicólogos, nutricionistas e outros — prontos para atender
            em menos de 24 horas.
          </>
        }
        videoUrl="/videos/video-secao-solucao-1.mp4"
      />
      <Impacts
        impacts={impactsData}
        title={
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
      />
      <SmartphoneSectionCards3
        firstImage="/images/img-phone-1-sol-4.svg"
        secondImage="/images/img-phone-2-sol-4.svg"
        thirdImage="/images/img-phone-3-sol-4.svg"
        fourthImage="/images/img-phone-4-sol-4.svg"
        firstVideo="/videos/video24.mp4"
        subtitle="Veja como funciona nossa solução de consulta online."
      />
      <ContactSolution />
    </>
  );
}
