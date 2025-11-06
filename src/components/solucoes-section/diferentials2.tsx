"use client";
import React, { type ReactElement, useState } from "react";
import { CardSolucaoDiferencial } from "../cards/card-solucao-diferencial";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { SpecialtiesCarousel } from "../specialties-carousel";

interface DiferentialsSolutionProps {
  noImage?: boolean;
  title: ReactElement;
  description: ReactElement;
  videoUrl?: string;
  differentials: {
    title: React.JSX.Element;
    icon: {
      alt: string;
      src: string;
    };
  }[];
}

export const Diferentials2 = ({
  description,
  videoUrl,
  title,
  differentials,
  noImage,
}: DiferentialsSolutionProps) => {
  const [showAll, setShowAll] = useState(false); // State para controlar a exibição dos diferenciais

  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const start = `top ${isTablet ? "40%" : isSmartphone ? "30%" : "50%"}`;

  // Número de cards a mostrar inicialmente no mobile
  const INITIAL_MOBILE_ITEMS = 3;

  // Determina quantos cards mostrar
  const cardsToShow =
    !showAll && isSmartphone
      ? differentials.slice(0, INITIAL_MOBILE_ITEMS)
      : differentials;

  // Verifica se há mais cards para mostrar (apenas relevante no mobile)
  const hasMoreCards =
    isSmartphone && differentials.length > INITIAL_MOBILE_ITEMS;

  useGSAP(() => {
    const titleSplit = new SplitText(".integralmente-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".integralmente-section",
        start: "top 40%",
      },
    });
    gsap.from(".integralmente-section .section-description ", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".integralmente-section",
        start: "top 30%",
      },
    });
    gsap.from(".card-integralmente", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".integralmente-section",
        start,
        end: "center 30%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="integralmente-section bg-[url(/images/img-bg-secao-pattern.webp)] bg-cover bg-bottom bg-no-repeat py-14 max-sm:bg-none sm:bg-center lg:py-20">
      <div className="container flex flex-col items-stretch gap-8 md:flex-row md:gap-14">
        <div className="flex h-full w-full flex-col justify-between md:w-1/2">
          <div>
            <h2 className="mb-6 text-[32px] leading-[120%] font-bold text-white lg:text-[40px]">
              {title}
            </h2>
            <p className="section-description mb-0 text-lg leading-normal font-normal text-white md:mb-10 lg:mb-14">
              {description}
            </p>
          </div>
          {noImage ? (
            <div>
              <SpecialtiesCarousel />
              <div className="hidden grid-cols-1 gap-x-6 gap-y-6 max-[767px]:mt-10 sm:grid md:grid-cols-2">
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Dermatologia
                </p>
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Neurologia
                </p>
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Endocrinologia
                </p>
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Neurologia Pediátrica
                </p>
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Endocrinologia pediátrica
                </p>
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Psiquiatria
                </p>
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Ginecologia
                </p>
                <p className="text-brand-light-green w-full rounded-2xl border bg-white/40 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Reumatologia
                </p>
              </div>
              <p className="mt-8 text-center text-[40px] font-bold text-white">
                + 30 Especialidades
              </p>
            </div>
          ) : (
            <div className="relative hidden h-[337px] w-full rounded-lg md:mt-28 md:block">
              <div className="video-blur absolute top-0 left-0 h-full w-full" />
              <video
                src={videoUrl}
                className="h-full w-full rounded-2xl object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
              <Image
                src="/images/img-pattern-video-solucao.svg"
                alt=""
                width={580}
                height={337}
                className="absolute top-0 left-0 z-10 object-contain opacity-50"
              />
            </div>
          )}
        </div>

        {/* Cards e "Ver mais" */}
        <div className="cards-integralmente relative flex w-full flex-col gap-8 md:w-1/2">
          {cardsToShow.map(({ icon: { alt, src }, title }, index) => (
            <CardSolucaoDiferencial
              key={index}
              image={{
                alt,
                src,
              }}
              cardClass="card-integralmente !p-8"
            >
              {title}
            </CardSolucaoDiferencial>
          ))}

          {/* Degradê com blur - apenas visível no mobile quando há mais cards */}
          {hasMoreCards && !showAll && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 z-10 h-[250px] w-full backdrop-blur-[3px] transition-opacity duration-[0.5s] ease-[ease] max-sm:block md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(7, 95, 85, 0) 0%, #075f55 100%)",
              }}
            />
          )}

          {/* Botão "Ver mais" - apenas visível no mobile e quando há mais cards */}
          {hasMoreCards && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-brand-light-green text-brand-dark-green hover:bg-brand-main-green relative z-10 mx-auto mt-4 rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 hover:text-white max-sm:block md:hidden"
            >
              {showAll ? "Ver menos diferenciais" : "Ver mais diferenciais"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
