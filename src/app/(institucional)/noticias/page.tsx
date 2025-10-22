import { NaMidiaHero } from "@/components/na-midia-hero";
import { getPayload } from "payload";
import config from "@payload-config";
import React from "react";
import type { NaMidia } from "../../../../payload-types";
import { NaMidiaGrid } from "@/components/na-midia-grid";

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ proxima_pagina?: string }>;
}) {
  const { proxima_pagina = 1 } = (await searchParams) || {};
  const payload = await getPayload({ config });

  const articles = await payload.find({
    collection: "na-midia",
    depth: 3,
    limit: Number(9 * Number(proxima_pagina) || 1),
    pagination: true,
  });

  const columns: NaMidia[][] = [[], [], []];
  articles.docs.forEach((article: NaMidia, index) => {
    columns[index % 3].push(article);
  });

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
          <NaMidiaGrid
            nextPage={articles.nextPage}
            column1={columns[0]}
            column2={columns[1]}
            column3={columns[2]}
          />
        </div>
      </section>
    </>
  );
}
