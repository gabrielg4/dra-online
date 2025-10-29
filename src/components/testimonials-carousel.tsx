"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { TestimonialCard } from "./cards/testimonial-card";
import type { Depoimento } from "../../payload-types";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
        <SwiperSlide
          key={index}
          className="mx-auto w-full max-[640px]:max-w-[90%]"
        >
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
      <div className="just top-1/2 z-50 flex w-full items-center justify-center gap-5 max-[640px]:pt-20 sm:justify-between md:absolute">
        <button
          id="prev-depoimento"
          className="bg-brand-light-green hover:bg-brand-light-green2 group z-50 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full duration-200 sm:h-8 sm:w-8 md:-ml-10"
        >
          <ArrowLeft className="text-brand-dark-green group-hover:text-brand-main-green size-5" />
        </button>
        <button
          id="next-depoimento"
          className="bg-brand-light-green hover:bg-brand-light-green2 z-50 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full duration-200 sm:h-8 sm:w-8 md:-mr-14"
        >
          <ArrowRight className="text-brand-dark-green group-hover:text-brand-main-green size-5" />
        </button>
      </div>
    </Swiper>
  );
};
