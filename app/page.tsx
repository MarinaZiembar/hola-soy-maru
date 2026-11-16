import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <div className="grid-lines" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Process />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
