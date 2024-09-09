"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  buttonText?: string;
}

export function DatePicker({
  value,
  onSelect,
  className,
  buttonText = "Pick a date",
}: DatePickerProps) {
  // Function to handle the date selection
  const handleDateSelect = (date: Date | undefined) => {
    if (onSelect) {
      onSelect(date);
    }
  };

  return (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal",
              !value && "text-muted-foreground",
              className
            )}
          >
            {value ? (
              format(value, "PPP")
            ) : (
              <span className="text-muted-foreground opacity-30">
                {buttonText}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
