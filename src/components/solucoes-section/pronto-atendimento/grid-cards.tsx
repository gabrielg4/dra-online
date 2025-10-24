"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

export const GridCards = () => {
  const isTablet = useMediaQuery({
    minWidth: 641,
    maxWidth: 768,
  });
  const isSmartphone = useMediaQuery({
    maxWidth: 640,
  });

  useGSAP(() => {
    gsap.from(".card-carousel", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#cards-carousel",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="pb-10 md:pt-16 md:pb-0">
      <div className="container grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        <div className="card-carousel flex h-full flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={90}
            height={90}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            Tecnologia responsiva que permite incluir o acesso do seu cliente
            direto ao seu App, Site ou WhatsApp.
          </p>
        </div>
        <div className="card-carousel flex h-full flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={80}
            height={80}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            Tempo de atendimento médio de no máximo 6 minutos
          </p>
        </div>
        <div className="card-carousel flex h-full flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={80}
            height={80}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            NPS DE 93 na zona de Excelência por +2 anos consecutivos
          </p>
        </div>
        <div className="card-carousel flex h-full flex-col items-center gap-4">
          <Image
            src="/images/ic-shield-check.svg"
            alt="Ícone missão"
            width={80}
            height={80}
            className="h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
          />
          <p className="text-center text-sm font-bold text-white sm:text-lg">
            Propostas modulares que permite o melhor custo-benefício do mercado
          </p>
        </div>
      </div>
    </div>
  );
};
