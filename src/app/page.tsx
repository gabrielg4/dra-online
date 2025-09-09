import { HeroAnimation } from "@/components/animated-sections/hero-animation";
import { CtaButton } from "@/components/cta-button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="py-40 bg-[url('/images/img-bg_hero.webp')] bg-cover bg-center overflow-hidden">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="h2 text-white text-center mb-6">
            Somos a principal empresa <br />
            de Telemedicina do país!
          </h1>
          <div className="relative mb-12">
            <div className="absolute -top-1 -right-[84px] w-[201px] p-1 rounded-full bg-gradient-to-l from-brand-dark-green to-brand-dark-green/0 flex justify-end">
              <Image src="/images/people.webp" alt="" width={93} height={23} />
            </div>
            <p className="relative z-10 text-center text-xl font-normal text-white">
              Cuidamos da sua saúde
              <br />
              <span>quando e onde você estiver.</span>
            </p>
          </div>

          <CtaButton title="Agende uma demonstração" url="/" />
          <HeroAnimation />
        </div>
      </section>
    </>
  );
}
