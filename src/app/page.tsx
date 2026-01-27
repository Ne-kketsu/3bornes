import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
