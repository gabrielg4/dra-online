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
    <section
      id="form-curriculo-medico"
      className="bg-[url(/images/img-work-with-us.webp)] bg-right py-14"
    >
      <div className="container flex items-center justify-center lg:justify-end">
        <div className="w-full max-w-[584px]">
          <h2 className="text-brand-dark-green mb-8 text-center text-[32px] leading-[110%] font-bold md:text-[40px]">
            Faça seu credenciamento
          </h2>
          <WorkWithUsForm />
        </div>
      </div>
    </section>
  );
};
