"use client";
import React from "react";
import { WorkWithUsForm } from "../work-with-us-form";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const WorkWithUsSection = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#vagas-medicos h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#vagas-medicos",
        start: "top 50%",
      },
    });
  }, []);

  return (
    <section className="relative">
      <h2 className="relative z-10 bg-[#054740] pt-8 pb-8 text-center text-[32px] leading-[110%] font-bold text-white md:text-[40px]">
        Faça seu <span className="text-brand-light-green">credenciamento</span>
      </h2>
      <div className="from-brand-main-green/60 to-brand-light-green/60 absolute -top-32 -right-48 h-[340px] w-[550px] rounded-full bg-gradient-to-b blur-3xl" />
      <div
        id="form-curriculo-medico"
        className="relative z-10 bg-[url(/images/img-work-with-us.webp)] bg-right py-14"
      >
        <div className="container flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[584px]">
            <WorkWithUsForm />
          </div>
        </div>
      </div>
    </section>
  );
};
