import React from "react";
import HomeHeroNew from "@components/Home/HomeHeroNew";
import RecentWorkNew from "@components/Home/RecentWorkNew";
import RecentProjectsNew from "@components/Home/RecentProjectsNew";
import { AnimatedBackground } from "@components/ui/AnimatedBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-deep-bg text-white selection:bg-neon-cyan selection:text-black">
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col gap-20 pb-20">
        <HomeHeroNew />
        <RecentWorkNew />
        <RecentProjectsNew />
      </main>
    </div>
  );
}