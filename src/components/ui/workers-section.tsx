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
              name="Alex, the Content Specialist"
              title="Content creation and optimization"
              description="Alex creates and optimizes content for your marketing campaigns, blog posts, and social media, tailored to your brand voice and target audience."
              imageSrc="/luke.svg"
              ctaText="Try it free"
              ctaLink="/try-alex"
              reversed={true}
            />
            
            <WorkerCard 
              icon={<MessageSquare className="h-5 w-5" />}
              name="Sam, the Customer Support Agent"
              title="24/7 customer support automation"
              description="Sam handles customer inquiries, troubleshoots common issues, and escalates complex problems to your human team when necessary."
              imageSrc="/ruby.svg"
              ctaText="Try it free"
              ctaLink="/try-sam"
              reversed={false}
            />
            
            <WorkerCard 
              icon={<BarChart className="h-5 w-5" />}
              name="Emma, the Data Analyst"
              title="Actionable insights from your data"
              description="Emma analyzes your business data to uncover trends, identify opportunities, and provide actionable recommendations to drive growth and efficiency."
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