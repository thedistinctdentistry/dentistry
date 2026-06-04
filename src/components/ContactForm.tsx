import React, { useState } from 'react';
import contactData from '../data/contact.json';

const ContactForm: React.FC = () => {
  const { form, info } = contactData;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: form.services[0],
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `*New Appointment Request* 🦷\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Preferred Date:* ${formData.date}\n*Additional Message:* ${formData.message || 'None'}`;
    
    const encodedMessage = encodeURIComponent(message);
    // Remove any non-numeric characters from the WhatsApp number
    let targetNumber = info.whatsapp.replace(/\D/g, '');
    
    // WhatsApp requires international format. For Pakistan (03xx), replace leading 0 with 92
    if (targetNumber.startsWith('0')) {
      targetNumber = '92' + targetNumber.substring(1);
    }
    
    // Open WhatsApp directly skipping the intermediate page
    window.open(`https://api.whatsapp.com/send/?phone=${targetNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
      <div className="mb-8">
        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">
          {form.badge}
        </span>
        <h3 className="text-3xl font-extrabold text-secondary-900">
          {form.title}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300"
              placeholder="0300 1234567"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Dropdown */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-secondary-700 mb-2">Service Required *</label>
            <select 
              id="service" 
              name="service" 
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 appearance-none"
            >
              {form.services.map((service, idx) => (
                <option key={idx} value={service}>{service}</option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-secondary-700 mb-2">Preferred Date *</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              required 
              value={formData.date}
              onChange={handleChange}
              className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">Additional Message (Optional)</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 resize-none"
            placeholder="Tell us about any specific dental issues or concerns..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Book via WhatsApp</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
