"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ContactSection from "@/components/ContactSection";

const contact = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <Header />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default contact;
