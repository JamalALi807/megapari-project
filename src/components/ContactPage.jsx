'use client'
import { useState } from 'react';
import ContactItem from './ContactItem';
import { FaTelegram, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState({});

  const contacts = [
    { label: 'Technical Support', value: 'support@megapari.com' },
    { label: 'Affiliate Program', value: 'partners@megapari.com' },
    { label: 'For queries regarding payment agents', value: 'agentsmegapari@megapari.com' },
    { label: 'CUSTOMER SUPPORT', value: '+917901659303' },
    { label: 'CUSTOMER SUPPORT', value: '+919403894597' },
    { label: 'TelegramChat', value: '@Megapari_Supportk_bot' },
    { label: 'TelegramChannel', value: 'megapari_in' },
    { label: 'YouTube', value: '@megapari_world' },
    { label: 'X', value: 'megapari_in' },
    { label: 'Facebook', value: 'megapariindia' },
    { label: 'Instagram', value: 'megapari__in' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'The field is required.';
    if (!formData.email.trim()) newErrors.email = 'The field is required.';
    if (!formData.message.trim()) newErrors.message = 'The field is required.';
    if (!formData.consent) newErrors.consent = 'Please confirm your consent.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      consent: false
    });
    setErrors({});
  };

  return (
    <div style={{width: 'calc(100% - 120px)'}} className=" bg-white mx-auto py-4 overflow-x-hidden">
      {/* Contacts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contacts</h2>
        <div className="space-y-2 divide-y divide-gray-200">
          {contacts.map((contact, index) => (
            <ContactItem key={index} {...contact} />
          ))}
        </div>
      </section>

      {/* Write to us Section */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-500">Write to us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                aria-label="Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your e-mail"
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                aria-label="Email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              rows="4"
              className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              aria-label="Message"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 mr-2"
              id="consent"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              Please confirm you consent to your personal information being processed and shared with third parties.
            </label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

          <div className="grid grid-cols-2 gap-4">
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              SEND
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              CLEAR
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
