"use client";

import { Zap, FileText, Target, Database } from "lucide-react";
import Link from "next/link";

interface SmallWorkerCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  link?: string;
}

function SmallWorkerCard({ icon, name, description, link = "#" }: SmallWorkerCardProps) {
  return (
    <Link href={link} className="block h-full">
      <div className="border border-border/50 rounded-lg p-6 h-full hover:shadow-md transition-shadow duration-300 bg-white">
        <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-md text-white mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

function WorkerGrid() {
  const workers = [
    {
      icon: <Zap className="h-5 w-5" />,
      name: "Bill, the Sales Coach",
      description: "Your sales specialist analyzes calls and provides actionable insights.",
      link: "/workers/bill"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      name: "Rex, the New Lead Qualifier",
      description: "Qualifies leads and alerts your team when criteria is met.",
      link: "/workers/rex"
    },
    {
      icon: <Target className="h-5 w-5" />,
      name: "Gary, the ABM",
      description: "Research challenges, create targeted blogs & landing pages.",
      link: "/workers/gary"
    },
    {
      icon: <Database className="h-5 w-5" />,
      name: "Troy, the CRM Enricher",
      description: "Instant CRM contact creation and enrichment.",
      link: "/workers/troy"
    }
  ];

  return (
    <div className="w-full py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 font-space-grotesk">More digital workers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workers.map((worker, index) => (
              <SmallWorkerCard
                key={index}
                icon={worker.icon}
                name={worker.name}
                description={worker.description}
                link={worker.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { WorkerGrid }; 