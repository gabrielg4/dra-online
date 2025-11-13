"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Pagination } from "swiper/modules";

import "swiper/css/grid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default function CompanyProblems() {
  return (
    <section className="s-problems overflow-hidden py-16 max-sm:py-10">
      <div className="container flex items-center justify-between gap-4 max-lg:flex-col max-lg:gap-10">
        <h2 className="z-20 w-full max-w-[274px] text-[40px] leading-tight font-bold text-white max-sm:max-w-full max-sm:text-center max-sm:text-3xl">
          Sua empresa enfrenta essas dificuldades?
        </h2>

        <div className="right-container w-full max-w-[888px]">
          <div className="cards-problems relative h-[400px] w-full max-lg:hidden">
            <div className="card-problem">
              <Image
                src={"/images/icon-afastamentos.svg"}
                alt="Afastamentos recorrentes por problemas desaúde mental"
                width={80}
                height={80}
                className="mb-10"
              />

              <p className="text-[28px] leading-[130%] font-bold text-white">
                Afastamentos recorrentes por problemas de <br />
                saúde mental
              </p>
            </div>

            <div className="card-problem">
              <Image
                src={"/images/icon-dificuldade-regioes-remotas.svg"}
                alt="Dificuldade de acesso médico em regiões remotas"
                width={80}
                height={80}
                className="mb-10"
              />

              <p className="text-[28px] leading-[130%] font-bold text-white">
                Dificuldade de acesso médico em regiões remotas
              </p>
            </div>

            <div className="card-problem">
              <Image
                src={"/images/icon-longos-periodos.svg"}
                alt="Longos tempos de espera para atendimento presencial"
                width={80}
                height={80}
                className="mb-10"
              />

              <p className="text-[28px] leading-[130%] font-bold text-white">
                Longos tempos de espera para atendimento <br />
                presencial
              </p>
            </div>

            <div className="card-problem">
              <Image
                src={"/images/icon-exigencias.svg"}
                alt="Exigências regulatórias da ANS e LGPD sem soluções"
                width={80}
                height={80}
                className="mb-10"
              />

              <p className="text-[28px] leading-[130%] font-bold text-white">
                Exigências regulatórias <br />
                da ANS e LGPD <br />
                sem soluções
              </p>
            </div>
          </div>

          <Swiper
            modules={[EffectCards, Pagination]}
            effect="cards"
            spaceBetween={16}
            slidesPerView={"auto"}
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 30,
              perSlideRotate: 1,
            }}
            pagination={{ clickable: true }}
            className="[&_.swiper-slide:not(.swiper-slide-active)]:bg-brand-dark-green/70 [&_.swiper-slide.swiper-slide-active]:bg-brand-dark-green/70 !hidden max-lg:!block [&_.swiper-slide:not(.swiper-slide-active)]:blur-[2px]"
          >
            <SwiperSlide className="!flex !h-auto !items-stretch justify-center pb-10">
              <div className="h-[400px] w-full max-w-[312px] rounded-2xl bg-white/10 py-6 pr-4 pl-6 shadow-lg backdrop-blur-2xl max-sm:h-[350px]">
                <Image
                  src={"/images/icon-afastamentos.svg"}
                  alt="Afastamentos recorrentes por problemas desaúde mental"
                  width={80}
                  height={80}
                  className="mb-10"
                />

                <p className="text-[28px] leading-[130%] font-bold text-white">
                  Afastamentos recorrentes por problemas de <br />
                  saúde mental
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!flex !h-auto !items-stretch justify-center pb-10">
              <div className="h-[400px] w-full max-w-[312px] rounded-2xl bg-white/10 py-6 pr-4 pl-6 shadow-lg backdrop-blur-2xl max-sm:h-[350px]">
                <Image
                  src={"/images/icon-dificuldade-regioes-remotas.svg"}
                  alt="Dificuldade de acesso médico em regiões remotas"
                  width={80}
                  height={80}
                  className="mb-10"
                />

                <p className="text-[28px] leading-[130%] font-bold text-white">
                  Dificuldade de acesso médico em regiões remotas
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!flex !h-auto !items-stretch justify-center pb-10">
              <div className="h-[400px] w-full max-w-[312px] rounded-2xl bg-white/10 py-6 pr-4 pl-6 shadow-lg backdrop-blur-2xl max-sm:h-[350px]">
                <Image
                  src={"/images/icon-longos-periodos.svg"}
                  alt="Longos tempos de espera para atendimento presencial"
                  width={80}
                  height={80}
                  className="mb-10"
                />

                <p className="text-[28px] leading-[130%] font-bold text-white">
                  Longos tempos de espera para atendimento <br />
                  presencial
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!flex !h-auto !items-stretch justify-center pb-10">
              <div className="h-[400px] w-full max-w-[312px] rounded-2xl bg-white/10 py-6 pr-4 pl-6 shadow-lg backdrop-blur-2xl max-sm:h-[350px]">
                <Image
                  src={"/images/icon-exigencias.svg"}
                  alt="Exigências regulatórias da ANS e LGPD sem soluções"
                  width={80}
                  height={80}
                  className="mb-10"
                />

                <p className="text-[28px] leading-[130%] font-bold text-white">
                  Exigências regulatórias da ANS e LGPD sem soluções
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
