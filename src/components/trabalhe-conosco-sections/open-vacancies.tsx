"use client";
import React from "react";
import { VacanciesGrid } from "../vacancies-grid";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import type { Vagas } from "../../../payload-types";

interface OpenVacanciesProps {
  vacancies: Vagas[];
}

export const OpenVacancies = ({ vacancies }: OpenVacanciesProps) => {
  useGSAP(() => {
    const titleSplit = new SplitText("#vagas h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#vagas",
        start: "top 50%",
      },
    });
  }, []);

  return (
    <section id="vagas" className="relative max-sm:py-10 md:py-16 lg:py-20">
      <div className="from-brand-main-green to-brand-light-green absolute top-1/2 left-1/2 z-10 h-[289px] w-[851px] -translate-x-1/2 rounded-full bg-gradient-to-b blur-[150px] md:-top-24" />
      <div className="relative z-20 container">
        <h2 className="mb-10 text-center text-[24px] leading-[110%] text-white sm:text-[32px] md:mb-14 lg:text-[40px]">
          <span className="text-brand-light-green font-bold">
            Vem ser parte
          </span>{" "}
          da nossa transformação
        </h2>
        <VacanciesGrid vacancies={vacancies} />
      </div>
    </section>
  );
};
