"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SecurityCards = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#security",
        start: "top 80%",
        end: "top: 60%",
        scrub: 5,
        // markers: true,
      },
    });

    tl.to(card1.current, {
      y: 0,
      opacity: 1,
      duration: 4,
    })
      .to(card2.current, {
        y: 0,
        opacity: 1,
        duration: 4,
      })
      .to(card3.current, {
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
    <div
      id="security"
      className="mt-20 hidden w-full items-end justify-center gap-8 px-20 md:flex"
    >
      <div
        ref={card2}
        className="w-full max-w-[332px] translate-y-10 opacity-0"
      >
        <Image
          src="/images/ic-shield-check.svg"
          alt="Ícone check"
          width={72}
          height={72}
          className="mx-auto"
        />
        <p className="text-center text-lg font-bold text-white">
          Adequação total
          <br /> à LGPD
        </p>
      </div>
      <div
        ref={card1}
        className="w-full max-w-[332px] translate-y-10 opacity-0"
      >
        <Image
          src="/images/ic-shield-check.svg"
          alt="Ícone check"
          width={72}
          height={72}
          className="mx-auto"
        />
        <p className="text-center text-lg font-bold text-white">
          Arquitetura em nuvem (AWS) que
          <br /> garante segurança, estabilidade e<br />
          rastreabilidade
        </p>
      </div>
      <div
        ref={card3}
        className="w-full max-w-[332px] translate-y-10 opacity-0"
      >
        <Image
          src="/images/ic-shield-check.svg"
          alt="Ícone check"
          width={72}
          height={72}
          className="mx-auto"
        />
        <p className="text-center text-lg font-bold text-white">
          Conformidade com
          <br />
          normas da Anvisa
        </p>
      </div>
    </div>
  );
};
