"use client";
import React from "react";
import { LogoCarousel } from "../logo-carousel";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

interface CompaniesLogosProps {
  textGradient?: boolean;
}

export const CompaniesLogos = ({ textGradient }: CompaniesLogosProps) => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#companies",
        start: "top 70%",
        // markers: true,
      },
    });
  }, []);
  return (
    <section id="companies" className="pb-10 md:pb-14">
      <div className="container">
        <h2 className="title-section mb-10 text-center text-[32px] font-medium text-white md:text-[40px]">
          <span className="text-brand-light-green font-bold">
            +60 operadoras
          </span>{" "}
          oferecem saúde digital com a{" "}
          <span className="font-bold">
            dr<span className="text-brand-light-green">.</span>
          </span>
          online
        </h2>
        <LogoCarousel />
      </div>
    </section>
  );
};
