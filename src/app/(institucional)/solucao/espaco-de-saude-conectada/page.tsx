import { ContactSolution } from "@/components/solucoes-section/contact-solution";
import { Diferentials } from "@/components/solucoes-section/diferentials";
import { ExamsSection } from "@/components/solucoes-section/exams";
import { Hero } from "@/components/solucoes-section/hero";
import { Impacts } from "@/components/solucoes-section/impacts";

const differentialsData = [
  {
    title: (
      <>
        <strong>Expansão de rede sem altos custos:</strong> presença em locais
        com carência de especialistas, sem necessidade de montar infraestrutura
        tradicional.
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
        <strong>Valor agregado ao plano de saúde:</strong> posiciona a operadora
        como inovadora, entregando algo exclusivo ao beneficiário.
      </>
    ),
    icon: {
      alt: "ícone simbolo monetário",
      src: "/images/ic-dolar-sign.svg",
    },
  },
  {
    title: (
      <>
        <strong>Escalabilidade:</strong> modelo que pode ser replicado em
        indústrias, clínicas, unidades satélites, condomínios e até regiões
        remotas.
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
        <strong>Qualidade diagnóstica:</strong> dispositivos de alta tecnologia
        (ausculta, oroscopia, oxímetro, avaliação de pele, entre outros)
        aumentam a precisão do atendimento.
      </>
    ),
    icon: {
      alt: "ícone escudo com um check no meio",
      src: "/images/ic-award.svg",
    },
  },
  {
    title: (
      <>
        <strong>Experiência humanizada:</strong> suporte presencial de
        enfermagem combinado com interação digital com médicos.
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
    description: "Acesso rápido, diagnósticos precisos e cuidado humanizado.",
    isColumn: false,
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title: "Benefícios para a operadora",
    description:
      "Facilidade em implantação de consultórios InCompany, ampliando acesso e acolhimento para dentro da empresa parceira.",
    isColumn: false,
    icon: {
      src: "/images/ic-hospital.svg",
      alt: "",
    },
  },
];

export default function EspacoDeSaudeConectadaPage() {
  return (
    <>
      <Hero
        classHeroVideo="/videos/video-solucao-6.mp4"
        title={
          <>
            Espaço de Saúde
            <br /> Conectada
          </>
        }
        description={
          <>
            Telemedicina e dispositivos médicos <br />
            inteligentes para realização de exames.
          </>
        }
      />
      <Diferentials
        differentials={differentialsData}
        title={
          <>
            <span className="text-brand-light-green">
              Uma nova forma de <br className="hidden lg:inline-block" />
              entregar saúde
            </span>
            acessível, segura, integrada e altamente escalável
          </>
        }
        description={
          <>
            Nosso Consultório Digital é uma solução híbrida que une o melhor da
            estrutura física com os recursos avançados da telemedicina. Equipado
            com dispositivos médicos multiparamétricos e suporte de enfermagem,
            possibilita consultas clínicas e especializadas com alto nível de
            resolutividade e precisão diagnóstica, mesmo à distância.
          </>
        }
        videoUrl="/videos/video-secao-solucao-6.mp4"
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
      <ExamsSection />
      <ContactSolution />
    </>
  );
}
