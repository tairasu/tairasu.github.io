'use client';

import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

function Home() {
  return (

      <main className="relative dark:bg-gray-900 bg-white flex justify-center items-center flex-col mx-auto px-10 lg:px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
          <RecentProjects />
          <Footer />
        </div>
      </main>

  );
}

export default Home;