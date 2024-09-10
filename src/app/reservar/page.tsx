"use client";

import Footer from "@/components/layout/footer";
import Wrapper from "@/components/layout/wrapper";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
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
import { CONTACTS, WHATSAPP } from "@/utils/constants";
import FloatingWhatsapp from "@/components/shared/floating-whatsapp";

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
    const message = `Olá, gostaria de reservar uma mesa para o dia ${formattedDate} às ${data.time} para ${data.persons} ${personsText}.`;

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
      <div id="page_top" className="absolute -top-20 bg-blue-400 p-20"></div>
      <Wrapper className="pb-0">
        <div className="bg-white px-4 py-8 rounded-xl w-full">
          <div className="max-w-[276px] sm:max-w-screen-sm w-full mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-y-4"
              >
                <div className="w-full space-y-1">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Escolha um dia</FormLabel>
                        <FormControl>
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(val) => {
                              if (val)
                                field.onChange(format(val, "yyyy-MM-dd"));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4 w-full">
                  <div className="w-full space-y-1">
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hora</FormLabel>
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
                                  console.log("run");
                                  if (!form.watch("date")) {
                                    form.setError("time", {
                                      message:
                                        "Por favor, selecione a data antes de escolher a hora",
                                    });
                                  }
                                }}
                                className="!ring-0"
                              >
                                <SelectValue placeholder="Selecionar" />
                              </SelectTrigger>
                              <SelectContent>
                                {times.map((value: string, index: number) => (
                                  <SelectItem key={index} value={value}>
                                    {value}
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
                  <div className="w-full space-y-1">
                    <FormField
                      control={form.control}
                      name="persons"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de pessoas</FormLabel>
                          <FormControl>
                            <Select
                              {...field}
                              onValueChange={(value) =>
                                form.setValue("persons", value)
                              }
                              value={field.value}
                            >
                              <SelectTrigger className="!ring-0">
                                <SelectValue placeholder="Selecionar" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 6 }, (_, i) => i + 1).map(
                                  (number) => (
                                    <SelectItem
                                      key={number}
                                      value={String(number)}
                                    >
                                      {number}
                                    </SelectItem>
                                  )
                                )}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" variant="capsuleBig" className="w-full">
                    <span>Continuar</span>
                    <ChevronRightIcon className="size-4 ml-2" />
                  </Button>
                  <FormDescription className="text-center text-xs">
                    Ao clicar, será redirecionado para um chat no WhatsApp para
                    continuar a sua reserva.
                  </FormDescription>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
