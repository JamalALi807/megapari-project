'use client'
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaGamepad, FaGift } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const RegistrationPanel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('email');
  const [formData, setFormData] = useState({
    country: 'India',
    currency: 'Indian rupee (INR)',
    email: '',
    password: '',
    phone: '',
    promoCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
      <div className="bg-white max-w-[1023px] h-[603px] flex flex-row relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-600 hover:text-gray-800 z-10"
        >
          <IoClose size={24} />
        </button>

        {/* Left Sidebar */}
        <div className="w-[300px] bg-[#f0f0f0] text-gray-500 p-4 space-y-4">
          <div className="bg-[#29b6f6] p-4 rounded-lg text-gray-300">
            <h3 className="font-bold">Bonus for sports betting</h3>
            <p className="text-sm">Welcome bonus on your 1st deposit up to 30000 INR</p>
          </div>

          <div className="flex items-center gap-2 p-4 bg-white rounded-lg">
            <FaGamepad size={24} />
            <div>
              <h4 className="font-semibold">Casino + MegaGames</h4>
              <p className="text-sm">Welcome package up to 132698 INR + 150 FS</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-white rounded-lg">
            <FaGift size={24} />
            <div>
              <h4 className="font-semibold">Free Bet</h4>
              <p className="text-sm">Free bet on your first deposit up to 8820 INR</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-white rounded-lg">
            <IoMdClose size={24} />
            <div>
              <h4 className="font-semibold">Reject bonuses</h4>
              <p className="text-sm">Make your selection later</p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-6">REGISTRATION</h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button 
              className={`px-4 py-2 ${activeTab === 'email' ? 'bg-gray-800 text-white' : 'bg-gray-200'} rounded`}
              onClick={() => setActiveTab('email')}
            >
              By e-mail
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'phone' ? 'bg-gray-800 text-white' : 'bg-gray-200'} rounded`}
              onClick={() => setActiveTab('phone')}
            >
              By phone
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'social' ? 'bg-gray-800 text-white' : 'bg-gray-200'} rounded`}
              onClick={() => setActiveTab('social')}
            >
              Social networks and messengers
            </button>
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <select 
                name="country" 
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="India">India</option>
              </select>

              <select 
                name="currency" 
                value={formData.currency}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="Indian rupee (INR)">Indian rupee (INR)</option>
              </select>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number (optional)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              name="promoCode"
              placeholder="Promo code (if you have one)"
              value={formData.promoCode}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />

            <button 
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              REGISTER
            </button>

            <p className="text-sm text-gray-600 text-center">
              By clicking this button you confirm that you have read and agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> of the company and confirm that you are of legal age
            </p>
          </form>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="relative max-w-[1023px] bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900 to-blue-900 text-white p-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">
            GET CASINO FREESPINS SPECIAL FREEBET AND LOTS OF CESS ON YOUR FIRST DEPOSIT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPanel;
