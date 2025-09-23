import Link from "next/link";
import React from "react";

export const BlogCard = () => {
  return (
    <Link
      href="/"
      className="group flex h-[422px] w-full items-end justify-end rounded-2xl bg-[url('/images/card-blog.webp')] bg-cover bg-center p-4 duration-300 hover:-translate-y-3"
    >
      <div className="rounded-2xl bg-white/10 p-4 shadow-2xl/10 backdrop-blur-2xl">
        <h3 className="mb-3 text-lg font-bold text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className="text-brand-light-gray mb-8 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-brand-light-green text-brand-dark-green text-md group-hover:bg-brand-main-green rounded-full px-6 py-2 font-medium duration-300 group-hover:text-white">
          Ler mais
        </button>
      </div>
    </Link>
  );
};
