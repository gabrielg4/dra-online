"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/pagination";

export const GridCards = () => {
  useGSAP(() => {
    gsap.from(".card-carousel", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#cards-carousel",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="pb-10 max-sm:pb-2 md:pt-16 md:pb-0">
      <div className="container grid grid-cols-2 items-center gap-5 max-sm:hidden sm:grid-cols-2 lg:grid-cols-4">
        <div className="card-carousel flex h-full w-full max-w-64 flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={90}
            height={90}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            Tecnologia responsiva que permite incluir o acesso do seu cliente
            direto ao seu App, Site ou WhatsApp.
          </p>
        </div>
        <div className="card-carousel flex h-full w-full max-w-64 flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={80}
            height={80}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            Tempo de espera médio de no máximo 6 minutos
          </p>
        </div>
        <div className="card-carousel flex h-full w-full max-w-64 flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={80}
            height={80}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            NPS DE 93 na zona de Excelência por +2 anos consecutivos
          </p>
        </div>
        <div className="card-carousel flex h-full w-full max-w-64 flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={80}
            height={80}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            Propostas modulares que permite o melhor custo-benefício do mercado
          </p>
        </div>
      </div>

      <div className="container hidden max-sm:block">
        <Swiper
          modules={[Grid, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-grid-cards",
          }}
        >
          <SwiperSlide className="!flex justify-center">
            <div className="card-carousel flex h-full flex-col items-center gap-4">
              <Image
                src="/images/ic-shield-check.svg"
                alt="Ícone missão"
                width={90}
                height={90}
                className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
              />
              <p className="text-center text-sm font-bold text-white sm:text-lg">
                Tecnologia responsiva que permite incluir o acesso do seu
                cliente direto ao seu App, Site ou WhatsApp.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!flex justify-center">
            <div className="card-carousel flex h-full flex-col items-center gap-4">
              <Image
                src="/images/ic-shield-check.svg"
                alt="Ícone missão"
                width={80}
                height={80}
                className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
              />
              <p className="text-center text-sm font-bold text-white sm:text-lg">
                Tempo de espera médio de no máximo 6 minutos
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!flex justify-center">
            <div className="card-carousel flex h-full flex-col items-center gap-4">
              <Image
                src="/images/ic-shield-check.svg"
                alt="Ícone missão"
                width={80}
                height={80}
                className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
              />
              <p className="text-center text-sm font-bold text-white sm:text-lg">
                NPS DE 93 na zona de Excelência por +2 anos consecutivos
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!flex justify-center">
            <div className="card-carousel flex h-full flex-col items-center gap-4">
              <Image
                src="/images/ic-shield-check.svg"
                alt="Ícone missão"
                width={80}
                height={80}
                className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
              />
              <p className="text-center text-sm font-bold text-white sm:text-lg">
                Propostas modulares que permite o melhor custo-benefício do
                mercado
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination-grid-cards swiper-pagination mt-8 flex items-center justify-center gap-3"></div>
      </div>
    </div>
  );
};
