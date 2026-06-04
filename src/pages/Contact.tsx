import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import contactData from '../data/contact.json';

const Contact: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { hero, info } = contactData;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary-900">
          <div className="absolute inset-0 z-0">
            <img 
              src={hero.backgroundImage} 
              alt="Contact Us Background" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                {hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-20 -mt-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              
              {/* Form Section */}
              <div className="w-full lg:w-3/5">
                <ContactForm />
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-2/5">
                <div className="bg-secondary-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-white sticky top-32">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary-900/50 text-primary-400 font-bold tracking-widest uppercase text-xs mb-6 border border-primary-500/30">
                    {info.badge}
                  </span>
                  <h3 className="text-3xl font-extrabold mb-6">
                    {info.title}
                  </h3>
                  <p className="text-secondary-400 leading-relaxed mb-10">
                    {info.description}
                  </p>

                  <div className="space-y-8">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center flex-shrink-0 text-primary-400 border border-primary-500/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Our Location</h4>
                        <p className="text-secondary-400 leading-relaxed text-sm">{info.address}</p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center flex-shrink-0 text-[#25D366] border border-[#25D366]/20">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                        <a href={`https://api.whatsapp.com/send/?phone=${info.whatsapp.replace(/\D/g, '').replace(/^0/, '92')}&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors text-sm">
                          {info.whatsapp}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center flex-shrink-0 text-primary-400 border border-primary-500/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Email</h4>
                        <a href={`mailto:${info.email}`} className="text-secondary-400 hover:text-white transition-colors text-sm">
                          {info.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="border-secondary-800 my-8" />

                  {/* Working Hours */}
                  <div>
                    <h4 className="font-bold text-lg mb-4">Operating Hours</h4>
                    <ul className="space-y-3">
                      {info.workingHours.map((schedule, idx) => (
                        <li key={idx} className="flex justify-between items-center text-sm text-secondary-400 border-b border-secondary-800 pb-2 last:border-0 last:pb-0">
                          <span>{schedule.day}</span>
                          <span className="font-semibold text-white">{schedule.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
