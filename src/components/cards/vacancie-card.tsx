import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Vagas } from "../../../payload-types";

interface VacancieCardProps {
  vacancie: Vagas;
}

export const VacancieCard = ({ vacancie }: VacancieCardProps) => {
  return (
    <Link
      href={vacancie.link_inscricao}
      target="_blank"
      className="rounded-lg bg-white/10 p-5 shadow-2xl/10 duration-300 hover:bg-white/20 lg:p-8"
    >
      <Image
        src="/images/ic-maleta-trabalho.svg"
        alt="ícone maleta de trabalho"
        width={56}
        height={56}
        className="mb-6 h-auto w-auto object-contain"
      />

      <div>
        <h3 className="mb-2 text-lg font-bold text-white">
          {vacancie.nome_vaga}
        </h3>
        <p className="text-[16px] leading-normal text-white">
          {vacancie.descricao.length > 100
            ? vacancie.descricao.substring(0, 95) + "..."
            : vacancie.descricao}
        </p>
      </div>
    </Link>
  );
};
