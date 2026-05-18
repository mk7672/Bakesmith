import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCakes from "../components/FeaturedCakes";
import GalleryPreview from "../components/GalleryPreview";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCakes />
      <GalleryPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;