"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BlogCard } from "./cards/blog-card";
import { ArrowUpRight } from "lucide-react";
import type { PaginatedDocs } from "payload";
import type { Blog, Categoria } from "../../payload-types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface BlogGridProps {
  posts?: PaginatedDocs<Blog>;
}

export const BlogGrid = ({ posts }: BlogGridProps) => {
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsLoadingCategories(true);
    fetch("/api/categorias")
      .then((res) => res.json())
      .then((data) => setCategories(data.docs))
      .finally(() => setIsLoadingCategories(false));
  }, []);

  const handleFilterByCategory = (categoryId: string) => {
    setCurrentCategory(categoryId);

    router.push(`/blog?categoria=${categoryId}`);
  };

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
        <Button
          onClick={() => handleFilterByCategory("")}
          className={cn(
            "bg-brand-main-green hover:bg-brand-light-green border-brand-main-green hover:text-brand-dark-green cursor-pointer rounded-full border px-5 py-2 font-semibold text-white duration-300 hover:border-white",
            currentCategory === "" &&
              "bg-brand-light-green text-brand-dark-green border border-white",
          )}
        >
          Todos
        </Button>
        {isLoadingCategories && (
          <span className="text-sm text-white">Carregando categorias...</span>
        )}
        {categories.map((category) => (
          <Button
            onClick={() => handleFilterByCategory(String(category.id))}
            key={category.id}
            className={cn(
              "bg-brand-main-green hover:bg-brand-light-green border-brand-main-green hover:text-brand-dark-green cursor-pointer rounded-full border px-5 py-2 font-semibold text-white duration-300 hover:border-white",
              currentCategory === String(category.id) &&
                "bg-brand-light-green text-brand-dark-green border border-white",
            )}
          >
            {category.titulo}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.docs.length ? (
          <>
            {posts?.docs.map((post) => (
              <BlogCard key={post.id} blogpostData={post} />
            ))}
            {posts?.totalDocs > 9 && (
              <div className="col-span-1 mt-8 flex justify-center sm:col-span-2 lg:col-span-3">
                <Button className="bg-brand-light-green group text-brand-dark-green hover:bg-brand-main-green mx-auto h-auto rounded-full p-0 !px-6 py-3 text-lg duration-300 hover:text-white">
                  Carregar mais conteúdos
                  <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <p className="col-span-1 mt-8 text-center text-lg font-medium text-white sm:col-span-2 lg:col-span-3">
            Nenhum post encontrado...
          </p>
        )}
      </div>
    </div>
  );
};
