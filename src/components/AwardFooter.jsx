'use client'
import React from 'react';
import { FaTelegram, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const awards = [
  { title: 'SIGMA WINNER', year: '2024' },
  { title: 'LCB AWARDS NOMINEE', year: '2024' },
  { title: 'SIGMA NOMINEE', year: '2024' },
  { title: 'IGA AWARDS NOMINEE', year: '2024' },
  { title: 'CASINO GURU NOMINEE', year: '2024' },
  { title: 'EGF NORDICS NOMINEE', year: '2024' },
  { title: 'SIGMA', year: '2023' },
  { title: 'SBC AWARDS NOMINEE', year: '2023' },
  { title: 'BALTIC SCANDINAVIAN NOMINEE', year: '2023' },
  { title: 'AFFPAPA IGAMING AWARDS NOMINEE', year: '2023' }
];

const AwardsFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Awards Section */}
      <div className="py-4">
        <h2 className="px-6 text-xl font-bold mb-4">AWARDS</h2>
        <div className="flex overflow-x-auto px-6 space-x-4 pb-4">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-24 h-24 bg-black rounded-lg flex flex-col items-center justify-center p-2 border border-yellow-500"
            >
              <div className="text-yellow-500 text-xs text-center font-semibold">
                {award.title}
              </div>
              <div className="text-yellow-500 text-xs mt-1">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-gray-800 px-6 py-4">
        <div className="text-sm text-gray-400 mb-2">
          Copyright © 2019 - 2025 «Megapari»
        </div>
        <div className="text-sm text-gray-400 mb-6">
          Megapari uses cookies to ensure the best user experience. By remaining on the website, you consent to the use of your cookie files on Megapari. 
          <a href="#" className="text-blue-400 ml-1 hover:text-blue-300">Find out more</a>
        </div>

        {/* Support and Social Media */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Support Section */}
          <div>
            <h3 className="font-bold mb-2">SUPPORT</h3>
            <div className="text-gray-400">
              <div>+917901659303</div>
              <div>+919403894597</div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTelegram size={24} />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Age Restriction */}
          <div className="text-2xl font-bold">18+</div>

          {/* Mobile Version Button */}
          <button className="bg-[#3DAFF9] px-4 py-2 rounded hover:bg-blue-500 transition-colors">
            MOBILE VERSION
          </button>
        </div>
      </div>
    </footer>
  );
};

export default AwardsFooter;