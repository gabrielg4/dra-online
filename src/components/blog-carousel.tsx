"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BlogCard } from "./cards/blog-card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Blog } from "../../payload-types";

interface BlogCarouselProps {
  featuredPosts: Blog[];
}

export const BlogCarousel = ({ featuredPosts }: BlogCarouselProps) => {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <div className="relative w-full sm:px-14">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        centeredSlides
        onSlideChange={(e) => setCurrentActive(e.realIndex)}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
          el: ".swiper-pagination",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        wrapperClass="pb-12 lg:pb-0"
      >
        {[...featuredPosts, ...featuredPosts].map((blogpost, i) => (
          <SwiperSlide key={i}>
            <div
              className={cn(
                "h-full w-full pt-3 transition-transform duration-300",
                currentActive !== i && "scale-90 opacity-80",
              )}
            >
              <BlogCard blogpostData={blogpost} />
            </div>
          </SwiperSlide>
        ))}

        {/* Paginação (pontinhos visíveis no mobile) */}
        <div className="swiper-pagination-blog-carousel swiper-pagination mt-8 flex items-center justify-center gap-3 lg:hidden"></div>
      </Swiper>
      {/* Navegação */}
      <button className="swiper-prev hover:text-brand-light-green absolute top-1/2 left-0 z-20 hidden h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center border-0 bg-transparent text-white sm:flex lg:-left-0">
        <ArrowLeft className="size-6" />
      </button>

      <button className="swiper-next hover:text-brand-light-green absolute top-1/2 right-0 z-10 hidden h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center border-0 bg-transparent text-white sm:flex lg:-right-0">
        <ArrowRight className="size-6" />
      </button>
    </div>
  );
};
