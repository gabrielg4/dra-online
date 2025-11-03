"use client";
import React, { useEffect, useState, type ReactNode } from "react";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import type { Depoimento } from "../../payload-types";
import { baseTestimonials } from "@/utils/base-testimonials";
import { useMediaQuery } from "react-responsive";

interface TestimonialsSectionProps {
  children: ReactNode;
  hasBlur?: boolean;
}

export const TestimonialsSection = ({
  children,
  hasBlur = false,
}: TestimonialsSectionProps) => {
  const isMobile = useMediaQuery({
    maxWidth: 640,
  });
  const [testimonials, setTestimonials] = useState<Depoimento[]>(
    baseTestimonials as Depoimento[],
  );
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
        start: `top ${isMobile ? "70%" : "30%"}`,
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

  useEffect(() => {
    fetch("/api/depoimentos", {
      method: "GET",
      next: { revalidate: 3600 },
    })
      .then((res) => res.json())
      .then((data) => setTestimonials(data.docs));
  }, []);

  return (
    <section className="testimonials-section relative bg-[url(/images/img-bg-testimonials.svg)] bg-cover bg-center bg-no-repeat pt-0 pb-0 max-sm:overflow-hidden lg:pt-20 lg:pb-20">
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

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};
