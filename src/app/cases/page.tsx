import { FeaturedCasesCarousel } from "@/components/featured-cases-carousel";
import React from "react";

export default function CasesPage() {
  return (
    <section className="py-14">
      <div className="container">
        <h1 className="text-brand-light-green mb-3 pt-20 text-center text-lg font-bold">
          Cases de sucesso
        </h1>
        <h2 className="pb-14 text-center text-[32px] leading-[110%] font-bold text-white md:text-[40px] lg:text-[48px]">
          Quem usa dr<span className="text-brand-light-green">.</span>
          <span className="font-normal">online</span> já colhe <br />
          os melhores resultados
        </h2>
        <FeaturedCasesCarousel />
      </div>
      <div className="mx-auto w-full max-w-[1440px]"></div>
    </section>
  );
}
