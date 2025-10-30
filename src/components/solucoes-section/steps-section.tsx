"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { StepCard } from "../cards/step-card";
import { StepCardsCarousel } from "./step-cards-carousel";
export const StepsSection = () => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });
  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const start = `top ${isTablet ? "80%" : isSmartphone ? "50%" : "30%"}`;

  useGSAP(() => {
    const titleSplit = new SplitText(".steps-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".steps-section",
        start,
      },
    });
    gsap.from(".steps-section .section-subtitle ", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".steps-section",
        start,
      },
    });
  }, []);

  return (
    <section className="steps-section bg-[url(/images/img-bg-step-section.svg)] bg-cover bg-center bg-no-repeat py-10 max-sm:pb-2 lg:py-14">
      <div className="container max-sm:pr-0">
        <h2 className="mb-4 text-center text-[28px] leading-[110%] text-white max-sm:pr-4 md:text-[32px] lg:text-[40px]">
          Melhor que ler,
          <span className="text-brand-light-green font-bold"> é conhecer!</span>
        </h2>
        <p className="mb-8 text-center text-lg text-white max-sm:pr-4 md:mb-10 lg:mb-14">
          Veja como funciona nossa solução de gestão integrada do cuidado na
          prática.
        </p>

        <div className="relative hidden items-center justify-center pt-32 max-md:absolute md:flex md:pt-0">
          <video
            src="/videos/video-secao-solution-7.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="absolute top-1/2 left-1/2 h-[650px] w-full max-w-[730px] -translate-x-1/2 -translate-y-1/2 max-md:hidden sm:h-[550px]">
            <StepCard
              stepNumber={1}
              content={
                <>
                  {" "}
                  Captação pelo
                  <br />
                  Whatsapp{" "}
                </>
              }
              classNames="absolute md:mt-10 top-2 lg:-top-20 left-1/2  -translate-x-1/2 w-full"
            />
            <StepCard
              stepNumber={2}
              content={
                <>
                  Consultas pelo
                  <br />
                  médico da família
                </>
              }
              classNames="absolute top-60 -right-32 sm:-right-52  sm:top-20 lg:!-right-64 lg:top-14 w-full"
            />

            <StepCard
              stepNumber={3}
              content={
                <>
                  Inserção do paciente
                  <br />
                  nas linhas de cuidado
                </>
              }
              classNames="absolute -right-32 top-96 sm:-right-56 sm:top-56 lg:!-right-72 lg:top-56 w-full"
            />

            <StepCard
              stepNumber={4}
              content={
                <>
                  Telemonitoramento
                  <br />
                  do paciente
                </>
              }
              classNames="absolute -right-40 lg:!-right-56 top-96 w-full"
            />

            <StepCard
              stepNumber={7}
              content={
                <>
                  Relatório sobre <br />
                  evolução dos casos
                </>
              }
              classNames="absolute   left-20 top-20 lg:!left-4 lg:top-14"
            />

            <StepCard
              stepNumber={6}
              content={
                <>
                  Referência e <br />
                  contrareferência
                </>
              }
              classNames="absolute -left-52 lg:!-left-72 top-56 w-full"
            />

            <StepCard
              stepNumber={5}
              content={
                <>
                  Engajamento
                  <br /> ativo
                </>
              }
              classNames="absolute -left-40 lg:!-left-56 top-96 w-full"
            />
          </div>
        </div>
        <StepCardsCarousel />

        <div className="pointer-events-none relative -mt-24 hidden h-[300px] w-full max-sm:block">
          <video
            src="/videos/video-secao-solution-7.mp4"
            className="absolute top-0 hidden h-full w-full object-cover max-sm:block"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};
