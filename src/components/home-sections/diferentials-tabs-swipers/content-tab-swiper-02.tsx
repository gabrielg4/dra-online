"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function diferentialTabSwiper02() {
  return (
    <div className="relative w-full max-sm:max-w-[375px] max-sm:px-4">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        spaceBetween={8}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide className="!flex justify-center">
          <div className="flex flex-row justify-center max-[640]:items-center md:flex-col">
            <Image
              src="/images/ic-shield-check.svg"
              alt="Ícone check"
              width={95}
              height={95}
            />
            <p className="text-brand-dark-gray font-semibold max-sm:text-white md:mt-2">
              Tecnologia responsiva direto do seu app ou site.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center">
          <div className="flex flex-row justify-center max-[640]:items-center md:flex-col">
            <Image
              src="/images/ic-shield-check.svg"
              alt="Ícone check"
              width={95}
              height={95}
            />
            <p className="text-brand-dark-gray font-semibold max-sm:text-white md:mt-2">
              NPS DE 93
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex justify-center">
          <div className="flex flex-row justify-center max-[640]:items-center md:flex-col">
            <Image
              src="/images/ic-shield-check.svg"
              alt="Ícone check"
              width={95}
              height={95}
            />
            <p className="text-brand-dark-gray font-semibold max-sm:text-white md:mt-2">
              NPS de 93 por mais <br />
              de 2 anos
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
