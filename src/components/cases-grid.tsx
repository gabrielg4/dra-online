"use client";
import React from "react";
import { CardCase } from "./cards/card-case";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import type { PaginatedDocs } from "payload";
import type { CaseDeSucesso } from "../../payload-types";
import { useRouter } from "next/navigation";

interface CasesGridProps {
  nextPage: number | null | undefined;
  cases: PaginatedDocs<CaseDeSucesso>;
}

export const CasesGrid = ({ nextPage, cases }: CasesGridProps) => {
  const router = useRouter();
  const handleNextPage = () => {
    router.push(`/cases?proxima_pagina=${nextPage}`);
  };

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cases?.docs.map((successCase, index) => (
        <CardCase key={index} successCase={successCase} />
      ))}

      {nextPage && nextPage > 0 && (
        <div className="col-span-1 mt-8 flex justify-center sm:col-span-2 lg:col-span-3">
          <Button
            onClick={handleNextPage}
            className="bg-brand-light-green group text-brand-dark-green hover:bg-brand-main-green mx-auto h-auto rounded-full p-0 !px-6 py-3 text-lg duration-300 hover:text-white"
          >
            Carregar mais conteúdos
            <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
          </Button>
        </div>
      )}
    </div>
  );
};
