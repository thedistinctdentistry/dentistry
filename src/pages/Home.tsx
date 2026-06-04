import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeData from '../data/home.json';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section Placeholder to showcase the header properly */}
      <main className="flex-grow">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-50 to-white"></div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-50 z-0"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-secondary-100 rounded-full blur-3xl opacity-50 z-0"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 animate-fade-in-up">
                {homeData.heroBadge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 leading-tight mb-6 tracking-tight">
                {homeData.heroTitleLine1} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  {homeData.heroTitleLine2}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                {homeData.heroDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#services" className="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold shadow-lg shadow-primary-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5">
                  {homeData.primaryButton}
                </a>
                <a href="#about" className="px-8 py-3.5 bg-white border border-secondary-200 hover:border-primary-300 hover:text-primary-600 text-secondary-700 rounded-full font-semibold shadow-sm transition-all hover:shadow hover:-translate-y-0.5">
                  {homeData.secondaryButton}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dummy content to allow scrolling */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="h-64 rounded-2xl bg-secondary-50 border border-secondary-100 flex items-center justify-center text-secondary-400">
              {homeData.dummyContent}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
