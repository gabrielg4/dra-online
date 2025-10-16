import { GetInTouch } from "@/components/home-sections/get-in-touch";
import { TestimonialsSection } from "@/components/shared-sections/testimonials";
import { SmartphoneSectionCards } from "@/components/smartphone-section-cards";
import { Diferentials } from "@/components/solucoes-section/diferentials";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";
import React from "react";

// const differentialsData = [
//   {
//     title: (
//       <>
//         <strong>Redução de custos indiretos, </strong>com menos afastamentos e
//         maior, impacto na produtividade.
//       </>
//     ),
//     icon: {
//       src: "/images/ic-dolar-sign.svg",
//       alt: "",
//     },
//   },
//   {
//     title: (
//       <>
//         <strong>Apoio estruturado em ESG e compliance trabalhista,</strong>{" "}
//         fortalecendo a responsabilidade corporativa.
//       </>
//     ),
//     icon: {
//       src: "/images/ic-handshake.svg",
//       alt: "",
//     },
//   },
//   {
//     title: (
//       <>
//         <strong>Gera valor para o plano de saúde,</strong> diferenciando a
//         operadora como promotora de cuidado integral.
//       </>
//     ),
//     icon: {
//       src: "/images/ic-line-chart.svg",
//       alt: "",
//     },
//   },
//   {
//     title: (
//       <>
//         <strong>
//           Integra-se a programas de saúde corporativa e bem-estar,
//         </strong>{" "}
//         fortalecendo a cultura organizacional.
//       </>
//     ),
//     icon: {
//       src: "/images/ic-network.svg",
//       alt: "",
//     },
//   },
// ];

const differentialsData = [
  {
    title: (
      <>
        <strong>Expansão da rede assistencial </strong>sem altos custos.
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
        <strong>Gestão inteligente do fluxo assistencial,</strong> com
        encaminhamentos mais claros e resolutivos.
      </>
    ),
    icon: {
      src: "/images/ic-diagram-text.svg",
      alt: "",
    },
  },
  {
    title: (
      <>
        <strong>Beneficiários mais satisfeitos,</strong> com acesso ampliado e
        cuidado completo.
      </>
    ),
    icon: {
      src: "/images/ic-smile-face.svg",
      alt: "",
    },
  },
  {
    title: (
      <>
        <strong>Dados estratégicos </strong>para gestão populacional, apoiando
        decisões clínicas e administrativas.
      </>
    ),
    icon: {
      src: "/images/ic-line-chart.svg",
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

export default function ConsultaEletivaPage() {
  return (
    <>
      <Hero
        classHeroImage="solution-pronto-atendimento"
        title={
          <>
            Consulta Eletiva <br />
            com Especialistas
          </>
        }
        description={
          <>
            Transforme o acesso em cuidado. E o cuidado <br />
            em resultado.
          </>
        }
      />
      <Diferentials
        noImage
        differentials={differentialsData}
        title={
          <>
            <span className="text-brand-light-green">Saúde completa</span>{" "}
            precisa de acesso especializado
          </>
        }
        description={
          <>
            A dr.online conecta beneficiários a uma ampla rede{" "}
            <br className="hidden lg:inline-block" /> multidisciplinar com{" "}
            <strong>
              mais de 30 especialidades
              <br className="hidden lg:inline-block" /> médicas e
              multiprofissionais
            </strong>
            , garantindo um cuidado
            <br className="hidden lg:inline-block" /> integrado, humanizado e
            resolutivo. Médicos com RQE,
            <br className="hidden lg:inline-block" /> psicólogos, nutricionistas
            e outros — prontos para
            <br /> atender em menos de 24 horas.
          </>
        }
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
            O impacto da <span className="font-bold">dr</span>{" "}
            <span className="text-brand-light-green">.</span>online
          </>
        }
      />
      <SmartphoneSectionCards
        cardsBigger
        leftPhoneImg="/images/img-phone-left-sol-3.webp"
        middlePhoneImg="/images/img-phone-middle-sol-3.webp"
        rightPhoneImg="/images/img-phone-right-sol-3.webp"
        subtitle="Veja como funciona nossa solução de consulta online."
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
