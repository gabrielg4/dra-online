"use client";
import React from "react";
import { DiferentialsTabs } from "../diferentials-tabs";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const Diferentials = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section-diferentials", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.7,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: "#diferentials",
        start: "top 70%",
        // markers: true,
      },
    });
  }, []);

  return (
    <section
      id="diferentials"
      className="has-bg-white overflow-hidden bg-white bg-[url('/images/bg-diferenciais.webp')] bg-cover bg-center py-14 max-sm:pt-28"
    >
      <div className="container">
        <h2 className="title-section-diferentials text-brand-dark-green mb-8 text-center text-[24px] leading-[120%] font-medium sm:text-[32px] md:mb-14">
          Com a <strong className="font-semibold">dr</strong>
          <span className="text-brand-light-green">.</span>online, você encontra
          um
          <br className="hidden md:inline-block" />
          <strong className="font-semibold">
            ecossistema completo de soluções digitais
          </strong>
        </h2>

        <DiferentialsTabs />
      </div>
    </section>
  );
};
