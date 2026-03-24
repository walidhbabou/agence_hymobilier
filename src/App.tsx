import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
}
