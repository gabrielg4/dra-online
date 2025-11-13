"use client";
import React from "react";
import { HistoryTimeline } from "../history-timeline";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";
// import gsap from "gsap";

export const TimeLine = () => {
  // useGSAP(() => {
  //   const titleSplit = new SplitText(".s-timeline h2.section-title", {
  //     type: "chars, words",
  //   });
  //   gsap.from(titleSplit.chars, {
  //     yPercent: 100,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "expo.out",
  //     stagger: 0.5,
  //     scrollTrigger: {
  //       trigger: ".s-timeline",
  //       start: "top 90%",
  //       end: "center 80%",
  //       scrub: true,
  //     },
  //   });
  // }, []);
  return (
    <section className="s-timeline overflow-hidden pb-10 max-sm:pt-10 lg:pt-20 lg:pb-20">
      <div className="container">
        <h2 className="section-title mb-6 text-center text-[32px] leading-[110%] text-white md:mb-10 lg:mb-14 lg:text-[40px]">
          Conheça <strong className="font-bold">nossa trajetória</strong>
        </h2>
        <HistoryTimeline />
      </div>
    </section>
  );
};
