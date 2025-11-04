"use client";
import React from "react";
import { LogoCarousel } from "../logo-carousel";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const CompaniesLogos = () => {
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
        <h2 className="title-section mb-10 text-center text-[32px] font-medium text-white max-sm:text-[23px] md:text-[40px]">
          <span className="text-brand-light-green font-bold max-sm:block max-sm:text-4xl">
            +60 operadoras
          </span>{" "}
          oferecem saúde digital <br className="hidden max-sm:block" />
          com a{" "}
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
