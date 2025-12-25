import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Digitals from '@/components/Digitals';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Marcus Vale | Men's Fashion & Commercial Model | London</title>
        <meta 
          name="description" 
          content="Marcus Vale is a London-based men's fashion and commercial model. View portfolio, digitals, and book for editorial, runway, and campaign work." 
        />
        <meta name="keywords" content="male model, fashion model, commercial model, London model, editorial, runway, Marcus Vale" />
        <meta property="og:title" content="Marcus Vale | Men's Fashion Model" />
        <meta property="og:description" content="London-based men's fashion and commercial model available for bookings worldwide." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://marcusvale.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Digitals />
        <Portfolio />
        <About />
        <Stats />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
