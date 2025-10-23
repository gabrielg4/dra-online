import { CasesGrid } from "@/components/cases-grid";
import { FeaturedCasesCarousel } from "@/components/featured-cases-carousel";
import Image from "next/image";
import React from "react";

import { getPayload } from "payload";
import config from "@payload-config";

export default async function CasesPage({
  searchParams,
}: {
  searchParams: Promise<{ proxima_pagina?: string }>;
}) {
  const { proxima_pagina = 1 } = (await searchParams) || {};
  const payload = await getPayload({ config });

  const [cases, featuredCases] = await Promise.all([
    await payload.find({
      collection: "case-de-sucesso",
      depth: 3,
      limit: Number(9 * Number(proxima_pagina) || 1),
      pagination: true,
    }),
    await payload.find({
      collection: "case-de-sucesso",
      limit: 3,
      where: {
        e_destaque: {
          equals: "Sim",
        },
      },
    }),
  ]);

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
        {featuredCases.docs.length > 0 && (
          <div className="mx-auto w-full max-w-[1440px]">
            <FeaturedCasesCarousel featuredCases={featuredCases} />
          </div>
        )}
      </section>
      <section className="relative bg-[url('/images/img-bg-case-section.webp')] bg-cover bg-no-repeat py-10 lg:py-16">
        <div className="relative z-10 container">
          <CasesGrid nextPage={cases.nextPage} cases={cases} />
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
