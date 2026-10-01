import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import Benefits from "@/src/components/sections/Benefits";
import Services from "@/src/components/sections/Services";
import Process from "@/src/components/sections/Process";
import Testimonials from "@/src/components/sections/Testimonials";
import FAQ from "@/src/components/sections/FAQ";
import CTA from "@/src/components/sections/CTA";
import Footer from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}