import { Hero } from "@/components/sections/Hero";
import { HeroStats } from "@/components/sections/HeroStats";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Architecture } from "@/components/sections/Architecture";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <div className="pb-16 pt-4 lg:pb-20">
        <HeroStats />
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Architecture />
      <Education />
      <Contact />
    </main>
  );
}
