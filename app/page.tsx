"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <Header />
      <div className="w-11/12 mx-auto">
        <HeroSection />
      </div>
      <FooterSection />
    </main>
  );
}
