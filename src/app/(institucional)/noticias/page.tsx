import { NaMidiaCard2 } from "@/components/cards/na-midia-card-2";
import { NaMidiaHero } from "@/components/na-midia-hero";
import React from "react";

export default function NoticiasPage() {
  return (
    <>
      <NaMidiaHero />
      <section
        id="noticias"
        className="bg-[url(/videos/video18.mp4)] bg-cover bg-center bg-no-repeat py-10 lg:py-16"
      >
        <div className="container">
          <h2 className="mb-8 text-center text-[32px] leading-[110%] font-bold text-white md:mb-10 lg:mb-14 lg:text-[40px]">
            Veja mais notícias aqui
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="grid gap-8 md:pt-20">
              <NaMidiaCard2 />
              <NaMidiaCard2 />
              <NaMidiaCard2 />
            </div>
            <div className="grid gap-8 md:pb-20">
              <NaMidiaCard2 />
              <NaMidiaCard2 />
              <NaMidiaCard2 />
            </div>
            <div className="grid gap-8 md:pt-20">
              <NaMidiaCard2 />
              <NaMidiaCard2 />
              <NaMidiaCard2 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
