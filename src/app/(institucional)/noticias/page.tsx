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
  const { proxima_pagina = "1" } = (await searchParams) || {};
  const currentPage = Number(proxima_pagina);

  // Conecta-se ao Payload CMS
  const payload = await getPayload({ config });

  // Carrega artigos com um número incremental de itens (6 itens a mais a cada página)
  const articles = await payload.find({
    collection: "na-midia",
    depth: 3,
    limit: 6 * currentPage, // Carrega 6 itens por vez, e aumenta com cada próxima página
    pagination: true,
  });

  // Distribuindo os artigos nas 3 colunas
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
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
}
