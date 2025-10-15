"use client";
import Image from "next/image";
import React, { type ReactElement } from "react";
import { CardSolucaoDiferencial } from "../cards/card-solucao-diferencial";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

interface DiferentialsSolutionProps {
  title: ReactElement;
  description: ReactElement;
  image: {
    src: string;
    alt?: string;
  };
}

export const Diferentials = ({
  description,
  image,
  title,
}: DiferentialsSolutionProps) => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const start = `top ${isTablet ? "40%" : isSmartphone ? "30%" : "50%"}`;

  useGSAP(() => {
    const titleSplit = new SplitText(".diferential-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".diferential-section",
        start: "top 30%",
      },
    });
    gsap.from(".diferential-section .section-description ", {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      delay: 0,
      scrollTrigger: {
        trigger: ".diferential-section",
        start: "top 30%",
      },
    });
    gsap.from(".card-diferential", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".diferential-section",
        start,
        end: "center 30%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <section className="diferential-section bg-[url(/images/img-bg-secao-pattern.webp)] bg-cover bg-center bg-no-repeat py-10 lg:py-20">
      <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-14">
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-[32px] leading-[120%] font-bold text-white lg:text-[40px]">
            {title}
          </h2>
          <p className="section-description mb-0 text-lg leading-normal font-normal text-white md:mb-10 lg:mb-14">
            {description}
          </p>
          <Image
            src={image.src}
            alt={image.alt || ""}
            width={580}
            height={337}
            quality={100}
            className="hidden h-full w-full object-cover md:block"
          />
        </div>
        <div className="cards-diferentials flex w-full flex-col gap-8 md:w-1/2">
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

          <Image
            src={image.src}
            alt={image.alt || ""}
            width={580}
            height={337}
            quality={100}
            className="block h-full w-full object-cover md:hidden"
          />
        </div>
      </div>
    </section>
  );
};
