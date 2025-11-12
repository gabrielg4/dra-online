"use client";

import Image from "next/image";
import React from "react";
import { ContactForm } from "../contact-form";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { SplitText } from "gsap/all";

export const ContactSolution = () => {
  // useGSAP(() => {
  //   const titleSplit = new SplitText(".title-contact-section", {
  //     type: "chars, words",
  //   });

  //   gsap.from(titleSplit.chars, {
  //     yPercent: 100,
  //     opacity: 0,
  //     duration: 0.8,
  //     ease: "expo.out",
  //     stagger: 0.03,
  //     scrollTrigger: {
  //       trigger: "#contato",
  //       start: "top 80%",
  //     },
  //   });

  //   gsap.from(".description-contact", {
  //     xPercent: -100,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "expo.out",
  //     stagger: 0.05,
  //     scrollTrigger: {
  //       trigger: "#contato",
  //       start: "top 80%",
  //     },
  //   });
  // }, []);

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[url('/images/bg-contact-section.svg')] bg-cover bg-center bg-no-repeat py-10 md:py-14"
    >
      <div className="blur-contact-solution"></div>
      <div className="relative z-10 container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
        <div className="relative flex w-full flex-col-reverse items-center md:w-1/2 md:flex-col md:items-start lg:w-auto">
          <div>
            <h2 className="title-contact-section mb-3 text-center text-[32px] leading-[110%] font-bold text-white max-sm:text-2xl md:text-start lg:text-[40px]">
              Preencha o formulário <br className="hidden lg:inline-block" />e
              esteja sempre Online!
            </h2>
            <p className="description-contact mb-5 text-center text-lg leading-normal font-normal text-white max-sm:text-base max-sm:text-lg md:mb-10 md:text-start">
              Agende uma demonstração e descubra como simplificar a
              <br className="hidden lg:inline-block" /> telemedicina na sua
              empresa.
            </p>
          </div>
          <Image
            src="/images/mascote.gif"
            alt="Mascote"
            width={154}
            height={154}
            unoptimized
            className="mb-5"
          />
        </div>
        <div className="border-l-brand-light-green relative w-full md:w-1/2 md:border-l md:pl-10 lg:max-w-[543px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
