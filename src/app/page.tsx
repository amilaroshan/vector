"use client";
import Image from "next/image";
import { Hero } from "@/components/ui/animated-hero";
import { Header } from "@/components/ui/header";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { ValueProposition } from "@/components/ui/value-proposition";
import { WorkersSection } from "@/components/ui/workers-section";
import { WorkerGrid } from "@/components/ui/worker-grid";
import { ShowcaseImage } from "@/components/ui/showcase-image";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="pt-16">
      <Header />
      <Hero />
      <ValueProposition />
      {/* <LogoCloud /> */}
      <WorkersSection />
      <WorkerGrid />
      
      <Footer />
    </main>
  );
}
