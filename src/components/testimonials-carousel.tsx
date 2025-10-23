"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { TestimonialCard } from "./cards/testimonial-card";
import type { Depoimento } from "../../payload-types";
interface TestimonialsCarouselProps {
  testimonials: Depoimento[];
}

export const TestimonialsCarousel = ({
  testimonials,
}: TestimonialsCarouselProps) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      allowSlideNext
      allowSlidePrev
      navigation={{
        nextEl: "#next-depoimento",
        prevEl: "#prev-depoimento",
      }}
      modules={[EffectCards, Navigation]}
      className="mySwiper max-w-[500px]"
      wrapperClass="relative px-10"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="mx-auto w-full">
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}

      <button
        id="next-depoimento"
        className="bg-brand-light-green hover:bg-brand-light-green2 absolute top-1/2 right-0 z-50 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full duration-200 md:-right-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 22 22"
        >
          <path
            stroke="#075F55"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.731"
            d="M5.982 11h10.384m0 0L12.04 6.673M16.366 11l-4.326 4.327"
          />
        </svg>
      </button>

      <button
        id="prev-depoimento"
        className="bg-brand-light-green hover:bg-brand-light-green2 absolute top-1/2 left-0 z-50 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full duration-200 md:-left-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          fill="none"
          viewBox="0 0 19 18"
        >
          <path
            stroke="#075F55"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.498"
            d="M13.8 9H4.814m0 0 3.744 3.744M4.814 9l3.744-3.744"
          />
        </svg>
      </button>
    </Swiper>
  );
};
