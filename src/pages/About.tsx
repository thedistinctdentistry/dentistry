import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutData from '../data/about.json';

const About: React.FC = () => {
  // Scroll to top on mount since we are using react-router
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { hero, story, mission } = aboutData;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={hero.backgroundImage} 
              alt="Clinic Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                {hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl leading-relaxed">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary-600 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 -z-10"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={story.image} 
                    alt="Our Clinic" 
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                  {story.badge}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-secondary-900 leading-tight mb-8">
                  {story.title}
                </h2>
                
                <div className="space-y-6 text-lg text-secondary-600 leading-relaxed font-light">
                  {story.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission / Values Section */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                {mission.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 leading-tight">
                {mission.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {mission.items.map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-primary-600">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">{item.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
