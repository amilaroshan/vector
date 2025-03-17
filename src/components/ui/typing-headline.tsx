"use client";

import { TypingEffect } from "./typing-effect";

export function TypingHeadline() {
  return (
    <div className="w-fit whitespace-nowrap text-center py-2 px-2 top-[5.4%] sm:top-[3.8%] md:top-[5.4%] lg:top-[6.4%] xl:top-[7.7%] left-[23%] md:left-[23%] lg:left-[23%] xl:left-[23%] absolute">
      <h1 className="text-[4px] sm:text-[7px] md:text-[10px] lg:text-[13px] xl:text-[16px] font-bold tracking-tight">
        <TypingEffect 
          text="Prospect and reach out to SaaS founders doing $30M+ in revenue" 
          speed={60}
          delay={6000}
          className="inline-block"
        />
      </h1>
    </div>
  );
} 