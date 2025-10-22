import { getPayload } from "payload";
import config from "@payload-config";

import { BlogGrid } from "@/components/blog-grid";
import { FeaturedPostsCarousel } from "@/components/featured-posts-carousel";
import { SearchInput } from "@/components/search-input";
import React from "react";
import { buildWhereClause } from "@/utils/build-where-clause";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; search?: string }>;
}) {
  const { categoria = "", search = "" } = (await searchParams) || {};
  const payload = await getPayload({ config });
  const whereClause = buildWhereClause({ categoria, search });

  const [posts, featuredPosts] = await Promise.all([
    await payload.find({
      collection: "blog",
      depth: 3,
      limit: 9,
      page: 1,
      pagination: true,
      ...whereClause,
    }),
    await payload.find({
      collection: "blog",
      limit: 3,
      where: {
        e_destaque: {
          equals: "Sim",
        },
      },
    }),
  ]);
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
            {featuredPosts.totalDocs > 0 && (
              <FeaturedPostsCarousel featuresPosts={featuredPosts} />
            )}
          </div>
        </div>
      </section>
      <section className="md:14 bg-[url(/images/img-bg-section-blog.svg)] bg-cover bg-top bg-no-repeat pt-10 pb-20">
        <div className="container">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
