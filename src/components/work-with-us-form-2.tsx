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
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
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
  vacancie: z.string().min(1, "Campo obrigatório"),
  curriculum: z
    .instanceof(File, { message: "Envie um arquivo" })
    .refine((f) => f.size > 0, "Arquivo obrigatório")
    .refine(
      (f) => ACCEPTED_TYPES.includes(f.type as (typeof ACCEPTED_TYPES)[number]),
      "Apenas PDF, DOC ou DOCX",
    )
    .refine((f) => f.size <= MAX_SIZE, `Máx. ${MAX_SIZE_MB}MB`),
});

export const WorkWithUsForm2 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vacancie: "",
      curriculum: undefined,
    },
  });

  useGSAP(() => {
    const inputs = gsap.utils.toArray("#work-with-us-2 .input-work-with-us");
    gsap.from(inputs, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.7,
      scrollTrigger: {
        trigger: "#work-with-us-2",
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
        className="space-y-4 rounded-lg bg-transparent p-6 max-[600px]:bg-white/10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Input
                  placeholder="Nome"
                  {...field}
                  className="border-b-brand-light-green h-auto rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white placeholder:text-white"
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
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Input
                  placeholder="E-mail"
                  {...field}
                  className="border-b-brand-light-green h-auto rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white placeholder:text-white"
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
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Input
                  placeholder="Telefone/WhatsApp"
                  {...field}
                  className="border-b-brand-light-green h-auto rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vacancie"
          render={({ field }) => (
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-b-brand-light-green h-auto !w-full rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white shadow-none placeholder:text-white data-[placeholder]:text-white [&_svg]:!text-white">
                    <SelectValue
                      placeholder="Vaga pretendida"
                      className="!w-full text-white"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">Vaga 1</SelectItem>
                    <SelectItem value="AL">Vaga 2</SelectItem>
                    <SelectItem value="AP">Vaga 3</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="curriculum"
          render={({ field }) => (
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Label
                  htmlFor="curriculum"
                  className="border-b-brand-light-green flex h-auto w-full cursor-pointer items-center justify-between gap-4 rounded-none border-0 border-b px-1 !py-3 !text-[16px] leading-normal shadow-none"
                >
                  <>
                    <p className="text-[16px] leading-normal font-light text-white">
                      Currículo (.pdf, .doc ou .docx - Tam. máximo: 2MB) *
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      fill="none"
                      viewBox="0 0 24 25"
                    >
                      <path
                        stroke="#A6D05D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 17.5h.01m-1.41-3H18c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765 0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.898 3 18.432 3 17.5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14.5 5.068 14.5 6 14.5h2.4m3.6 1v-11m0 0 3 3m-3-3-3 3"
                      />
                    </svg>
                    <Input
                      id="curriculum"
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
          className="bg-brand-light-green hover:bg-brand-light-green2 group text-brand-dark-green mt-2 h-auto w-full cursor-pointer rounded-full !px-6 !py-3 !text-[16px] font-medium"
        >
          Enviar informações
          <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
        </Button>
      </form>
    </Form>
  );
};
