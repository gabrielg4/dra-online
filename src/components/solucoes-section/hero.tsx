import React from "react";
import { CtaButton } from "../cta-button";

export const Hero = () => {
  return (
    <section className="bg-[url(/images/img-bg-hero-solucao-1.webp)] bg-cover bg-center bg-no-repeat md:h-[580px]">
      <div className="container flex h-full flex-col justify-center">
        <div className="w-full max-w-[500px]">
          <h1 className="text-brand-light-green mb-2 text-[32px] font-bold md:text-[40px] lg:text-[48px]">
            Entrevista Qualificada
          </h1>
          <p className="mb-10 text-lg leading-normal font-normal text-white md:mb-14">
            Decisões regulatórias seguras, baseadas em dados.
          </p>

          <CtaButton url="#contato" title="Falar com especialista" />
        </div>
      </div>
    </section>
  );
};
