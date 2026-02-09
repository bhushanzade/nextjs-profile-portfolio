import React from "react";
import HackerHero from "@components/Home/HackerHero";
import RecentWorkNew from "@components/Home/RecentWorkNew";
import RecentProjectsNew from "@components/Home/RecentProjectsNew";
import TechArsenal from "@components/Home/TechArsenal";
import PackageRegistry from "@components/Home/PackageRegistry";
import SecurityClearance from "@components/Home/SecurityClearance";
import ConnectSection from "@components/Home/ConnectSection";
import { AnimatedBackground } from "@components/ui/AnimatedBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-deep-bg text-white selection:bg-neon-cyan selection:text-black">
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col gap-32 pb-32 px-4 md:px-0">
        <HackerHero />
        <TechArsenal />
        <RecentWorkNew />
        <RecentProjectsNew />
        <PackageRegistry />
        <SecurityClearance />
        <ConnectSection />
      </main>
    </div>
  );
}