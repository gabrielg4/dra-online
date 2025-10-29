"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function diferentialTabSwiper03() {
  return (
    <div className="relative w-full max-sm:max-w-[375px] max-sm:px-4">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-row justify-start max-[640px]:items-center min-[768]:max-w-[190px] md:flex-col">
            <Image
              src="/images/ic-shield-check.svg"
              alt="Ícone check"
              width={95}
              height={95}
            />
            <p className="text-brand-dark-gray text-md font-semibold max-sm:text-white md:mt-2 md:ml-3 lg:text-lg">
              Garantia de acesso a especialistas em todo o país
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-row justify-start max-[640px]:items-center min-[768]:max-w-[168px] md:flex-col">
            <Image
              src="/images/ic-shield-check.svg"
              alt="Ícone check"
              width={95}
              height={95}
            />
            <p className="text-brand-dark-gray text-md font-semibold max-sm:text-white md:mt-2 md:ml-3 lg:text-lg">
              Gestão inteligente do cuidado
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-row justify-start max-[640px]:items-center min-[768]:max-w-[168px] md:flex-col">
            <Image
              src="/images/ic-shield-check.svg"
              alt="Ícone check"
              width={95}
              height={95}
            />
            <p className="text-brand-dark-gray text-md font-semibold max-sm:text-white md:mt-2 md:ml-3 lg:text-lg">
              Agendamento em menos de 24h
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Navegação */}
      <div className="relative z-10 flex items-center justify-between">
        <button className="swiper-prev hover:text-brand-light-green z-20 hidden h-10 w-10 transform cursor-pointer items-center justify-center border-0 bg-transparent text-white max-sm:block sm:flex lg:-left-0">
          <ArrowLeft className="size-6" />
        </button>

        <button className="swiper-next hover:text-brand-light-green z-10 hidden h-10 w-10 transform cursor-pointer items-center justify-center border-0 bg-transparent text-white max-sm:block sm:flex lg:-right-0">
          <ArrowRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
