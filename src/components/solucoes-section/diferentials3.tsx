"use client";
import React, { type ReactElement } from "react";
import { CardSolucaoDiferencial } from "../cards/card-solucao-diferencial";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/pagination";

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

  const start = `top ${isTablet ? "40%" : isSmartphone ? "80%" : "50%"}`;
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
        start: "top 70%",
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
        start: "top 60%",
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
        end: "center 60%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="integralmente-section relative overflow-hidden bg-[url(/images/img-bg-secao-pattern.webp)] bg-cover bg-center bg-no-repeat py-10 max-sm:pb-4 lg:py-20">
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
              className="absolute -bottom-5 -left-[108px] h-[450px] w-full object-contain max-sm:-left-20 max-sm:object-cover md:-left-20 lg:-bottom-28 lg:!-left-40 lg:h-[630px] lg:w-auto"
            />
          </div>
        </div>
        <div className="cards-integralmente flex w-full flex-col gap-8 max-sm:hidden md:w-1/2">
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

        <div className="hidden w-full max-w-[350px] max-sm:block">
          <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            grid={{
              rows: 2,
              fill: "row",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-cards-solucoes",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                autoHeight: true,
                grid: {
                  rows: 1,
                },
              },
              991: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                },
              },
            }}
          >
            {differentials.map(({ icon: { alt, src }, title }, index) => (
              <SwiperSlide key={index}>
                <CardSolucaoDiferencial
                  cardClass="p-6 card-diferential"
                  image={{
                    alt,
                    src,
                  }}
                >
                  {title}
                </CardSolucaoDiferencial>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-cards-solucoes swiper-pagination mt-8 flex items-center justify-center gap-3 lg:hidden"></div>
        </div>
      </div>
      <div className="to-brand-dark-green absolute -bottom-1 z-20 hidden h-52 w-full bg-gradient-to-b from-transparent leading-0 min-[1500px]:to-75% md:block" />
    </section>
  );
};
