"use client";
import React, { type ReactElement } from "react";
import { CardSolucaoDiferencial } from "../cards/card-solucao-diferencial";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

interface DiferentialsSolutionProps {
  title: ReactElement;
  description: ReactElement;
  differentials: {
    title: React.JSX.Element;
    icon: {
      alt: string;
      src: string;
    };
  }[];
}

export const Diferentials3 = ({
  description,
  title,
  differentials,
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
    <section className="integralmente-section relative overflow-hidden bg-[url(/images/img-bg-secao-pattern.webp)] bg-cover bg-center bg-no-repeat py-10 lg:py-20">
      <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-14">
        <div className="relative w-full md:w-1/2">
          <h2 className="mb-6 text-[32px] leading-[120%] font-bold text-white lg:text-[40px]">
            {title}
          </h2>
          <p className="section-description mb-0 text-lg leading-normal font-normal text-white md:mb-10 lg:mb-14">
            {description}
          </p>
          <div className="relative h-[400px] w-full">
            <div className="blur-hand-smartphone absolute bottom-16 left-10" />
            <Image
              src="/images/gif-mao-segurando-celular.gif"
              alt=""
              width={839}
              height={695}
              className="absolute -bottom-5 -left-28 h-[450px] w-full md:-left-20 lg:-bottom-28 lg:!-left-40 lg:h-[630px] lg:w-auto"
            />
          </div>
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
        </div>
      </div>
      <div className="to-brand-dark-green absolute -bottom-1 z-20 hidden h-52 w-full bg-gradient-to-b from-transparent leading-0 min-[1500px]:to-75% md:block" />
    </section>
  );
};
