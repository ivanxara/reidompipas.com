"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Footer from "@/components/layout/footer";
import Wrapper from "@/components/layout/wrapper";
import { Calendar } from "@/components/ui/calendar";
import Heading2 from "@/components/ui/heading-2";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BookMarked, Check, ChevronLeft, ChevronRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { scrollToId } from "@/utils/scroll";
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
import React, { useState } from "react";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { date, time } from "@/utils/generic";
import { supabase } from "@/lib/supabase";
import { Checkbox } from "@/components/ui/checkbox";
import DialogTerms from "@/components/shared/dialog-terms";

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

const ReservationDetails = ({ onSubmit, reservation }: any) => {
  const form = useForm<z.infer<typeof formSchemaReservation>>({
    mode: "onChange",
    resolver: zodResolver(formSchemaReservation),
    defaultValues: reservation || {
      date: "",
      time: "",
      persons: "",
    },
  });

  const { control, handleSubmit, setValue, watch } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-y-4"
      >
        <div className="w-full space-y-1">
          <FormField
            control={control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Escolha um dia</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(val) => {
                      if (val) field.onChange(format(val, "yyyy-MM-dd"));
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
              control={control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hora</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={(value) => setValue("time", value)}
                      value={field.value}
                    >
                      <SelectTrigger className="!ring-0">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          ...time.generateHours(11, 14, 0, 60),
                          ...time.generateHours(19, 21, 30, 60),
                        ].map((value: string, index: number) => (
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
              control={control}
              name="persons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de pessoas</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={(value) => setValue("persons", value)}
                      value={field.value}
                    >
                      <SelectTrigger className="!ring-0">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 6 }, (_, i) => i + 1).map(
                          (number) => (
                            <SelectItem key={number} value={String(number)}>
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
        </div>
      </form>
    </Form>
  );
};

const formSchemaPersonal = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  apelido: z.string().min(3, "O apelido é obrigatório"),
  email: z.string().min(3, "O email é obrigatório").email("O email é inválido"),
  phone: z.string().min(8, "O telefone é obrigatório"),
  comments: z.string(),
  terms: z.boolean().refine((value) => value === true, {
    message: "Você deve aceitar os termos",
  }),
});

const PersonalDetails = ({ setPage, onSubmit, reservation }: any) => {
  const form = useForm<z.infer<typeof formSchemaPersonal>>({
    mode: "onSubmit",
    resolver: zodResolver(formSchemaPersonal),
    defaultValues: {
      name: "",
      apelido: "",
      email: "",
      phone: "",
      comments: "",
      terms: false,
    },
  });

  return (
    <div className="flex flex-col w-full">
      <button className="flex items-center gap-2" onClick={() => setPage(1)}>
        <ChevronLeft className="size-4" />
        <span className="text-sm underline underline-offset-4">Voltar</span>
      </button>
      <Card className="mt-4 bg-muted p-3">
        <Heading2 className="text-sm font-semibold">Reserva para:</Heading2>
        <div className="text-xs mt-1">
          <li>Dia: {date.format(reservation.date)}</li>
          <li>Hora: {reservation.time}</li>
          <li>Pessoas: {reservation.persons}</li>
        </div>
      </Card>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full sm:grid flex flex-col sm:grid-cols-2 gap-4 mt-4"
        >
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome *</FormLabel>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Apelido field */}
          <FormField
            control={form.control}
            name="apelido"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apelido *</FormLabel>
                <FormControl>
                  <Input placeholder="Apelido" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telemóvel *</FormLabel>
                <FormControl>
                  <Input placeholder="Telemóvel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Comments */}
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Informações adicionais</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Se desejar adicionar alguma nota à sua reserva, por favor escreva-a aqui"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 flex sm:block items-center flex-col justify-center w-full">
            {/* termos */}

            <div className="items-top flex space-x-2 pb-4">
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <div className="flex items-start gap-2">
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                        <DialogTerms />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit button */}
            <div className="flex flex-col items-center justify-center gap-2 mt-4">
              <Button type="submit" variant="capsuleBig">
                <span>Reservar</span>
              </Button>
              <FormDescription className="text-center text-xs">
                Ao clicar em reservar, enviaremos a confirmação da sua reserva
                para o número de telemóvel que introduziu, assim que possível.
              </FormDescription>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default function Page() {
  const [page, setPage] = useState(1);
  const [reservation, setReservation] = useState({});

  const onSubmitReservation = (data: z.infer<typeof formSchemaReservation>) => {
    setReservation(data);
    setPage(2);
    scrollToId("page_top");
  };

  const onSubmitPersonal = (data: z.infer<typeof formSchemaPersonal>) => {
    setReservation((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
      <div id="page_top" className="absolute -top-20 bg-blue-400 p-20"></div>
      <Wrapper className="pb-0">
        <div className="bg-white px-4 py-8 rounded-xl w-full">
          <div className="max-w-[276px] sm:max-w-screen-sm w-full mx-auto">
            {page === 1 ? (
              <ReservationDetails
                onSubmit={onSubmitReservation}
                reservation={reservation}
              />
            ) : (
              <PersonalDetails
                onSubmit={onSubmitPersonal}
                setPage={setPage}
                reservation={reservation}
              />
            )}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
