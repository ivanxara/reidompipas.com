"use client";

import Wrapper from "@/components/layout/wrapper";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Clock, Users, CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { date, time } from "@/utils/generic";
import { WHATSAPP } from "@/utils/constants";
import PageHeader from "@/components/shared/page-header";
import { motion } from "framer-motion";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

const formSchemaReservation = z.object({
  date: z
    .string()
    .optional()
    .refine(
      (value) => {
        return !!value;
      },
      {
        message: "Data é obrigatório",
      }
    ),
  time: z
    .string()
    .optional()
    .refine(
      (value) => {
        return !!value;
      },
      {
        message: "Hora é obrigatório",
      }
    ),
  persons: z
    .string()
    .optional()
    .refine(
      (value) => {
        return !!value;
      },
      {
        message: "Número de pessoas é obrigatório",
      }
    ),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchemaReservation>>({
    mode: "onChange",
    resolver: zodResolver(formSchemaReservation),
    defaultValues: {
      date: "",
      time: "",
      persons: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchemaReservation>) => {
    const formattedDate = date.formatExtensive(data.date);

    // @ts-ignore
    const personsText = data.persons === 1 ? "pessoa" : "pessoas";
    const message = `Olá, seria possível reservar uma mesa para ${data.persons} ${personsText} no dia ${formattedDate} às ${data.time}?`;

    window.open(
      `${WHATSAPP}&text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const [times, setTimes] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setTimes(time.getAvailableHours(form.watch("date")));
  }, [form.watch("date")]);

  return (
    <>
      <Script
        id="ldjson-breadcrumb-reservas"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            { name: "Reservas", item: "https://reidompipas.com/reservas" },
          ])
        )}
      </Script>
      <Wrapper className="flex flex-col py-12 lg:py-20 min-h-screen">
        {/* Header */}
        <PageHeader
          subtitle="Marcações"
          title="Reservar Mesa"
          description="Garanta o seu lugar à nossa mesa. Para grupos superiores a 6 pessoas, por favor contacte-nos diretamente."
        />

        <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="bg-white border border-secondary/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-secondary/5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid lg:grid-cols-12 gap-12"
              >
                {/* Date Selection - Left Column */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-b border-secondary/10 pb-4">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <h3 className="font-bellagia text-2xl text-secondary">
                      Escolha a Data
                    </h3>
                  </div>

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <div className="flex justify-center border border-secondary/10 rounded-2xl p-4 bg-secondary/5">
                            <Calendar
                              mode="single"
                              selected={
                                field.value ? new Date(field.value) : undefined
                              }
                              onSelect={(val) => {
                                if (val)
                                  field.onChange(format(val, "yyyy-MM-dd"));
                              }}
                              className="bg-transparent"
                              classNames={{
                                head_cell:
                                  "text-secondary/60 font-inter font-normal text-[0.8rem]",
                                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary/5 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                day: "h-9 w-9 p-0 font-normal font-inter aria-selected:opacity-100 hover:bg-secondary/10 rounded-full transition-colors",
                                day_selected:
                                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                day_today: "bg-secondary/5 text-secondary",
                              }}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Vertical Divider */}
                <div className="hidden lg:block lg:col-span-1 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-secondary/10 -translate-x-1/2"></div>
                </div>

                {/* Time & People - Right Column */}
                <div className="lg:col-span-6 flex flex-col gap-10">
                  <div className="space-y-8">
                    {/* Time Selection */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 border-b border-secondary/10 pb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <h3 className="font-bellagia text-2xl text-secondary">
                          Hora
                        </h3>
                      </div>

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select
                                {...field}
                                onValueChange={(value) =>
                                  form.setValue("time", value)
                                }
                                value={field.value}
                              >
                                <SelectTrigger
                                  onPointerDown={() => {
                                    if (!form.watch("date")) {
                                      form.setError("time", {
                                        message:
                                          "Por favor, selecione a data antes de escolher a hora",
                                      });
                                    }
                                  }}
                                  className="h-14 rounded-xl border-secondary/20 bg-transparent text-lg focus:ring-0 focus:ring-offset-0"
                                >
                                  <SelectValue placeholder="Selecionar hora" />
                                </SelectTrigger>
                                <SelectContent>
                                  {times.length > 0 ? (
                                    times.map(
                                      (value: string, index: number) => (
                                        <SelectItem key={index} value={value}>
                                          {value}
                                        </SelectItem>
                                      )
                                    )
                                  ) : (
                                    <div className="p-4 text-sm text-secondary/50 text-center">
                                      Selecione uma data primeiro
                                    </div>
                                  )}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* People Selection */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 border-b border-secondary/10 pb-4">
                        <Users className="w-5 h-5 text-primary" />
                        <h3 className="font-bellagia text-2xl text-secondary">
                          Pessoas
                        </h3>
                      </div>

                      <FormField
                        control={form.control}
                        name="persons"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select
                                {...field}
                                onValueChange={(value) =>
                                  form.setValue("persons", value)
                                }
                                value={field.value}
                              >
                                <SelectTrigger className="h-14 rounded-xl border-secondary/20 bg-transparent text-lg focus:ring-0 focus:ring-offset-0">
                                  <SelectValue placeholder="Número de pessoas" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from(
                                    { length: 6 },
                                    (_, i) => i + 1
                                  ).map((number) => (
                                    <SelectItem
                                      key={number}
                                      value={number.toString()}
                                    >
                                      {number}{" "}
                                      {number === 1 ? "Pessoa" : "Pessoas"}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Button
                      type="submit"
                      className="w-full h-14 text-lg rounded-full bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                      Solicitar Reserva via WhatsApp
                      <ChevronRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-secondary/40 mt-4 font-inter font-light">
                      A sua reserva ficará pendente de confirmação pela nossa
                      equipa.
                    </p>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
