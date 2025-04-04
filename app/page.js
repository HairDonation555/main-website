import Navbar from "./components/Navbar";
import Hero from './sections/Hero';
import About from "./sections/About";
import Shorts from "./sections/Shorts";
import Donations from "./sections/Donations";
import Saloons from "./sections/Saloons";
import EventGallery from "./sections/Gallery";
import Process from "./sections/Process";
import Locations from "./sections/Locations";
import Footer from "./sections/Footer";
import ContactSection from "./sections/Touch";

export default function Home() {
  return (
    <div className="body flex flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <Shorts />
      <Donations />
      <EventGallery />
      <Process />
      <Saloons />
      <Locations />
      <ContactSection />
      <Footer />
    </div>
  );
}
