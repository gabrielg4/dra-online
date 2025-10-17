import React from "react";
import { CardCase } from "./cards/card-case";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export const CasesGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <CardCase />
      <CardCase />
      <CardCase />
      <CardCase />
      <CardCase />
      <CardCase />
      <div className="col-span-1 mt-8 flex justify-center sm:col-span-2 lg:col-span-3">
        <Button className="bg-brand-light-green group text-brand-dark-green hover:bg-brand-main-green mx-auto h-auto rounded-full p-0 !px-6 py-3 text-lg duration-300 hover:text-white">
          Carregar mais conteúdos
          <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
        </Button>
      </div>
    </div>
  );
};
