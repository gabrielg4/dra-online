"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SecurityCards = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useGSAP(() => {
    const securityCards = gsap.utils.toArray(".security-card");
    gsap.from(securityCards, {
      yPercent: 100,
      opacity: 0,
      duration: 4,
      stagger: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".content-wrapper",
        start: "top 40%",
        end: "top 10%",
        scrub: 3,
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      id="security"
      className="mt-10 hidden w-full items-end justify-center gap-8 md:flex lg:px-20"
    >
      <div
        ref={card2}
        className="security-card w-full max-w-[332px] translate-y-10"
      >
        <Image
          src="/images/ic-shield-check.svg"
          alt="Ícone check"
          width={100}
          height={100}
          className="mx-auto"
        />
        <p className="text-center font-bold text-white text-lg md:text-xl">
          Adequação a<br />
          Portaria 467/2020
        </p>
      </div>
      <div
        ref={card1}
        className="security-card w-full max-w-[332px] translate-y-10"
      >
        <Image
          src="/images/ic-shield-check.svg"
          alt="Ícone check"
          width={100}
          height={100}
          className="mx-auto"
        />
        <p className="text-center font-bold text-white  text-lg md:text-xl">
          Adequação total
          <br /> à LGPD
        </p>
      </div>
      <div
        ref={card3}
        className="security-card w-full max-w-[332px] translate-y-10"
      >
        <Image
          src="/images/ic-shield-check.svg"
          alt="Ícone check"
          width={100}
          height={100}
          className="mx-auto"
        />
        <p className="text-center font-bold text-white  text-lg md:text-xl">
          Conformidade com as
          <br />
          normativas do CFM
        </p>
      </div>
    </div>
  );
};
