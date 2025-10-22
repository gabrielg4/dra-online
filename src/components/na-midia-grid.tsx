"use client";
import { ArrowUpRight } from "lucide-react";
import type { NaMidia } from "../../payload-types";
import { NaMidiaCard2 } from "./cards/na-midia-card-2";
import { useRouter } from "next/navigation";

interface NaMidiaGridProps {
  nextPage: number | null | undefined;
  column1: NaMidia[];
  column2: NaMidia[];
  column3: NaMidia[];
}

export const NaMidiaGrid = ({
  nextPage,
  column1,
  column2,
  column3,
}: NaMidiaGridProps) => {
  const router = useRouter();
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    router.push(`/noticias?proxima_pagina=${nextPage}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="grid items-start gap-8 md:pt-20">
          {column1.map((article) => (
            <NaMidiaCard2 key={article.id} data={article} />
          ))}
        </div>
        <div className="grid items-start gap-8 md:pb-20">
          {column2.map((article) => (
            <NaMidiaCard2 key={article.id} data={article} />
          ))}
        </div>
        <div className="grid items-start gap-8 md:pt-20">
          {column3.map((article) => (
            <NaMidiaCard2 key={article.id} data={article} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
        {nextPage && nextPage > 0 && (
          <button
            onClick={handleNextPage}
            className="group bg-brand-light-green text-brand-dark-green flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-[16px] leading-[150%] font-medium duration-300"
          >
            Ver mais
            <ArrowUpRight
              strokeWidth={1.5}
              className="size-6 duration-300 group-hover:rotate-45"
            />
          </button>
        )}
        <button
          onClick={backToTop}
          className="group border-brand-light-green text-brand-light-green flex cursor-pointer items-center gap-1 rounded-full border px-4 py-2 text-[16px] leading-[150%] font-medium duration-300"
        >
          Voltar ao topo
          <ArrowUpRight
            strokeWidth={1.5}
            className="size-6 duration-300 group-hover:rotate-45"
          />
        </button>
      </div>
    </>
  );
};
