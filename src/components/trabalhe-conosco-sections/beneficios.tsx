"use client";
import React from "react";
import { CardSolucaoDiferencial } from "../cards/card-solucao-diferencial";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export const Beneficios = () => {
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
      <div className="container flex flex-col items-stretch gap-8 md:flex-row lg:gap-14">
        <div className="flex w-full flex-col justify-between md:w-1/2">
          <h2 className="mb-6 text-[32px] leading-[120%] text-white lg:text-[40px]">
            <span className="text-brand-light-green font-bold">
              Cuidar com tecnologia,
            </span>
            proximidade e autonomia
          </h2>
          <div className="relative hidden h-[400px] w-full rounded-lg md:block">
            <div className="video-blur absolute top-0 left-0 h-full w-full" />
            <video
              src="/videos/video16.mp4"
              className="h-full w-full rounded-2xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
        <div className="cards-diferentials relative z-10 flex w-full flex-col gap-8 max-sm:gap-3 md:w-1/2">
          <CardSolucaoDiferencial
            image={{
              alt: "ícone line chart",
              src: "/images/ic-line-chart.svg",
            }}
          >
            <strong>Ganhos alinhados ao volume de atendimentos</strong>
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone aperto de mão",
              src: "/images/ic-handshake.svg",
            }}
          >
            <strong>
              Suporte técnico e clínico durante toda a jornada de trabalho,
              contato direto com a gestão clínica
            </strong>
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone cartão de crédito",
              src: "/images/ic-credit-card.svg",
            }}
          >
            <strong>
              Plataforma médica fácil de usar, intuitiva, com prontuário,
              prescrição e teleconsulta integrados
            </strong>
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone relógio",
              src: "/images/ic-clock.svg",
            }}
          >
            <strong>
              Flexibilidade de horários nos atendimentos, onde você estiver
            </strong>
          </CardSolucaoDiferencial>

          <CardSolucaoDiferencial
            image={{
              alt: "ícone balança",
              src: "/images/ic-balance.svg",
            }}
          >
            <strong>Segurança jurídica e contratos transparentes</strong>
          </CardSolucaoDiferencial>
        </div>
      </div>
    </section>
  );
};
