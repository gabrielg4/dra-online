"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const specialties = [
  "Cardiologia",
  "Dermatologia",
  "Endocrinologia",
  "Endocrinologia Pediátrica",
  "Ginecologia",
  "Imunologia",
  "Neurologia",
  "Neurologia Pediátrica",
  "Psiquiatria",
  "Reumatologia",
];

export const SpecialtiesCarousel = () => {
  // Agrupa as especialidades em pares (2 por slide)
  const groupedSpecialties = [];
  for (let i = 0; i < specialties.length; i += 2) {
    groupedSpecialties.push(specialties.slice(i, i + 2));
  }

  return (
    <div className="specialties-carousel block max-[767px]:mt-10 sm:hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="!pb-12"
      >
        {groupedSpecialties.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-6">
              {group.map((specialty, idx) => (
                <p
                  key={idx}
                  className="text-brand-light-green border-brand-light-green flex w-full items-center justify-center rounded-lg border bg-white/10 px-4 py-3 text-center text-lg leading-[150%] font-bold backdrop-blur-2xl"
                >
                  {specialty}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .specialties-carousel .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.5;
        }

        .specialties-carousel .swiper-pagination-bullet-active {
          background: #a6d05d; /* Ajuste para a cor brand-light-green */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
