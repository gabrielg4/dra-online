import Image from "next/image";
import Link from "next/link";
import React from "react";

export const VacancieCard = () => {
  return (
    <Link
      href="/"
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
        <h3 className="mb-2 text-lg font-bold text-white">Nome da vaga</h3>
        <p className="text-[16px] leading-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Link>
  );
};
