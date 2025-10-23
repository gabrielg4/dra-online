"use client";
import React from "react";
import { BlogCard } from "./cards/blog-card";
import type { PaginatedDocs } from "payload";
import type { Blog } from "../../payload-types";

interface FeaturedPostsCarouselProps {
  featuredPosts?: PaginatedDocs<Blog>;
}

export const FeaturedPostsCarousel = ({
  featuredPosts,
}: FeaturedPostsCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const slides = [0, 1, 2];
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex;
    // const absPosition = Math.abs(diff);

    if (diff === 0) {
      return {
        transform: "translateX(0) scale(0.9)",
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px)",
      };
    } else if (diff === 1 || diff === -(slides.length - 1)) {
      return {
        transform: "translateX(30%) scale(0.60)",
        opacity: 0.4,
        zIndex: 20,
        filter: "blur(2px)",
      };
    } else if (diff === -1 || diff === slides.length - 1) {
      return {
        transform: "translateX(-30%) scale(0.60)",
        opacity: 0.4,
        zIndex: 20,
        filter: "blur(2px)",
      };
    } else {
      return {
        transform: `translateX(${diff > 0 ? "120%" : "-120%"}) scale(0.7)`,
        opacity: 0,
        zIndex: 10,
        filter: "blur(3px)",
      };
    }
  };
  return (
    <div>
      <div className="relative w-full max-w-6xl">
        {/* Carousel Container */}
        <div className="relative flex h-[400px] items-center justify-center">
          {featuredPosts?.docs.map((post, index) => (
            <div
              key={index}
              className="absolute w-full max-w-md transition-all duration-500 ease-out"
              style={getSlideStyle(index)}
            >
              <BlogCard blogpostData={post} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="rounded-fulltransition-all absolute top-1/2 left-4 z-40 -translate-y-1/2 cursor-pointer duration-300 hover:scale-110"
          aria-label="Voltar slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.498"
              d="M30 20H10m0 0 8.333 8.334M10 20l8.333-8.333"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="rounded-fulltransition-all absolute top-1/2 right-4 z-40 -translate-y-1/2 cursor-pointer duration-300 hover:scale-110"
          aria-label="Próximo slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.498"
              d="M10 20h20m0 0-8.333 8.334M30 20l-8.333-8.333"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        {/* <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-teal-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};
