import Link from "next/link";
import React from "react";

export const FeaturedCaseCard = () => {
  return (
    <Link
      href=""
      className="block h-[474px] w-full max-w-[1216px] rounded-lg bg-cover bg-center bg-no-repeat p-10"
      style={{
        backgroundImage: `url(/images/img-placeholder-case.webp)`,
      }}
    >
      <div className="backdrop-blur-2xl/30 h-full w-full max-w-[464px] rounded-lg border border-white/30 bg-black/10 px-10 py-6">
        <h3 className="text-[24px] leading-[130%] font-bold text-white">
          Lorem ipsum dolor aumentou 32% em atendimentos com o dr.online sit
          amet consectetur.{" "}
        </h3>
        <p className="mb-14 text-lg leading-normal font-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
    </Link>
  );
};
