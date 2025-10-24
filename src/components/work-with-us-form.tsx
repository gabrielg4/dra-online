"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Label } from "./ui/label";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

const MAX_SIZE_MB = 2;
const MAX_SIZE = MAX_SIZE_MB * 1024 * 1024;

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo obrigatório"),
  email: z.email("E-mail inválido"),
  phone: z.string().trim().min(1, "Campo obrigatório"),
  especialidade: z.string().min(1, "Campo obrigatório"),
  crm: z.string().trim().min(1, "Campo obrigatório"),
  state: z.string().trim().min(1, "Campo obrigatório"),
  city: z.string().trim().min(1, "Campo obrigatório"),
  "curriculum-doctor": z
    .instanceof(File, { message: "Envie um arquivo" })
    .refine((f) => f.size > 0, "Arquivo obrigatório")
    .refine(
      (f) => ACCEPTED_TYPES.includes(f.type as (typeof ACCEPTED_TYPES)[number]),
      "Apenas PDF, DOC ou DOCX",
    )
    .refine((f) => f.size <= MAX_SIZE, `Máx. ${MAX_SIZE_MB}MB`),
});

export const WorkWithUsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      crm: "",
      "curriculum-doctor": undefined,
      especialidade: "",
      state: "",
    },
  });

  useGSAP(() => {
    const inputs = gsap.utils.toArray(".input-contact");
    gsap.from(inputs, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.7,
      scrollTrigger: {
        trigger: "#get-in-touch",
        start: "top 80%",
      },
    });
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gradient-work-with-us-form border-brand-light-green flex flex-col items-center justify-center space-y-4 rounded-lg border p-10 backdrop-blur-2xl"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="input-contact w-full">
              <FormControl>
                <Input
                  placeholder="Nome"
                  {...field}
                  className="h-auto w-full rounded-none border-0 border-b border-b-white px-1 !py-3 !text-[16px] font-normal text-white shadow-none placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="input-contact w-full">
              <FormControl>
                <Input
                  placeholder="E-mail"
                  {...field}
                  className="h-auto w-full rounded-none border-0 border-b border-b-white px-1 !py-3 !text-[16px] font-normal text-white shadow-none placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="input-contact w-full">
              <FormControl>
                <Input
                  placeholder="Telefone/WhatsApp"
                  {...field}
                  className="h-auto w-full rounded-none border-0 border-b border-b-white px-1 !py-3 !text-[16px] font-normal text-white shadow-none placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="crm"
          render={({ field }) => (
            <FormItem className="input-contact w-full">
              <FormControl>
                <Input
                  placeholder="CRM / Conselho"
                  {...field}
                  className="h-auto w-full rounded-none border-0 border-b border-b-white px-1 !py-3 !text-[16px] font-normal text-white shadow-none placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-4">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="input-contact w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="!w-full rounded-none border-0 border-b border-b-white px-1 !py-3 !text-[16px] font-normal text-white shadow-none data-[placeholder]:text-white [&_svg]:!text-white">
                      <SelectValue
                        placeholder="Estado"
                        className="!w-full text-white"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">Acre</SelectItem>
                      <SelectItem value="AL">Alagoas</SelectItem>
                      <SelectItem value="AP">Amapá</SelectItem>
                      <SelectItem value="AM">Amazonas</SelectItem>
                      <SelectItem value="BA">Bahia</SelectItem>
                      <SelectItem value="CE">Ceará</SelectItem>
                      <SelectItem value="DF">Distrito Federal</SelectItem>
                      <SelectItem value="ES">Espírito Santo</SelectItem>
                      <SelectItem value="GO">Goiás</SelectItem>
                      <SelectItem value="MA">Maranhão</SelectItem>
                      <SelectItem value="MT">Mato Grosso</SelectItem>
                      <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="PA">Pará</SelectItem>
                      <SelectItem value="PB">Paraíba</SelectItem>
                      <SelectItem value="PR">Paraná</SelectItem>
                      <SelectItem value="PE">Pernambuco</SelectItem>
                      <SelectItem value="PI">Piauí</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      <SelectItem value="RO">Rondônia</SelectItem>
                      <SelectItem value="RR">Roraima</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="SE">Sergipe</SelectItem>
                      <SelectItem value="TO">Tocantins</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="input-contact w-full">
                <FormControl>
                  <Input
                    placeholder="Cidade"
                    {...field}
                    className="w-full rounded-none border-0 border-b border-b-white px-1 !py-3 !text-[16px] font-normal text-white shadow-none placeholder:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="curriculum-doctor"
          render={({ field }) => (
            <FormItem className="input-contact w-full">
              <FormControl>
                <Label
                  htmlFor="curriculum"
                  className="border-b-brand-white flex h-auto w-full cursor-pointer items-center justify-between gap-4 rounded-none border-0 border-b px-1 !py-3 !text-[16px] leading-normal shadow-none"
                >
                  <>
                    <p className="text-[16px] leading-normal font-light text-white">
                      Anexe seu currículo
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      fill="none"
                      viewBox="0 0 24 25"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 17.5h.01m-1.41-3H18c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765 0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.898 3 18.432 3 17.5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14.5 5.068 14.5 6 14.5h2.4m3.6 1v-11m0 0 3 3m-3-3-3 3"
                      />
                    </svg>
                    <Input
                      id="curriculum-doctor"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file ?? null);
                      }}
                      className="hidden"
                    />
                  </>
                </Label>
              </FormControl>
              {field.value && (
                <div className="mt-2 text-sm text-white/90">
                  <strong>Arquivo selecionado:</strong> {field.value.name}
                </div>
              )}

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-brand-light-green hover:bg-brand-light-green2 group text-brand-dark-green mt-5 h-auto w-fit cursor-pointer rounded-full !px-6 !py-3 !text-[16px] font-medium"
        >
          Enviar
          <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
        </Button>
      </form>
    </Form>
  );
};
