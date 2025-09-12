"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowUpRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo obrigatório"),
  email: z.email("E-mail inválido"),
  phone: z.string().trim().min(1, "Campo obrigatório"),
  message: z.string(),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Nome"
                  {...field}
                  className="border-b-brand-light-green rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white"
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
            <FormItem>
              <FormControl>
                <Input
                  placeholder="E-mail"
                  {...field}
                  className="border-b-brand-light-green rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white"
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
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Telefone/WhatsApp"
                  {...field}
                  className="border-b-brand-light-green rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Deixe sua mensagem"
                  {...field}
                  className="border-b-brand-light-green h-[100px] rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-brand-light-green hover:bg-brand-light-green2 group text-brand-dark-green mt-2 h-auto w-full cursor-pointer rounded-full px-6 py-3 font-medium"
        >
          Falar com especialista
          <ArrowUpRight className="size-4 duration-300 group-hover:rotate-45" />
        </Button>
      </form>
    </Form>
  );
};
