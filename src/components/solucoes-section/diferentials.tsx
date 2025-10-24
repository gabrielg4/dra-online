"use client";
import React, { type ReactElement } from "react";
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

export const Diferentials = ({
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

  const start = `top ${isTablet ? "40%" : isSmartphone ? "80%" : "50%"}`;

  useGSAP(() => {
    const titleSplit = new SplitText(".diferential-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".diferential-section",
        start: "top 50%",
      },
    });
    gsap.from(".diferential-section .section-description ", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      delay: 0.3,
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
    <section className="diferential-section bg-[url(/images/img-bg-secao-pattern.webp)] bg-contain bg-center bg-no-repeat py-10 md:bg-cover lg:py-20">
      <div className="container flex flex-col items-stretch gap-8 md:flex-row md:gap-14">
        <div className="flex w-full flex-col justify-between md:w-1/2">
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
              <div className="hidden grid-cols-2 gap-x-6 gap-y-6 max-[767px]:mt-10 sm:grid md:grid-cols-2">
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Cardiologia
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Dermatologia
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Endocrinologia
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Endocrinologia Pediátrica
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Ginecologia
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Imunologia
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Neurologia
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Neurologia Pediátrica
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Psiquiatria
                </p>
                <p className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl">
                  Reumatologia
                </p>
              </div>
              <p className="mt-8 text-center text-[32px] font-bold text-white sm:text-[40px]">
                + 30 Especialidades
              </p>
            </div>
          ) : (
            <div className="relative hidden h-[337px] w-full rounded-lg md:block">
              <div className="video-blur absolute top-0 left-0 z-20 h-full w-full" />
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
                className="absolute top-0 left-0 z-10 object-contain"
              />
            </div>
          )}
        </div>
        <div className="cards-diferentials flex w-full flex-col gap-8 md:w-1/2">
          {differentials.map(({ icon: { alt, src }, title }, index) => (
            <CardSolucaoDiferencial
              cardClass="p-6"
              key={index}
              image={{
                alt,
                src,
              }}
            >
              {title}
            </CardSolucaoDiferencial>
          ))}
          {noImage && (
            <div className="relative block h-[337px] w-full rounded-lg md:hidden">
              <div className="video-blur absolute top-0 left-0 z-20 h-full w-full" />
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
                className="absolute top-0 left-0 z-10 object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
