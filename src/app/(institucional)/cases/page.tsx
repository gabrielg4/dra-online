import { CasesGrid } from "@/components/cases-grid";
import { FeaturedCasesCarousel } from "@/components/featured-cases-carousel";
import Image from "next/image";
import React from "react";

export default function CasesPage() {
  return (
    <>
      <section className="bg-[url(/images/img-bg-cases.webp)] bg-cover bg-center bg-no-repeat py-14">
        <div className="container">
          <h1 className="text-brand-light-green mb-3 pt-20 text-center text-lg font-bold">
            Cases de sucesso
          </h1>
          <h2 className="pb-14 text-center text-[32px] leading-[110%] font-bold text-white md:text-[40px] lg:text-[48px]">
            Quem usa dr<span className="text-brand-light-green">.</span>
            <span className="font-normal">online</span> já colhe{" "}
            <br className="hidden lg:inline-block" />
            os melhores resultados
          </h2>
        </div>
        <div className="mx-auto w-full max-w-[1440px]">
          <FeaturedCasesCarousel />
        </div>
      </section>
      <section className="relative bg-[url('/images/img-bg-case-section.webp')] bg-cover bg-no-repeat py-10 lg:py-14">
        <div className="relative z-10 container">
          <CasesGrid />
        </div>
        <Image
          src="/images/img-bg-cases-blur.svg"
          alt=""
          width={1078}
          height={565}
          className="absolute top-1/2 -left-80 -translate-y-1/2"
        />
      </section>
    </>
  );
}
