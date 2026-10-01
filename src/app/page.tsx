import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import Hero from "@/src/components/sections/Hero";
import Services from "@/src/components/sections/Services";
import About from "@/src/components/sections/About";
import Team from "@/src/components/sections/Team";
import Reviews from "@/src/components/sections/Reviews";
import Location from "@/src/components/sections/Location";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
  <Navbar />
  <main>
    <Hero />
    <About />
    <Services />
    <Team />
    <Reviews />
    <Location />
  </main>

  <Footer />

  <FloatingWhatsApp />
</>
  );
}