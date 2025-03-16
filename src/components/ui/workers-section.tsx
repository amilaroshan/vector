"use client";

import { Search, FileText, MessageSquare, BarChart } from "lucide-react";
import { WorkerCard } from "./worker-card";

function WorkersSection() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto text-center px-4">
      <div className="inline-block px-4 py-2 bg-[#F2EEE8] border border-[#EAE6E1] rounded-md mb-12">
            <p className="text-md font-bold">Recruit for Sales</p>
          </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 font-space-grotesk">Hire a digital sales team that outperforms humans.</h2>
          
          <div className="space-y-8 text-left">
            <WorkerCard 
              icon={<Search className="h-5 w-5" />}
              name="Blake, the Prospect Researcher"
              title="Deep market research, done at scale"
              description="Get Blake to research prospects to identify challenges, growth initiatives with sales angles relevant to their unique pain points."
              imageSrc="/blake.svg"
              ctaText="Try it free"
              ctaLink="/try-blake"
              reversed={false}
            />
            
            <WorkerCard 
              icon={<FileText className="h-5 w-5" />}
              name="Luke, the AI SDR"
              title="Personalized and adaptive outreach"
              description="Ditch the email templates, Luke combines deep prospect research with self-improving messaging to craft conversations that convert."
              imageSrc="/luke.svg"
              ctaText="Try it free"
              ctaLink="/try-Luke"
              reversed={true}
            />
            
            <WorkerCard 
              icon={<MessageSquare className="h-5 w-5" />}
              name="Ruby, the Lead Qualifier"
              title="Qualify inbound leads"
              description="Get Ruby to research leads, no matter where they're coming from, and give you advanced insights so you can better prioritize your sales activities."
              imageSrc="/ruby.svg"
              ctaText="Try it free"
              ctaLink="/try-ruby"
              reversed={false}
            />
            
            <WorkerCard 
              icon={<BarChart className="h-5 w-5" />}
              name="Luna, the Lead Generator,"
              title="Find leads across 200+ sources"
              description="Use Luna's 200+ web scrapers to find your perfect leads."
              imageSrc="/luna.svg"
              ctaText="Try it free"
              ctaLink="/try-emma"
              reversed={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { WorkersSection }; 