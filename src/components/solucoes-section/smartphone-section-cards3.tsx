"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CtaButton } from "../cta-button";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface SmartphoneSectionCardsProps {
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  fourthImage: string;
  firstVideo: string;
  subtitle: string;
}

export const SmartphoneSectionCards3 = ({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  firstVideo,
  subtitle,
}: SmartphoneSectionCardsProps) => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const startPhones = `top ${isTablet ? "80%" : isSmartphone ? "80%" : "50%"}`;

  useGSAP(() => {
    gsap.from(".title-section-security", {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#smartphones-section",
        start: "center 80%",
        end: "top top",
        scrub: 3,
        // markers: true,
      },
    });

    gsap.from(".security-content", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#smartphones-section",
        start: isSmartphone ? "center 80%" : "center 70%",
        end: "bottom bottom",
        scrub: 3,
        // markers: true,
      },
    });

    // gsap.from(".mobile-phone-video", {
    //   yPercent: 100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "expo.out",
    //   stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: ".image-wrapper",
    //     start: startPhones,
    //     end: "bottom bottom",
    //     scrub: 3,
    //     // markers: true,
    //   },
    // });

    gsap.from(".mobile-phone-image", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      delay: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#smartphones-section",
        start: startPhones,
        end: "top top",
        scrub: 3,
        // markers: true,
      },
    });

    gsap.from(".cta-button-section", {
      scale: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".content-wrapper",
        start: "top 50%",
        end: "top top",
        scrub: 3,
      },
    });
  }, []);

  return (
    <section
      id="smartphones-section"
      className="overflow-hidden pb-20 max-sm:pb-10"
    >
      <div className="container !px-0">
        <div className="image-wrapper relative overflow-hidden bg-[url('/images/bg-security.webp')] bg-cover bg-center pt-20 max-sm:py-10 lg:pt-40">
          <div className="to-brand-dark-green absolute -bottom-2 left-0 z-10 h-[400px] w-full bg-gradient-to-b from-transparent"></div>
          <div className="flex flex-wrap items-center justify-center gap-4 max-sm:hidden md:flex-nowrap">
            <Image
              src={firstImage}
              alt=""
              className={`mobile-phone-image h-full w-[150px] object-contain md:w-[202px]`}
              width={202}
              height={326}
            />
            <Image
              src={secondImage}
              alt=""
              className={`mobile-phone-image h-full w-[130px] object-contain md:w-[208px]`}
              width={238}
              height={391}
            />
            <Image
              src={thirdImage}
              alt=""
              className={`mobile-phone-image h-full w-[130px] object-contain md:w-[230px]`}
              width={230}
              height={447}
            />

            <div className="mobile-phone-image h-[220px] w-[130px] rounded-xl border-[7px] border-white/20 md:h-[544px] md:!w-[290px] md:rounded-3xl md:border-[9px]">
              <video
                src={firstVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full rounded-lg object-cover md:rounded-2xl"
              ></video>
            </div>
            <Image
              src={fourthImage}
              alt=""
              className={`mobile-phone-image absolute top-[350px] right-10 w-[100px] object-contain shadow-2xl/10 md:top-56 md:!w-[180px]`}
              width={230}
              height={400}
            />
          </div>

          <div className="mobile-area-images hidden w-full overflow-hidden max-sm:block [&_.swiper_.swiper-wrapper]:![transition-timing-function:linear]">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={12}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              className="[&_.swiper-wrapper]:![transition-timing-function:linear]"
            >
              <SwiperSlide className="!flex justify-center">
                <Image
                  src={firstImage}
                  alt=""
                  className={`h-full w-[150px] object-contain md:w-[202px]`}
                  width={202}
                  height={326}
                />
              </SwiperSlide>

              <SwiperSlide className="!flex justify-center">
                <Image
                  src={secondImage}
                  alt=""
                  className={`h-full w-[130px] object-contain md:w-[208px]`}
                  width={238}
                  height={391}
                />
              </SwiperSlide>

              <SwiperSlide className="!flex justify-center">
                <Image
                  src={thirdImage}
                  alt=""
                  className={`h-full w-[130px] object-contain md:w-[230px]`}
                  width={230}
                  height={447}
                />
              </SwiperSlide>

              <SwiperSlide className="!flex justify-center">
                <div className="h-[220px] w-[130px] rounded-xl border-[7px] border-white/20 md:h-[544px] md:!w-[290px] md:rounded-3xl md:border-[9px]">
                  <video
                    src={firstVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full rounded-lg object-cover md:rounded-2xl"
                  ></video>
                </div>
              </SwiperSlide>

              <SwiperSlide className="!flex justify-center">
                <Image
                  src={firstImage}
                  alt=""
                  className={`h-full w-[150px] object-contain md:w-[202px]`}
                  width={202}
                  height={326}
                />
              </SwiperSlide>

              <SwiperSlide className="!flex justify-center">
                <Image
                  src={secondImage}
                  alt=""
                  className={`h-full w-[130px] object-contain md:w-[208px]`}
                  width={238}
                  height={391}
                />
              </SwiperSlide>

              <SwiperSlide className="!flex justify-center">
                <Image
                  src={thirdImage}
                  alt=""
                  className={`h-full w-[130px] object-contain md:w-[230px]`}
                  width={230}
                  height={447}
                />
              </SwiperSlide>

              <SwiperSlide className="!flex justify-center">
                <div className="h-[220px] w-[130px] rounded-xl border-[7px] border-white/20 md:h-[544px] md:!w-[290px] md:rounded-3xl md:border-[9px]">
                  <video
                    src={firstVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full rounded-lg object-cover md:rounded-2xl"
                  ></video>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="content-wrapper relative z-10 -mt-20 flex flex-col items-center justify-center px-4">
          <h2 className="title-section-security mb-5 text-center leading-[110%] text-white max-sm:text-4xl sm:text-[32px] lg:text-[40px]">
            Melhor que ler, <br className="hidden max-sm:block" />
            <span className="text-brand-light-green font-bold">
              é conhecer!
            </span>
          </h2>
          <p className="security-content mb-8 text-center text-lg font-normal text-white">
            {subtitle}
          </p>
          <div className="cta-button-section">
            <CtaButton title="Falar com nosso time" url="#contato" />
          </div>
        </div>
      </div>
    </section>
  );
};
