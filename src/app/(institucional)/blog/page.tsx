import { BlogGrid } from "@/components/blog-grid";
import { FeaturedPostsCarousel } from "@/components/featured-posts-carousel";
import { SearchInput } from "@/components/search-input";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <section className="mb:pb-14 bg-[url(/images/img-bg-blog.svg)] bg-cover bg-bottom bg-no-repeat pt-40 pb-10 md:h-[580px] md:pt-20">
        <div className="container flex h-full flex-col items-center justify-between gap-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="mb-3 text-center text-lg text-white md:text-start">
              <span className="font-bold">
                Blog dr<span className="text-brand-light-green">. </span>
              </span>
              online
            </h1>
            <h2 className="mb-8 text-center text-[32px] leading-[110%] font-bold text-white md:mb-10 md:text-start md:text-[40px] lg:mb-14 lg:text-[48px]">
              Saúde digital, <br className="hidden md:inline-block" />
              inovação e cuidado <br className="hidden md:inline-block" />
              que gera valor
            </h2>

            <SearchInput />
          </div>
          <div className="w-full md:w-1/2">
            <FeaturedPostsCarousel />
          </div>
        </div>
      </section>
      <section className="md:14 bg-[url(/images/img-bg-section-blog.svg)] bg-cover bg-top bg-no-repeat py-12 lg:py-20">
        <div className="container">
          <BlogGrid />
        </div>
      </section>
    </>
  );
}
