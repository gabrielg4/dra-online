"use client";

import Image from "next/image";
import React from "react";
import { ContactForm } from "../contact-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const GetInTouch = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-contact-section", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#get-in-touch",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="get-in-touch"
      className="overflow-hidden bg-[url('/images/bg-contact-section.svg')] bg-cover bg-center bg-no-repeat py-10 md:py-14"
    >
      <div className="relative z-10 container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
        <div className="relative w-full md:w-1/2 lg:w-auto">
          <h2 className="title-contact-section mb-5 text-center text-2xl leading-[110%] font-bold text-white md:mb-10 md:text-start md:text-[32px] lg:text-[40px]">
            Vamos conversar sobre
            <br className="hidden lg:inline-block" /> a saúde digital da sua
            <br className="hidden lg:inline-block" /> empresa?
          </h2>
          <Image
            src="/images/mascote.webp"
            alt="Mascote"
            width={154}
            height={154}
            className="hidden md:block"
          />
        </div>
        <div className="border-l-brand-light-green w-full md:w-1/2 md:border-l md:pl-10 lg:max-w-[543px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
