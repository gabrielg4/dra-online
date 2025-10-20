import Link from "next/link";
import React from "react";

export const FeaturedCaseCard = () => {
  return (
    <Link
      href=""
      className="group block h-auto w-full max-w-[1216px] rounded-lg bg-cover bg-center bg-no-repeat p-5 lg:h-[474px] lg:p-8"
      style={{
        backgroundImage: `url(/images/img-placeholder-case.webp)`,
      }}
    >
      <div className="backdrop-blur-2xl/30 flex h-full w-full max-w-[464px] flex-col justify-between rounded-lg border border-white/30 bg-black/10 px-10 py-6 backdrop-blur-2xl">
        <div className="flex flex-col gap-3">
          <h3 className="mb-3 text-[24px] leading-[130%] font-bold text-white">
            Lorem ipsum dolor aumentou 32% em atendimentos com o dr.online sit
            amet consectetur.{" "}
          </h3>
          <p className="mb-8 text-lg leading-normal font-normal text-white lg:mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        <p className="border-brand-light-green text-brand-light-green group-hover:bg-brand-light-green group-hover:text-brand-dark-green w-fit rounded-full border px-3 py-2 text-center text-[16px] leading-normal font-medium duration-300">
          Leia mais
        </p>
      </div>
    </Link>
  );
};
