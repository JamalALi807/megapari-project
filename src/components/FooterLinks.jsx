'use client'
import React, { useState } from 'react';

const FooterLinks = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleHeight = () => {
        setIsExpanded(!isExpanded);
      };
  const columns = {
    MAIN: [
      'Live',
      'Sports',
      'Promo Code Store',
      'Special Offers and Bonuses',
      'First Deposit Bonus',
      'Casino',
      'Live Casino',
      'Registration',
      'Bingo',
      'TV Games',
      'Results',
      'Virtual sports',
      { text: 'Hunting and Fishing', isDisabled: true }
    ],
    LIVE: [
      'Football',
      'Basketball',
      'Tennis',
      'Volleyball',
      'Table Tennis'
    ],
    LINE: [
      'Football',
      'Basketball',
      'Tennis',
      'Ice Hockey',
      'Table Tennis'
    ]
  };

  return (
    <div className="w-full bg-gray-800 text-white">
      {/* Header */}
      

      

     
        <div className={`w-full bg-gray-800 text-white transition-all duration-300 ${isExpanded ? 'h-[400px] overflow-y-scroll' : 'h-[40px] overflow-y-hidden'} overflow-x-hidden`}>
        
          <button 
            onClick={toggleHeight}
            className="w-full flex bg-gray-700 text-white py-2 hover:bg-gray-600 transition-colors justify-between"
            
          > 
          <div>
          POPULAR EVENTS AND SPORTS NEWS

          </div>
          <div>

            {isExpanded ? 'Show Less' : 'Show More'}
          </div>
          </button>

           {/* Content Section */}
      <div className="flex">
        {/* Column 1 - MAIN */}
        <div className="flex-1 p-4">
          <h3 className="font-bold mb-4">MAIN</h3>
          <ul className="space-y-2">
            {columns.MAIN.map((item, index) => (
              <li key={index}>
                {typeof item === 'string' ? (
                  <a href="#" className="hover:text-gray-300 block">
                    {item}
                  </a>
                ) : (
                  <a href="#" className="text-white/50 block cursor-not-allowed">
                    {item.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 - LIVE */}
        <div className="flex-1 p-4">
          <h3 className="font-bold mb-4">LIVE</h3>
          <ul className="space-y-2">
            {columns.LIVE.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300 block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - LINE */}
        <div className="flex-1 p-4">
          <h3 className="font-bold mb-4">LINE</h3>
          <ul className="space-y-2">
            {columns.LINE.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300 block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

          </div>

         
      <div className="p-4 font-bold border-b border-gray-700">
       
      </div>

      
    </div>
  );
};

export default FooterLinks;
