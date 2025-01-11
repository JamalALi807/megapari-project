'use client'
import React, { useState } from 'react';
import { 
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
  AiOutlineUser,
//   AiOutlineShield
} from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { HiOutlineShieldExclamation } from 'react-icons/hi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { RiShieldCheckLine } from 'react-icons/ri';
import AboutUsSection from '@/components/AboutUs/AboutUsSection';

const HoverSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: <AiOutlineInfoCircle />, text: 'About us' },
    { icon: <AiOutlinePhone />, text: 'Contacts' },
    { icon: <AiOutlineFileText />, text: 'Terms and Conditions' },
    { icon: <AiOutlineQuestionCircle />, text: 'How to place a bet' },
    { icon: <AiOutlineUser />, text: 'Anti-Money Laundering' },
    { icon: <AiOutlineUser />, text: 'KYC Policies' },
    { icon: <IoShieldCheckmarkOutline />, text: 'Dispute resolution' },
    { icon: <RiShieldCheckLine />, text: 'Fairness & RNG Testing Methods' },
    { icon: <HiOutlineShieldExclamation />, text: 'Responsible Gambling' },
    { icon: <BsShieldCheck />, text: 'Privacy Policy' }
  ];

  return (
    <>
    <nav 
      className={`relative left-0 top-0 h-screen bg-[#333333] transition-all duration-300 ease-in-out
        ${isHovered ? 'w-[363px]' : 'w-[60px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="navigation"
      aria-label="Main menu"
    >
      <ul className="flex flex-col w-auto">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              className={`w-full flex items-center px-4 py-2 text-white hover:bg-[#444444] transition-colors
                ${isHovered ? 'justify-start' : 'justify-center'}`}
              role="menuitem"
            >
              <span className="text-xl">{item.icon}</span>
              <span 
                className={`ml-3 whitespace-nowrap transition-opacity duration-300
                  ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
        
    {/* <div className="min-h-screen bg-white">
       <AboutUsSection />

    </div> */}
    </>
  );
};

export default HoverSidebar;
