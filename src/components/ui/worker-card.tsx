"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";

interface WorkerCardProps {
  icon: React.ReactNode;
  title: string;
  name: string;
  description: string;
  imageSrc: string;
  ctaText?: string;
  ctaLink?: string;
  reversed?: boolean;
}

function WorkerCard({
  icon,
  title,
  name,
  description,
  imageSrc,
  ctaText = "Try it free",
  ctaLink = "#",
  reversed = false
}: WorkerCardProps) {
  return (
    <div className="w-full border border-border/50 rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-sm transition-shadow duration-300">
      {reversed ? (
        <>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-md text-white">
                  {icon}
                </div>
                <p className="font-medium text-gray-700">{name}</p>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-medium mb-5 text-gray-900">{title}</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
            </div>
            
            <Link 
              href={ctaLink} 
              className="inline-flex items-center text-accent font-medium hover:underline"
            >
              {ctaText} <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-md text-white">
                  {icon}
                </div>
                <p className="font-medium text-gray-700">{name}</p>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-medium mb-5 text-gray-900">{title}</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
            </div>
            
            <Link 
              href={ctaLink} 
              className="inline-flex items-center text-accent font-medium hover:underline"
            >
              {ctaText} <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="md:w-1/2 bg-accent h-64 md:h-auto">
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}

export { WorkerCard }; 