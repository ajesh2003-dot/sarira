import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Story from './components/Story';
import Recipes from './components/Recipes';
import UsageIdeas from './components/UsageIdeas';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import ShippingReturns from './components/ShippingReturns';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Story />
      <Recipes />
      <UsageIdeas />
      <Blog />
      <Gallery />
      <ShippingReturns />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
