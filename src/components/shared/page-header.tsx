import { cn } from "@/lib/utils";
import React from "react";

interface PageHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function PageHeader({
  subtitle,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center mb-16 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700",
        className
      )}
    >
      {subtitle && (
        <span className="font-bellagia text-sm tracking-[0.2em] text-primary uppercase">
          {subtitle}
        </span>
      )}
      <h1 className="font-bellagia text-5xl md:text-7xl text-secondary leading-none">
        {title}
      </h1>
      {description && (
        <p className="font-inter text-secondary/60 max-w-2xl text-lg font-light leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
