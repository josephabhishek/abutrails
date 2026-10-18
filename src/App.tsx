import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeaturedTrails from '@/components/FeaturedTrails';
import Experiences from '@/components/Experiences';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  const ref = useReveal<HTMLDivElement>([]);
  return (
    <div ref={ref} className="min-h-screen overflow-x-hidden bg-sand font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeaturedTrails />
        <Experiences />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
