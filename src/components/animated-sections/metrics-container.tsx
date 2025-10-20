"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Counter from "../counter";

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
      <div className="metric-card max-w-[250px] translate-y-7 rounded-2xl bg-white/10 p-4 shadow-2xl/10">
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            <Counter
              scroll={{
                trigger: "#metrics",
                start: "top 80%",
              }}
              from={0}
              to={93}
            />
          </p>
        </div>
        <p className="text-lg text-white">
          de NPS que representa o nível de satisfação dos beneficiários com os
          atendimentos.
        </p>
      </div>
      <div className="metric-card max-w-[250px] rounded-2xl bg-white/10 p-4 shadow-2xl/10">
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            <Counter
              scroll={{
                trigger: "#metrics",
                start: "top 80%",
              }}
              from={0}
              to={92}
            />
            <span className="text-[32px]">%</span>
          </p>
        </div>
        <p className="text-lg text-white">
          de resolutividade nos atendimentos, com casos solucionados sem a
          necessidade de encaminhamento para consulta presencial.
        </p>
      </div>
      <div className="metric-card max-w-[250px] translate-y-7 rounded-2xl bg-white/10 p-4 shadow-2xl/10">
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            <Counter
              scroll={{
                trigger: "#metrics",
                start: "top 80%",
              }}
              from={0}
              to={94}
            />
          </p>
        </div>
        <p className="text-lg text-white">
          protocolos médicos para garantir segurança e cuidado.
        </p>
      </div>
    </div>
  );
};
