import Image from "next/image";
import React from "react";
import { CardSolucaoDiferencial } from "../cards/card-solucao-diferencial";

export const Diferentials = () => {
  return (
    <section className="bg-[url(/images/img-bg-secao-pattern.webp)] bg-cover bg-center bg-no-repeat py-10 lg:py-20">
      <div className="container flex items-center gap-14">
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-[32px] leading-[120%] font-bold text-white md:text-[40px]">
            Na saúde suplementar,
            <br />
            <span className="text-brand-light-green">
              cada detalhe faz diferença.
            </span>
          </h2>
          <p className="mb-14 text-lg leading-normal font-normal text-white">
            A Entrevista Qualificada da dr.online transforma dados em decisões
            assertivas, reduzindo riscos jurídicos, desperdícios e garantindo
            conformidade regulatória. Conduzida por uma equipe multidisciplinar,
            ela valida informações clínicas, comportamentais e documentais de
            forma rápida, segura e personalizada.
          </p>
          <Image
            src="/images/img-secao-solucao-1.webp"
            alt=""
            width={580}
            height={337}
            quality={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <CardSolucaoDiferencial
            image={{
              alt: "ícone escudo com um check no meio",
              src: "/images/ic-shield.svg",
            }}
          >
            <strong>Conformidade garantida</strong> com a ANS e órgãos
            reguladores.
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone gráfico de linhas",
              src: "/images/ic-chart.svg",
            }}
          >
            <strong>Decisões baseadas em dados confiáveis,</strong> reduzindo
            contestações jurídicas.
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone escudo com um check no meio",
              src: "/images/ic-heart.svg",
            }}
          >
            <strong>Prevenção de riscos assistenciais,</strong> antecipando
            condições clínicas.
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone escudo com um check no meio",
              src: "/images/ic-gear.svg",
            }}
          >
            <strong>Eficiência operacional,</strong> com menos retrabalho e mais
            produtividade.
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone escudo com um check no meio",
              src: "/images/ic-handshake.svg",
            }}
          >
            <strong>Melhor experiência para o beneficiário,</strong> que recebe
            acolhimento desde o primeiro contato.
          </CardSolucaoDiferencial>
        </div>
      </div>
    </section>
  );
};
