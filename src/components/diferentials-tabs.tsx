"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const DiferentialsTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      className="w-full items-center gap-14 p-0 md:justify-center"
    >
      <TabsList className="shadow-brand-main-green flex h-auto w-full max-w-full flex-nowrap gap-0 overflow-x-auto !bg-transparent p-0 shadow-2xl/20 md:justify-center [&::-webkit-scrollbar]:hidden">
        <TabsTrigger
          value="tab1"
          className="text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[9] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Entrevista
          <br /> Qualificada
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          className="text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[8] -ml-4 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Pronto
          <br /> Atendimento 24h
        </TabsTrigger>

        <TabsTrigger
          value="tab3"
          className="text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[7] -ml-4 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Consulta Online
          <br /> com Especialistas
        </TabsTrigger>

        <TabsTrigger
          value="tab4"
          className="text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[6] -ml-4 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Consultório
          <br /> Digital
        </TabsTrigger>

        <TabsTrigger
          value="tab5"
          className="text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[5] -ml-4 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Atenção Integrada
          <br /> à Saúde
        </TabsTrigger>

        <TabsTrigger
          value="tab6"
          className="text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[4] -ml-4 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Saúde
          <br /> Mental
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1" className="group">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="h5 text-brand-black mb-6">Pronto Atendimento 24h</h3>
            <p className="text-brand-dark-gray mb-14 text-lg font-normal">
              Atendimento médico online rápido, humanizado e com resolutividade
              clínica.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-12 flex w-full justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="h5 text-brand-black mb-6">Pronto Atendimento 24h</h3>
            <p className="text-brand-dark-gray mb-14 text-lg font-normal">
              Atendimento médico online rápido, humanizado e com resolutividade
              clínica.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-12 flex w-full justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="h5 text-brand-black mb-6">Pronto Atendimento 24h</h3>
            <p className="text-brand-dark-gray mb-14 text-lg font-normal">
              Atendimento médico online rápido, humanizado e com resolutividade
              clínica.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-12 flex w-full justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="h5 text-brand-black mb-6">Pronto Atendimento 24h</h3>
            <p className="text-brand-dark-gray mb-14 text-lg font-normal">
              Atendimento médico online rápido, humanizado e com resolutividade
              clínica.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-12 flex w-full justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab5">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="h5 text-brand-black mb-6">Pronto Atendimento 24h</h3>
            <p className="text-brand-dark-gray mb-14 text-lg font-normal">
              Atendimento médico online rápido, humanizado e com resolutividade
              clínica.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-12 flex w-full justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab6">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="h5 text-brand-black mb-6">Pronto Atendimento 24h</h3>
            <p className="text-brand-dark-gray mb-14 text-lg font-normal">
              Atendimento médico online rápido, humanizado e com resolutividade
              clínica.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-12 flex w-full justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray mt-2 ml-3 text-lg font-semibold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
