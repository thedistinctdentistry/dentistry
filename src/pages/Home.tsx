import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeaturesTeaser from '../components/FeaturesTeaser';
import Experts from '../components/Experts';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <Header />
        <FeaturesTeaser />
        <Experts />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
