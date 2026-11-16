import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
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
        <Benefits />
        <Services />
        <Process />
        <Projects />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
