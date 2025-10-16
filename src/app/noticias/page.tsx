import { VerticalCarouselAboutUs } from "@/components/animated-sections/vertical-carousel-about-us";
import { NaMidiaCard2 } from "@/components/cards/na-midia-card-2";
import { CtaButton } from "@/components/cta-button";
import React from "react";

export default function NoticiasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[url(/images/img-bg-midia.webp)] bg-cover bg-center bg-no-repeat pt-48 pb-16 sm:pt-32 sm:pb-32">
        <div className="relative z-30 container">
          <div className="flex w-full max-w-[450px] flex-col items-center lg:max-w-[510px]">
            <h1 className="text-center text-white">
              <span className="text-[72px]">
                <span className="font-bold">dr</span>
                <span className="text-brand-light-green leading-[100%]">.</span>
                online <br />
              </span>
              <span className="-mt-8 inline-block text-[92px] font-bold">
                na Mídia
              </span>
            </h1>
            <p className="mb-6 text-center text-xl leading-normal font-normal text-white md:mb-10 lg:mb-14">
              Veja o que os grandes portais <br />
              estão falando sobre a dr.online
            </p>

            <CtaButton url="#noticias" title="Ver notícias" />
          </div>
        </div>
        <div className="to-brand-dark-green absolute -bottom-2 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent sm:h-[500px]" />
        <VerticalCarouselAboutUs
          imagesColumn1={[
            "/images/img-midia-1.webp",
            "/images/img-midia-2.webp",
          ]}
          imagesColumn2={[
            "/images/img-midia-3.webp",
            "/images/img-midia-4.webp",
          ]}
          imagesColumn3={[
            "/images/img-midia-5.webp",
            "/images/img-midia-6.webp",
          ]}
        />
      </section>
      <section
        id="noticias"
        className="bg-[url(/images/img-bg-noticias.webp)] bg-cover bg-center bg-no-repeat py-10 lg:py-16"
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
