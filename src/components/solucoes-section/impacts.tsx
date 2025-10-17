"use client";
import React, { type ReactElement } from "react";
import { ImpactsCarousel } from "../impacts-carousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

interface ImpactsSectionProps {
  impacts: {
    title: string;
    description: string;
    isColumn?: boolean;
    icon: {
      src: string;
      alt: string;
    };
  }[];
  title: ReactElement;
}

export const Impacts = ({ title, impacts }: ImpactsSectionProps) => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });
  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const start = `top ${isTablet ? "80%" : isSmartphone ? "50%" : "30%"}`;

  useGSAP(() => {
    const titleSplit = new SplitText(".impacts-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".impacts-section",
        start,
      },
    });
    gsap.from(".impacts-section .section-subtitle ", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".impacts-section",
        start,
      },
    });
  }, []);

  return (
    <section className="impacts-section py-10 lg:py-14">
      <div className="container">
        <h2 className="md:10 mb-6 text-center text-[28px] leading-[110%] text-white md:text-[32px] lg:mb-14 lg:text-[40px]">
          {title}
        </h2>
        <ImpactsCarousel
          impacts={impacts}
          customClassNames="sm:basis-1/2 md:basis-1/2"
        />
      </div>
    </section>
  );
};
