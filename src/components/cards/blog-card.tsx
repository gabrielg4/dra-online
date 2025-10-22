"use client";
import Link from "next/link";
import React from "react";
import type { Blog } from "../../../payload-types";

interface BlogCardProps {
  blogpostData: Blog;
}

export const BlogCard = ({ blogpostData }: BlogCardProps) => {
  let backgroundImage = "";
  if (
    typeof blogpostData.imagem_de_destaque === "object" &&
    blogpostData.imagem_de_destaque.url
  ) {
    backgroundImage = `${blogpostData.imagem_de_destaque.url}`;
  } else {
    backgroundImage = "/images/card-blog.webp";
  }

  return (
    <Link
      href={`/blog/${blogpostData.slug}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
      className="group flex h-[422px] w-full items-end justify-end rounded-2xl bg-cover bg-center p-4 duration-300 hover:-translate-y-3"
    >
      <div className="w-full rounded-2xl bg-white/10 p-4 shadow-2xl/10 backdrop-blur-2xl">
        <h3 className="mb-3 text-lg font-bold text-white">
          {blogpostData.titulo.length > 100
            ? blogpostData.titulo.substring(0, 95) + "..."
            : blogpostData.titulo}
        </h3>
        <p className="text-brand-light-gray mb-8 text-sm">
          {blogpostData.descricao.length > 100
            ? blogpostData.descricao.substring(0, 95) + "..."
            : blogpostData.descricao}
        </p>
        <button className="bg-brand-light-green text-brand-dark-green text-md group-hover:bg-brand-main-green rounded-full px-6 py-2 font-medium duration-300 group-hover:text-white">
          Ler mais
        </button>
      </div>
    </Link>
  );
};
