"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { SplitText } from "gsap/all";
import Image from "next/image";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

const examsData = [
  {
    id: 1,
    title: "Ausculta pulmonar",
    icon: "/images/ic-pulmao.svg",
    iconMobile: "/images/icon-auscultura-pulmonar.svg",
    alt: "Ícone pulmão",
  },
  {
    id: 2,
    title: "Ausculta abdominal",
    icon: "/images/ic-abdomen.svg",
    iconMobile: "/images/icon-ausculta-abdominal.svg",
    alt: "Ícone abdomen",
  },
  {
    id: 3,
    title: "Ausculta cardíaca",
    icon: "/images/ic-coracao.svg",
    iconMobile: "/images/ausculta-cardiaca.svg",
    alt: "Ícone coração",
  },
  {
    id: 4,
    title: "Aferição da pressão",
    icon: "/images/ic-pressao.svg",
    iconMobile: "/images/icon-afericao-pressao.svg",
    alt: "Ícone pressão",
  },
  {
    id: 5,
    title: "Avaliação cutânea",
    icon: "/images/ic-search-2.svg",
    iconMobile: "/images/icon-avaliacao-cutanea.svg",
    alt: "Ícone lupa",
  },
  {
    id: 6,
    title: "Frequência cardíaca",
    icon: "/images/ic-frequencia-cardiaca.svg",
    iconMobile: "/images/icon-frequencia-cardiaca.svg",
    alt: "Ícone frequencia cardíaca",
  },
  {
    id: 7,
    title: "Oroscopia",
    icon: "/images/ic-lips.svg",
    iconMobile: "/images/icon-oroscopia.svg",
    alt: "Ícone lábios",
  },
  {
    id: 8,
    title: "Otoscopia",
    icon: "/images/ic-orelha.svg",
    iconMobile: "/images/icon-otoscopia.svg",
    alt: "Ícone orelha",
  },
  {
    id: 9,
    title: "Temperatura corporal",
    icon: "/images/ic-termometro.svg",
    iconMobile: "/images/icon-temp-corporal.svg",
    alt: "Ícone termometro",
  },
];

export const ExamsSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useGSAP(() => {
    // const titleSplit = new SplitText("#exams h2", {
    //   type: "chars, words",
    // });

    // gsap.from(titleSplit.chars, {
    //   yPercent: 100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "expo.out",
    //   stagger: 0.03,
    //   scrollTrigger: {
    //     trigger: "#exams",
    //     start: "top 70%",
    //   },
    // });

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

        {/* Grid para desktop */}
        <div className="card-exams-container grid grid-cols-1 gap-5 max-sm:hidden sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {examsData.map((exam) => (
            <div
              key={exam.id}
              className="card-exam-animated flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 duration-300 hover:-translate-y-3"
            >
              <Image
                src={exam.icon}
                alt={exam.alt}
                width={80}
                height={80}
                className="rounded-lg object-contain"
              />
              <p className="text-lg font-bold text-white">{exam.title}</p>
            </div>
          ))}
        </div>

        {/* Swiper para mobile */}
        <div className="mt-14 hidden max-sm:block">
          <Swiper
            modules={[EffectCards, Pagination, Navigation]}
            effect="cards"
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSlideChange={handleSlideChange}
            onInit={handleSlideChange}
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 2,
              perSlideRotate: 0,
            }}
            className="[&_.swiper-slide:not(.swiper-slide-active)]:-translate-y-6 [&_.swiper-slide:not(.swiper-slide-active)_.card-exam-animated]:bg-[rgba(255,_255,_255,_0.10)]"
          >
            {examsData.map((exam) => (
              <SwiperSlide key={exam.id} className="!flex justify-center">
                <div className="card-exam-animated bg-brand-light-green flex w-full max-w-[345px] flex-col items-center gap-4 rounded-2xl p-4 duration-300">
                  <Image
                    src={exam.iconMobile}
                    alt={exam.alt}
                    width={38}
                    height={38}
                    className="rounded-lg object-contain"
                  />
                  <p className="text-brand-dark-green text-lg font-bold">
                    {exam.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}

            {/* Botões de navegação customizados */}
            <div className="btns-swiper mt-5 flex items-center justify-center gap-5">
              <button
                className={`swiper-button-prev-custom relative z-10 flex h-10 w-10 cursor-pointer items-center justify-center transition-opacity duration-300 ${
                  isBeginning
                    ? "cursor-not-allowed opacity-30"
                    : "opacity-100 hover:opacity-80"
                }`}
                disabled={isBeginning}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M30 20.0002L10 20.0002M10 20.0002L18.3333 28.3335M10 20.0002L18.3333 11.6668"
                    stroke="white"
                    strokeWidth="1.49763"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className={`swiper-button-next-custom relative z-10 flex h-10 w-10 cursor-pointer items-center justify-center transition-opacity duration-300 ${
                  isEnd
                    ? "cursor-not-allowed opacity-30"
                    : "opacity-100 hover:opacity-80"
                }`}
                disabled={isEnd}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M10 20.0002L30 20.0002M30 20.0002L21.6667 28.3335M30 20.0002L21.6667 11.6668"
                    stroke="white"
                    strokeWidth="1.49763"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
