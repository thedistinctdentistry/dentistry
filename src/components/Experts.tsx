import React from 'react';
import homeData from '../data/home.json';

const DoctorSilhouette = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-primary-600">
    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14V17M12 17H10M12 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Experts: React.FC = () => {
  const { experts } = homeData;

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            {experts.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary-900 leading-tight">
            {experts.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.items.map((expert) => (
            <div 
              key={expert.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Doctor Avatar Placeholder */}
              <div className="bg-primary-50/50 pt-10 pb-8 flex justify-center border-b border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-32 h-32 bg-white rounded-full shadow-sm flex items-center justify-center border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <DoctorSilhouette />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-grow flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {expert.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {expert.qualifications}
                </p>
                {expert.timings && (
                  <div className="flex items-center gap-2 text-secondary-600 bg-secondary-50 px-4 py-2 rounded-lg mb-6">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">{expert.timings}</span>
                  </div>
                )}

                <div className="w-12 h-1 bg-primary-100 rounded-full mb-6"></div>

                <ul className="text-secondary-600 space-y-4 w-full">
                  {expert.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-left">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
