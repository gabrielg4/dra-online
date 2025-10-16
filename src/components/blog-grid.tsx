"use client";
import React from "react";
import { Button } from "./ui/button";
import { BlogCard } from "./cards/blog-card";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "Todos",
  "Tag tema 1",
  "Tag tema 2",
  "Tag tema 3",
  "Tag tema 4",
];

export const BlogGrid = () => {
  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
        {categories.map((category) => (
          <Button
            key={category}
            className="bg-brand-main-green hover:bg-brand-light-green hover:text-brand-dark-green cursor-pointer rounded-full px-5 py-2 font-semibold text-white duration-300"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <div className="col-span-1 mt-8 flex justify-center sm:col-span-2 lg:col-span-3">
          <Button className="bg-brand-light-green group text-brand-dark-green hover:bg-brand-main-green mx-auto h-auto rounded-full p-0 !px-6 py-3 text-lg duration-300 hover:text-white">
            Carregar mais conteúdos
            <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
          </Button>
        </div>
      </div>
    </div>
  );
};
