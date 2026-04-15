import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedDishes from "../components/FeaturedDishes";
import Experience from "../components/Experience";
import MenuPreview from "../components/MenuPreview";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ContactReservation from "../components/ContactReservation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <Experience />
      <MenuPreview />
      <Gallery />
      <Testimonials />
      <ContactReservation />
      <Footer />
    </main>
  );
}