"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const MetricsContainer = () => {
  useGSAP(() => {
    const metricCards = gsap.utils.toArray(".metric-card");
    gsap.from(metricCards, {
      yPercent: 100,
      opacity: 0,
      duration: 3,
      ease: "expo.out",
      stagger: 0.6,
      scrollTrigger: {
        trigger: "#metrics",
        start: "top 80%",
        // end: "bottom 70%",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="hidden w-full items-start justify-between gap-8 md:flex">
      <div className="metric-card translate-y-7 rounded-2xl bg-white/10 p-4 shadow-2xl/10">
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            93
          </p>
        </div>
        <p className="text-lg text-white">
          de NPS que representa o nível de satisfação dos beneficiários.
        </p>
      </div>
      <div className="metric-card rounded-2xl bg-white/10 p-4 shadow-2xl/10">
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            92<span className="text-[32px]">%</span>
          </p>
        </div>
        <p className="text-lg text-white">
          de NPS que representa o nível de satisfação dos beneficiários.
        </p>
      </div>
      <div className="metric-card translate-y-7 rounded-2xl bg-white/10 p-4 shadow-2xl/10">
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            94
          </p>
        </div>
        <p className="text-lg text-white">
          de NPS que representa o nível de satisfação dos beneficiários.
        </p>
      </div>
    </div>
  );
};
