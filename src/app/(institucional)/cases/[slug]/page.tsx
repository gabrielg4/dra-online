import { BlogCarousel } from "@/components/blog-carousel";
import { GetInTouch2 } from "@/components/home-sections/get-in-touch2";
import Image from "next/image";
import React from "react";

export default function Blogpage() {
  return (
    <>
      <section className="bg-white bg-[url(/images/img-bg-hero-blogpost.svg)] bg-contain bg-right bg-no-repeat pt-36 sm:pt-48">
        <div className="container">
          <div className="flex flex-col items-start gap-5 md:flex-row">
            <div className="w-full md:w-[60%] lg:w-[70%]">
              <div className="mb-5 flex items-center gap-4">
                <p className="text-brand-main-green text-xl leading-[130%]">
                  Nome da empresa
                </p>
              </div>
              <h1 className="text-brand-dark-green mb-5 max-w-[768] text-[28px] leading-[110%] font-bold sm:text-[32] md:text-[40px] lg:text-[48px]">
                Lorem ipsum dolor sit amet consectetur. Enim amet sed ac leo
                sodales pharetra vitae nibh.
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-brand-dark-gray text-lg font-normal">
                  Autor
                </p>
                <div className="text-brand-dark-gray flex items-center gap-1 text-lg font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    fill="none"
                    viewBox="0 0 20 21"
                  >
                    <path
                      stroke="#605E70"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.5 8.833h15M5.833 3v1.667M14.167 3v1.667M5.167 18h9.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757v-8c0-.933 0-1.4-.182-1.756a1.666 1.666 0 0 0-.728-.729c-.357-.181-.823-.181-1.757-.181H5.167c-.934 0-1.4 0-1.757.181a1.66 1.66 0 0 0-.728.729C2.5 5.933 2.5 6.4 2.5 7.333v8c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182Z"
                    />
                  </svg>
                  2 semanas atrás
                </div>
                <div className="text-brand-dark-gray flex items-center gap-1 text-lg font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    fill="none"
                    viewBox="0 0 20 21"
                  >
                    <path
                      stroke="#605E70"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6.333V10.5l2.083 1.25M17.5 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                    />
                  </svg>
                  5 min de leitura
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-end gap-5 md:w-[40%] lg:w-[30%]">
              <div className="w-full rounded-xl bg-black/30 p-6 md:max-w-[251px]">
                <p className="text-[28px] leading-[130%] font-bold text-white">
                  +00%
                </p>
                <p className="text-[14px] leading-[150%] text-white">
                  Lorem impsum
                </p>
              </div>
              <div className="w-full rounded-xl bg-black/30 p-6 md:max-w-[251px]">
                <p className="text-[28px] leading-[130%] font-bold text-white">
                  +00%
                </p>
                <p className="text-[14px] leading-[150%] text-white">
                  Lorem impsum
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full rounded-lg sm:h-[455px] lg:mt-20">
            <Image
              src={"/images/img-blogpost-placeholder.webp"}
              alt=""
              width={1216}
              height={455}
              className="h-[280px] w-full rounded-2xl object-cover sm:h-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container">
          <p className="text-brand-dark-gray text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-brand-dark-green my-8 text-[32px] leading-[130%] font-bold">
            Lorem ipsum dolor sit amet,{" "}
            <br className="hidden sm:inline-block" />
            consectetur adipiscing elit, sed
          </h2>
          <p className="text-brand-dark-gray text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="mt-5">
            <h3 className="text-brand-dark-green text-[16px] leading-[150%] font-bold">
              Compartilhe
            </h3>
            <div className="flex items-center gap-3">
              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <mask
                    id="a"
                    width="14"
                    height="14"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#fff" d="M0 0h14v14H0V0Z" />
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill="#A6D05D"
                      d="M11.025.656h2.147L8.482 6.03 14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71 11.025.656Zm-.755 11.4h1.19L3.78 1.877H2.504l7.766 10.179Z"
                    />
                  </g>
                </svg>
              </button>
              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#A6D05D"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z"
                  />
                </svg>
              </button>
              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#A6D05D"
                    d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10ZM8.593 7.3l-.2.008a1 1 0 0 0-.372.1 1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.97 2.742.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231c.13-.068.259-.141.383-.22 0 0 .042-.029.125-.09.135-.1.218-.171.33-.288.084-.087.154-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.502.502 0 0 0-.176-.041.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13 1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373.118-.19.155-.385.093-.536-.28-.684-.57-1.364-.868-2.041-.059-.134-.234-.23-.393-.249a3.001 3.001 0 0 0-.565-.012l.202-.007Z"
                  />
                </svg>
              </button>
              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#A6D05D"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                  />
                </svg>
              </button>
              <button className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#A6D05D"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[url('/images/bg-more-cases.svg')] bg-cover bg-center bg-no-repeat py-14">
        <div className="container">
          <h2 className="mb-8 text-center text-[28px] leading-[110%] font-bold text-white md:mb-14 md:text-[32px] lg:text-[40px]">
            Outras <span className="font-bold">Histórias de Sucesso</span>
          </h2>
          <BlogCarousel />
        </div>
      </section>
      <GetInTouch2 />
    </>
  );
}
