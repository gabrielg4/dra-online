"use client";
import React, { type ReactNode } from "react";
import { TestimonialsCarousel } from "../testimonials-carousel";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

interface TestimonialsSectionProps {
  children: ReactNode;
  hasBlur?: boolean;
}

export const TestimonialsSection = ({
  children,
  hasBlur = false,
}: TestimonialsSectionProps) => {
  useGSAP(() => {
    const titleSplit = new SplitText(".testimonials-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 20%",
        // markers: true,
      },
    });
    gsap.from(".testimonials-section .section-subtitle ", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 30%",
      },
    });
  }, []);

  return (
    <section className="testimonials-section relative overflow-hidden bg-[url(/images/img-bg-depoimentos.svg)] bg-cover bg-center bg-no-repeat pt-0 pb-0 lg:pt-20 lg:pb-20">
      <div className="container flex flex-col items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[467px]">
          <p className="section-subtitle text-brand-light-green mb-2 text-center text-[16px] leading-normal font-bold lg:text-start">
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
