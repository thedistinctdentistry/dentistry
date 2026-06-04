import React from 'react';
import homeData from '../data/home.json';

const Testimonials: React.FC = () => {
  const { testimonials } = homeData;

  // Star SVG helper
  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            {testimonials.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary-900 leading-tight">
            {testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg className="w-16 h-16 text-primary-600 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="text-secondary-700 text-lg italic leading-relaxed mb-8 relative z-10">
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                  <p className="text-sm text-secondary-500">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
