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
import Reviews from "./sections/Reviews";
import Feedback from "./components/Feedback";
import EventsGallery from "./sections/EventsGallery";
import WhatsAppBubble from "./components/WhatsAppBubble";

export default function Home() {
  return (
    <div className="body flex flex-col w-full">
      <Navbar />
      <WhatsAppBubble phoneNumber="917330931729" />
      <Hero />
      <About />
      <Shorts />
      <Donations />
      <EventGallery />
      <EventsGallery />
      <Saloons />
      <Process />
      <Locations />
      <Reviews />
      <Feedback />
      <ContactSection />
      <Footer />
    </div>
  );
}
