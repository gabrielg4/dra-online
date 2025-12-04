"use client";

import Image from "next/image";
import React from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { SplitText } from "gsap/all";
import { WorkWithUsForm2 } from "../work-with-us-form-2";
import type { Vagas } from "../../../payload-types";

interface WorkWithUsSection2Props {
  vacancies: Vagas[];
}

export const WorkWithUsSection2 = ({ vacancies }: WorkWithUsSection2Props) => {
  // useGSAP(() => {
  //   const titleSplit = new SplitText(".title-contact-section", {
  //     type: "chars, words",
  //   });
  //   gsap.from(titleSplit.chars, {
  //     yPercent: 100,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "expo.out",
  //     stagger: 0.05,
  //     scrollTrigger: {
  //       trigger: "#form-curriculo",
  //       start: "top 80%",
  //     },
  //   });
  // }, []);

  return (
    <section
      id="form-curriculo"
      className="relative bg-[url('/images/bg-contact-section.svg')] bg-cover bg-center bg-no-repeat py-10 max-sm:pt-4 md:py-14"
    >
      <div className="blur-1 absolute -left-[846px] max-[767]:bottom-0 md:-top-[300px] md:-left-[536px]"></div>
      <div className="relative z-10 container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
        <div className="relative flex w-full flex-col-reverse items-center md:w-1/2 md:flex-col md:items-start lg:w-auto">
          <h2 className="title-contact-section mb-4 text-center text-[28px] leading-[110%] font-bold text-white md:text-start lg:text-[40px]">
            Venha fazer parte da <br className="hidden lg:inline-block" />
            <span className="text-brand-light-green">
              {" "}
              Saúde Digital do Brasil
            </span>
          </h2>
          <p className="mb-5 text-center text-lg leading-normal font-normal text-white md:mb-10 md:text-start">
            Preencha seus dados no formulário abaixo para se
            <br className="hidden md:inline-block" /> inscrever em nosso banco
            de talentos.
          </p>
          <Image
            src="/images/mascote.gif"
            alt="Mascote"
            width={154}
            height={154}
            unoptimized
            className=""
          />
        </div>
        <div className="border-l-brand-light-green relative w-full md:w-1/2 md:border-l md:pl-10 lg:max-w-[543px]">
          <WorkWithUsForm2 vacancies={vacancies} />
        </div>
      </div>
    </section>
  );
};
