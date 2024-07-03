'use client';

import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

function Home() {
  return (
    <main className="relative dark:bg-gray-900 bg-white flex flex-col justify-start items-center min-h-screen">
      <FloatingNav navItems={navItems} />
      <Hero />
      <div className="w-full max-w-7xl">
        
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}

export default Home;