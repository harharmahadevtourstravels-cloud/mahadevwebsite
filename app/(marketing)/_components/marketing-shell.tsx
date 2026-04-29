"use client";

import { ReactNode, useState } from "react";
import { AnnouncementBar } from "@/features/home/sections/AnnouncementBar";
import { FloatingWhatsAppButton } from "@/features/home/sections/FloatingWhatsAppButton";
import { Footer } from "@/features/home/sections/Footer";
import { Header } from "@/features/home/sections/Header";

const logo = "/icon0.svg";

type MarketingShellProps = {
  children: ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <AnnouncementBar />
      <Header
        logo={logo}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
      {children}
      <Footer logo={logo} />
      <FloatingWhatsAppButton />
    </div>
  );
}
