"use client";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { StepCard } from "../cards/step-card";
import { StepCardsCarousel } from "./step-cards-carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";

export const StepsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });
  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const start = `top ${isTablet ? "80%" : isSmartphone ? "50%" : "30%"}`;

  useGSAP(() => {
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

  const handleStepClick = (stepIndex: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(stepIndex);
    }
  };

  return (
    <section className="steps-section relative bg-[url(/images/img-bg-step-section.svg)] bg-cover bg-center bg-no-repeat py-10 max-sm:pb-2 lg:py-14">
      <Image
        src={"/images/bg-steps-section-mobile-left.svg"}
        height={100}
        width={100}
        alt="Imagem de fundo"
        className="absolute top-0 left-0 z-[1] hidden h-full w-full max-w-[68px] object-contain max-sm:block"
      />

      <Image
        src={"/images/bg-steps-section-mobile-right.svg"}
        height={100}
        width={100}
        alt="Imagem de fundo"
        className="absolute top-0 right-0 z-[1] hidden h-full w-full max-w-[68px] object-contain max-sm:block"
      />
      <div className="container max-sm:px-0">
        <h2 className="mb-4 text-center text-[28px] leading-[110%] text-white md:text-[32px] lg:text-[40px]">
          Melhor que ler,
          <br className="hidden max-sm:block" />
          <span className="text-brand-light-green font-bold"> é conhecer!</span>
        </h2>
        <p className="mb-8 text-center text-lg text-white max-sm:px-4 md:mb-10 lg:mb-14">
          Veja como funciona nossa solução de gestão integrada do cuidado na
          prática.
        </p>

        <div className="relative hidden items-center justify-center pt-32 max-md:absolute md:flex md:h-[800px] md:pt-0">
          <video
            src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Gesta%CC%83o%20Integrada/asd.mp4"
            className="mt-20 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="absolute top-[60%] left-1/2 h-[650px] w-full max-w-[830px] -translate-x-1/2 -translate-y-1/2 sm:h-[800px]">
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
              classNames="absolute md:mt-10 top-2 -top-27 left-1/2  -translate-x-1/2 w-full"
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
              classNames="absolute top-60 -right-32 sm:-right-78  sm:top-20 lg:!-right-82 lg:top-14 w-full "
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
              classNames="absolute -right-32 top-96 sm:-right-92 sm:top-56 lg:!-right-98 lg:top-56 w-full"
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
              classNames="absolute sm:-right-88 lg:-right-94 sm:top-104 lg:top-96 w-full"
            />

            <StepCard
              stepNumber={7}
              content={
                <>
                  Relatório sobre <br />
                  evolução dos casos
                </>
              }
              classNames="absolute sm:left-4 top-20 lg:!left-4 lg:top-14"
            />

            <StepCard
              stepNumber={6}
              content={
                <>
                  Referência e <br />
                  contrareferência
                </>
              }
              classNames="absolute sm:-left-10 lg:!-left-20 top-56 w-full max-w-[200px]"
            />

            <StepCard
              stepNumber={5}
              content={
                <>
                  Engajamento
                  <br /> ativo
                </>
              }
              classNames="absolute sm:-left-8 lg:-left-16 top-96 w-full max-w-[200px]"
            />
          </div>
        </div>

        <div className="pointer-events-none relative hidden h-[300px] w-full max-sm:mb-4 max-sm:block">
          <video
            src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Gesta%CC%83o%20Integrada/asd.mp4"
            className="absolute top-0 hidden h-full w-full object-cover max-sm:block"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          <div className="CounterStepsCarrossel pointer-events-auto relative hidden max-sm:block">
            {/* Step 1 */}
            <button
              onClick={() => handleStepClick(0)}
              className={cn(
                "absolute right-0 left-0 z-[2] mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold backdrop-blur-md transition-all duration-300 max-sm:-mb-4 lg:text-[28px]",
                currentSlide === 0
                  ? "bg-brand-light-green text-brand-dark-green scale-110"
                  : "bg-white/20 text-white hover:bg-white/30",
              )}
              aria-label="Ir para passo 1"
            >
              1
            </button>

            {/* Step 2 */}
            <button
              onClick={() => handleStepClick(1)}
              className={cn(
                "absolute top-12 right-18 z-[2] mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold backdrop-blur-md transition-all duration-300 max-sm:-mb-4 lg:text-[28px]",
                currentSlide === 1
                  ? "bg-brand-light-green text-brand-dark-green scale-110"
                  : "bg-white/20 text-white hover:bg-white/30",
              )}
              aria-label="Ir para passo 2"
            >
              2
            </button>

            {/* Step 3 */}
            <button
              onClick={() => handleStepClick(2)}
              className={cn(
                "absolute top-36 right-12 z-[2] mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold backdrop-blur-md transition-all duration-300 max-sm:-mb-4 lg:text-[28px]",
                currentSlide === 2
                  ? "bg-brand-light-green text-brand-dark-green scale-110"
                  : "bg-white/20 text-white hover:bg-white/30",
              )}
              aria-label="Ir para passo 3"
            >
              3
            </button>

            {/* Step 4 */}
            <button
              onClick={() => handleStepClick(3)}
              className={cn(
                "absolute top-58 right-28 z-[2] mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold backdrop-blur-md transition-all duration-300 max-sm:-mb-4 lg:text-[28px]",
                currentSlide === 3
                  ? "bg-brand-light-green text-brand-dark-green scale-110"
                  : "bg-white/20 text-white hover:bg-white/30",
              )}
              aria-label="Ir para passo 4"
            >
              4
            </button>

            {/* Step 5 */}
            <button
              onClick={() => handleStepClick(4)}
              className={cn(
                "absolute top-58 left-28 z-[2] mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold backdrop-blur-md transition-all duration-300 max-sm:-mb-4 lg:text-[28px]",
                currentSlide === 4
                  ? "bg-brand-light-green text-brand-dark-green scale-110"
                  : "bg-white/20 text-white hover:bg-white/30",
              )}
              aria-label="Ir para passo 5"
            >
              5
            </button>

            {/* Step 6 */}
            <button
              onClick={() => handleStepClick(5)}
              className={cn(
                "absolute top-36 left-12 z-[2] mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold backdrop-blur-md transition-all duration-300 max-sm:-mb-4 lg:text-[28px]",
                currentSlide === 5
                  ? "bg-brand-light-green text-brand-dark-green scale-110"
                  : "bg-white/20 text-white hover:bg-white/30",
              )}
              aria-label="Ir para passo 6"
            >
              6
            </button>

            {/* Step 7 */}
            <button
              onClick={() => handleStepClick(6)}
              className={cn(
                "absolute top-12 left-18 z-[2] mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold backdrop-blur-md transition-all duration-300 max-sm:-mb-4 lg:text-[28px]",
                currentSlide === 6
                  ? "bg-brand-light-green text-brand-dark-green scale-110"
                  : "bg-white/20 text-white hover:bg-white/30",
              )}
              aria-label="Ir para passo 7"
            >
              7
            </button>
          </div>
        </div>

        <StepCardsCarousel
          onSlideChange={setCurrentSlide}
          onApiReady={setCarouselApi}
        />
      </div>
    </section>
  );
};
