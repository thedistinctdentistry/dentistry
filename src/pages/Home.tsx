import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      <Navbar />
      
      {/* Hero Section (now the Header slider component) */}
      <main className="flex-grow">
        <Header />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
