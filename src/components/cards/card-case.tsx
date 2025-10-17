import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CardCase = () => {
  return (
    <Link
      href="/"
      className="group h-fit rounded-lg border border-white/20 bg-white/20 p-6 shadow-2xl/10 backdrop-blur-2xl"
    >
      <Image
        src="/images/img-placeholder-case-2.webp"
        alt=""
        width={335}
        height={265}
        className="h-full max-h-[265px] w-full rounded-lg object-cover"
      />
      <h3 className="my-6 text-lg leading-normal font-bold text-white">
        Lorem ipsum dolor aumentou 32% em atendimentos com o dr.online sit amet
        consectetur.
      </h3>

      <p className="text-brand-light-green border-b-brand-light-green w-fit border-b pb-1 text-lg font-bold duration-300 group-hover:-translate-y-1">
        Leia mais
      </p>
    </Link>
  );
};
