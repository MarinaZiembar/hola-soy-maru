import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Faq from "@/components/Faq";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <div className="grid-lines" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <StructuredData />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Process />
        <About />
        {/* <Testimonials />  — oculto hasta tener testimonios reales */}
        <Services />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
