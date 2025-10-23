import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { CaseDeSucesso, Media } from "../../../payload-types";

interface FeaturedCaseCardProps {
  successCase: CaseDeSucesso;
}

export const CardCase = ({ successCase }: FeaturedCaseCardProps) => {
  return (
    <Link
      href={`/cases/${successCase.slug}`}
      className="group h-fit rounded-lg border border-white/20 bg-white/20 p-6 shadow-2xl/10 backdrop-blur-2xl"
    >
      <Image
        src={(successCase.imagem_de_destaque as Media).url!}
        alt=""
        width={335}
        height={265}
        className="h-full max-h-[265px] w-full rounded-lg object-cover"
      />
      <h3 className="my-6 text-lg leading-normal font-bold text-white">
        {successCase.titulo}
      </h3>

      <p className="text-brand-light-green border-b-brand-light-green w-fit border-b pb-1 text-lg font-bold duration-300 group-hover:-translate-y-1">
        Leia mais
      </p>
    </Link>
  );
};
