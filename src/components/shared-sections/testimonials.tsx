import React, { type ReactNode } from "react";
import { TestimonialsCarousel } from "../testimonials-carousel";

interface TestimonialsSectionProps {
  children: ReactNode;
  hasBlur?: boolean;
}

export const TestimonialsSection = ({
  children,
  hasBlur = false,
}: TestimonialsSectionProps) => {
  return (
    <section className="overflow-hidden bg-[url(/images/img-bg-depoimentos.svg)] bg-cover bg-center bg-no-repeat py-12 lg:py-20">
      <div className="container flex flex-col items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[467px]">
          <p className="text-brand-light-green mb-2 text-center text-[16px] leading-normal font-bold md:text-start">
            Depoimentos
          </p>
          {children}
        </div>
        <div className="relative w-full max-w-[700px]">
          {hasBlur && (
            <div className="from-brand-light-green to-brand-main-green absolute top-0 right-20 z-0 h-[380px] w-[380px] rounded-full bg-gradient-to-b blur-[150px]" />
          )}

          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
};
