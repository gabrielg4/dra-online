import { ChallengersAnimation } from "@/components/animated-sections/challenges-animation";
import { HeroAnimation } from "@/components/animated-sections/hero-animation";
import { CtaButton } from "@/components/cta-button";
import { DiferentialsTabs } from "@/components/diferentials-tabs";
import { LogoCarousel } from "@/components/logo-carousel";
import { Metrics } from "@/components/animated-sections/metrics";
import Image from "next/image";
import { SecurityCards } from "@/components/animated-sections/security-cards";
import { WheelCarousel } from "@/components/animated-sections/wheel-carousel";
import { FAQ } from "@/components/faq";
import { BlogCarousel } from "@/components/blog-carousel";
import { ContactForm } from "@/components/contact-form";
import { HeroAnimationMobile } from "@/components/animated-sections/hero-animation-mobile";
import { MetricsMobileCarousel } from "@/components/mobile/metrics-mobile-carousel";
import { SecurityCardsMobileCarousel } from "@/components/mobile/security-cards-mobile-carousel";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[url('/images/img-bg_hero.webp')] bg-cover bg-center pt-40 pb-10 md:pb-20 lg:pb-40">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="h3 md:h2 mb-6 text-center text-white">
            Somos a principal empresa <br className="hidden md:inline-block" />
            de Telemedicina do país!
          </h1>
          <div className="relative mb-8 sm:mb-12">
            <div className="from-brand-dark-green to-brand-dark-green/0 absolute -top-1 -right-[60px] flex w-[201px] justify-end rounded-full bg-gradient-to-l p-1 sm:-right-[84px]">
              <Image src="/images/people.webp" alt="" width={93} height={23} />
            </div>
            <p className="relative z-10 text-center text-xl font-normal text-white">
              <span className="mr-8">Cuidamos da sua saúde</span>
              <br />
              <span className="mr-8">quando e onde você estiver.</span>
            </p>
          </div>

          <CtaButton title="Agende uma demonstração" url="/" />
          <HeroAnimation />
          <HeroAnimationMobile />
        </div>
      </section>
      <section className="pb-10 md:pb-14">
        <div className="container">
          <h2 className="h4 md:h3 mb-10 text-center font-medium text-white">
            <span className="text-brand-light-green font-bold">
              +X empresas
            </span>{" "}
            oferecem saúde digital com a dr.online
          </h2>
          <LogoCarousel />
        </div>
      </section>
      <ChallengersAnimation debug={false} pinScroll={900} />

      <section className="overflow-hidden bg-white bg-[url('/images/bg-diferenciais.webp')] bg-cover bg-center py-14">
        <div className="container">
          <h2 className="h5 md:h4 text-brand-dark-green mb-8 text-center font-medium md:mb-14">
            Com a <strong className="font-semibold">dr</strong>.online, você
            encontra um
            <br className="hidden md:inline-block" />
            <strong className="font-semibold">
              ecossistema completo de soluções digitais
            </strong>
          </h2>

          <DiferentialsTabs />
        </div>
      </section>
      <section
        id="metrics"
        className="overflow-hidden bg-[url('/images/img-bg-beneficios.webp')] bg-cover bg-center py-14"
      >
        <div className="container flex flex-col items-center gap-14 md:flex-row">
          <div className="w-full md:max-w-[373px]">
            <p className="mb-1 text-center font-semibold text-white md:text-start">
              <span className="text-brand-light-green">O impacto da</span> dr.
              <span className="font-normal">online</span>
            </p>
            <h2 className="h5 md:h3 mb-4 text-center font-medium text-white md:text-start">
              A diferença entre oferecer consulta e
              <br className="hidden md:inline-block" />
              <span className="font-semibold"> oferecer resultado</span>
            </h2>
            <div className="hidden w-fit md:block">
              <CtaButton title="Fale com um especialista" url="/" />
            </div>
          </div>
          <div className="w-full md:max-w-[calc(100%-373px)]">
            <Metrics />
            <MetricsMobileCarousel />
            <div className="mx-auto mt-8 block w-fit md:hidden">
              <CtaButton title="Fale com um especialista" url="/" />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden pb-20">
        <div className="container !px-0">
          <div className="relative flex items-end justify-center gap-8 bg-[url('/images/bg-security.webp')] bg-cover bg-center pt-20">
            <div className="overlay"></div>
            <Image
              src={"/images/img_phone_left.webp"}
              alt=""
              width={256}
              height={510}
            />

            <Image
              src={"/images/img_phone_mid.webp"}
              alt=""
              width={311}
              height={581}
            />

            <Image
              src={"/images/img_phone_right.webp"}
              alt=""
              width={256}
              height={510}
            />
          </div>
          <div className="relative z-10 -mt-20 flex flex-col items-center justify-center px-4">
            <h2 className="h5 md:h3 mb-5 text-center text-white">
              Segurança da informação
              <br />{" "}
              <span className="text-brand-light-green">de ponta a ponta</span>
            </h2>
            <p className="mb-8 text-center text-lg font-normal text-white">
              A saúde digital só faz sentido quando respeita a privacidade, a
              legislação e a segurança dos dados
              <br /> de quem mais importa: os seus beneficiários.{" "}
              <span className="font-semibold">Na dr.</span>online,{" "}
              <span className="font-semibold">
                isso não é diferencial. É padrão.
              </span>
            </p>
            <CtaButton title="Saiba mais" url="/" />
            <SecurityCards />
            <SecurityCardsMobileCarousel />
          </div>
        </div>
      </section>
      <section
        id="midia"
        className="relative bg-[url('/images/img-bg-midia.svg')] bg-cover bg-center md:py-14 lg:py-20"
      >
        <div className="absolute top-[calc(50%+40px)] left-1/2 h-[340px] w-[340px] -translate-x-1/2 bg-[url('/images/ic-circle-blur-overlay.svg')] bg-contain bg-center md:h-[529px] md:w-[529px]" />
        <div className="relative z-10 container">
          <h2 className="display text-center font-normal text-white">
            <span className="font-semibold">
              dr<span className="text-brand-light-green">.</span>
            </span>
            online
            <br />
            <span className="font-semibold">na mídia</span>
          </h2>
        </div>
        <WheelCarousel />
      </section>
      <section className="py-10 lg:py-14">
        <div className="relative z-10 container">
          <p className="text-center font-normal text-white">
            <span className="font-semibold">
              Blog dr<span className="text-brand-light-green">.</span>
            </span>{" "}
            online
          </p>
          <h2 className="h5 md:h3 mb-12 text-center text-white">
            <span className="font-normal">Tudo sobre</span> saúde digital,
            inovação e telemedicina
          </h2>
          <BlogCarousel />
        </div>
      </section>
      <section className="relative py-10 md:py-14">
        <div className="relative z-10 container">
          <FAQ />
        </div>
        <div className="absolute -bottom-[30%] left-0 h-[565px] w-[440px] -translate-x-1/2 rotate-[-37deg] rounded-[300px] bg-[url('/images/ic-rounded-overlay.svg')] bg-contain bg-center bg-no-repeat opacity-50 md:w-[1078px]" />
      </section>
      <section className="py-10 md:py-14">
        <div className="relative z-10 container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
          <div>
            <h2 className="h5 md:h3 text-center text-white md:text-start">
              Vamos conversar sobre
              <br className="hidden md:inline-block" /> a saúde digital da sua
              <br className="hidden md:inline-block" /> empresa?
            </h2>
            <Image
              src="/images/mascote.webp"
              alt="Mascote"
              width={154}
              height={154}
              className="hidden md:block"
            />
          </div>
          <div className="border-l-brand-light-green w-full md:max-w-[543px] md:border-l md:pl-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
