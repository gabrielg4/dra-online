"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/pagination";

export const ExamsSection = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#exams h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: "#exams",
        start: "top 70%",
        // markers: true,
      },
    });
    gsap.from(".card-exams-container", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#exams",
        start: "top 80%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section id="exams" className="py-10 lg:py-14">
      <div className="container">
        <h2 className="title-section mb-8 text-center text-[32px] leading-[110%] font-bold text-white md:mb-10 lg:mb-14 lg:text-[40px]">
          Exames que podem ser realizados
        </h2>
        <div className="card-exams-container grid grid-cols-1 gap-5 max-sm:hidden sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-pulmao.svg"
              alt="Ícone pulmão"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Ausculta pulmonar</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-abdomen.svg"
              alt="Ícone abdomen"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Ausculta abdominal</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-coracao.svg"
              alt="Ícone coração"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Ausculta cardíaca</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-pressao.svg"
              alt="Ícone pressão"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Aferição da pressão</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-search-2.svg"
              alt="Ícone lupa"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Avaliação cutânea</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-frequencia-cardiaca.svg"
              alt="Ícone frequencia cardíaca"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Frequência cardíaca</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-lips.svg"
              alt="Ícone lábios"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Oroscopia</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-orelha.svg"
              alt="Ícone orelha"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Otoscopia</p>
          </div>

          <div className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
            <Image
              src="/images/ic-termometro.svg"
              alt="Ícone termometro"
              width={80}
              height={80}
              className="rounded-lg object-contain"
            />
            <p className="text-lg font-bold text-white">Temperatura corporal</p>
          </div>
        </div>

        <div className="hidden max-sm:block">
          <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={16}
            grid={{ rows: 1, fill: "row" }}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-grid-cards",
            }}
          >
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-pulmao.svg"
                  alt="Ícone pulmão"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">
                  Ausculta pulmonar
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-abdomen.svg"
                  alt="Ícone abdomen"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">
                  Ausculta abdominal
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-coracao.svg"
                  alt="Ícone coração"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">
                  Ausculta cardíaca
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-pressao.svg"
                  alt="Ícone pressão"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">
                  Aferição da pressão
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-search-2.svg"
                  alt="Ícone lupa"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">
                  Avaliação cutânea
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-frequencia-cardiaca.svg"
                  alt="Ícone frequencia cardíaca"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">
                  Frequência cardíaca
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-lips.svg"
                  alt="Ícone lábios"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">Oroscopia</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-orelha.svg"
                  alt="Ícone orelha"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">Otoscopia</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!flex justify-center">
              <div className="card-exam-animated flex w-full max-w-80 items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3">
                <Image
                  src="/images/ic-termometro.svg"
                  alt="Ícone termometro"
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <p className="text-lg font-bold text-white">
                  Temperatura corporal
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination-grid-cards swiper-pagination mt-8 flex items-center justify-center gap-3"></div>
        </div>
      </div>
    </section>
  );
};
