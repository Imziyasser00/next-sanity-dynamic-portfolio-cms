import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Testimonials />
    </main>
  );
}
