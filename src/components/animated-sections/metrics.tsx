"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Metrics = () => {
  const metric1 = useRef(null);
  const metric2 = useRef(null);
  const metric3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#metrics",
        start: "top 50%",
        end: "top: 50%",
        scrub: 5,
        // markers: true,
      },
    });

    tl.to(metric1.current, {
      y: 0,
      opacity: 1,
      duration: 4,
    })
      .to(metric2.current, {
        y: 0,
        opacity: 1,
        duration: 4,
      })
      .to(metric3.current, {
        y: 0,
        opacity: 1,
        duration: 4,
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="hidden w-full items-start justify-between gap-8 md:flex">
      <div
        ref={metric1}
        className="my-9 translate-y-10 rounded-2xl bg-white/10 p-4 opacity-0 shadow-2xl/10"
      >
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            93
          </p>
        </div>
        <p className="text-lg text-white">
          de NPS que representa o nível de satisfação dos beneficiários.
        </p>
      </div>
      <div
        ref={metric2}
        className="translate-y-16 rounded-2xl bg-white/10 p-4 opacity-0 shadow-2xl/10"
      >
        <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
          <p className="text-brand-light-green text-[64px] leading-none font-bold">
            92<span className="text-[32px]">%</span>
          </p>
        </div>
        <p className="text-lg text-white">
          de NPS que representa o nível de satisfação dos beneficiários.
        </p>
      </div>
      <div
        ref={metric3}
        className="my-9 translate-y-14 rounded-2xl bg-white/10 p-4 opacity-0 shadow-2xl/10"
      >
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
