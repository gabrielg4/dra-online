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
    title: "Para o Beneficiário",
    description: "Acesso rápido, diagnósticos precisos e cuidado humanizado.",
    isColumn: false,
    icon: {
      src: "/images/ic-pessoas.svg",
      alt: "",
    },
  },
  {
    title: "Para a Operadora",
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
        classHeroVideo="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Consulto%CC%81rio%20Digital/grok-video-cc035d66-22bc-49a0-8b5a-83fec035e9f8%20(1).mp4"
        title={
          <>
            Espaço Digital <br />
            de Saúde
          </>
        }
        description={
          <>
            inovação que transforma qualquer espaço em um ponto de cuidado de
            alta qualidade.
          </>
        }
      />
      <Diferentials
        differentials={differentialsData}
        title={
          <>
            <span className="text-brand-light-green">
              Uma nova forma de <br className="hidden lg:inline-block" />
              entregar saúde{" "}
            </span>
            {/* acessível, segura, integrada e altamente escalável */}
          </>
        }
        description={
          <>
            Nosso Espaço de Saúde Conectada é uma solução híbrida que une o
            melhor da estrutura física com os recursos avançados da
            telemedicina. Equipado com dispositivos médicos multiparamétricos e
            suporte de enfermagem, possibilita consultas clínicas e
            especializadas com alto nível de resolutividade e precisão
            diagnóstica, mesmo à distância.
          </>
        }
        videoUrl="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Consulto%CC%81rio%20Digital/grok-video-cbacf6b2-91c0-49ef-bc00-2120f6083bcd.mp4"
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
