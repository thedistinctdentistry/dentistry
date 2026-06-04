import React from 'react';
import { Link } from 'react-router-dom';
import footerData from '../data/footer.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8 border-t border-secondary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-1">
                <img 
                  src="/logos/logo-black.png" 
                  alt={`${footerData.name} Logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {footerData.name}
              </h2>
            </div>
            <p className="text-secondary-400 mb-6 max-w-md leading-relaxed">
              {footerData.description}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-400">{footerData.contactTitle}</h3>
            <ul className="space-y-4 text-secondary-300">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 text-primary-500 group-hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="leading-relaxed group-hover:text-white transition-colors">{footerData.location}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="text-primary-500 group-hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <a href={`https://api.whatsapp.com/send/?phone=${footerData.whatsapp.replace(/\D/g, '').replace(/^0/, '92')}&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {footerData.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-400">{footerData.quickLinksTitle}</h3>
            <ul className="space-y-3 text-secondary-300">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-500">
          <p>&copy; {currentYear} {footerData.name}. {footerData.rightsReserved}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">{footerData.privacyPolicy}</a>
            <a href="#terms" className="hover:text-white transition-colors">{footerData.termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
