"use client";
import React, { type ReactElement } from "react";
import { CardSolucaoDiferencial } from "../cards/card-solucao-diferencial";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

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
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const start = `top ${isTablet ? "40%" : isSmartphone ? "30%" : "50%"}`;
  useGSAP(() => {
    const titleSplit = new SplitText(".integralmente-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".integralmente-section",
        start: "top 30%",
      },
    });
    gsap.from(".integralmente-section .section-description ", {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      delay: 0,
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
    <section className="integralmente-section bg-[url(/images/img-bg-secao-pattern.webp)] bg-cover bg-center bg-no-repeat py-10 lg:py-20">
      <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-14">
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-[32px] leading-[120%] font-bold text-white lg:text-[40px]">
            {title}
          </h2>
          <p className="section-description mb-0 text-lg leading-normal font-normal text-white md:mb-10 lg:mb-14">
            {description}
          </p>
          {noImage ? (
            <>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 max-[767px]:mt-10 md:grid-cols-2">
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Dermatologia
                </p>
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Neurologia
                </p>
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Endocrinologia
                </p>
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Neurologia Pediátrica
                </p>
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Endocrinologia pediátrica
                </p>
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Psiquiatria
                </p>
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Ginecologia
                </p>
                <p className="text-brand-light-green border-brand-light-green w-full rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Reumatologia
                </p>
              </div>
              <p className="text-brand-light-green mt-8 text-center text-[40px] font-bold">
                + 30 Especialidades
              </p>
            </>
          ) : (
            <div className="relative hidden h-[337px] w-full rounded-lg md:block">
              <div className="video-blur absolute top-0 left-0 h-full w-full" />
              <video
                src={videoUrl}
                className="h-full w-full rounded-2xl object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          )}
        </div>
        <div className="cards-integralmente flex w-full flex-col gap-8 md:w-1/2">
          {differentials.map(({ icon: { alt, src }, title }, index) => (
            <CardSolucaoDiferencial
              key={index}
              image={{
                alt,
                src,
              }}
              cardClass="card-integralmente"
            >
              {title}
            </CardSolucaoDiferencial>
          ))}
          {noImage && (
            <div className="relative block h-[337px] w-full rounded-lg md:hidden">
              <div className="video-blur absolute top-0 left-0 h-full w-full" />
              <video
                src={videoUrl}
                className="h-full w-full rounded-2xl object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
