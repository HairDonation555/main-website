import Navbar from "./components/Navbar";
import Hero from './sections/Hero';
import About from "./sections/About";
import Shorts from "./sections/Shorts";
import Donations from "./sections/Donations";
import Saloons from "./sections/Saloons";
import EventGallery from "./sections/Gallery";

export default function Home() {
  return (
    <div className="body flex flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <Shorts />
      <Donations />
      <Saloons />
      <EventGallery />
    </div>
  );
}
