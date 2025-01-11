'use client';

import React, { useState } from 'react';
import { 
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { HiOutlineShieldExclamation } from 'react-icons/hi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { RiShieldCheckLine } from 'react-icons/ri';

const HoverSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (text) => {
    setActiveTab(text);
  };

  const menuItems = [
    { icon: <AiOutlineInfoCircle />, text: 'About us', href: '/en/information/about' },
    { icon: <AiOutlinePhone />, text: 'Contacts', href: '/en/information/contacts' },
    { icon: <AiOutlineFileText />, text: 'Terms and Conditions', href: '/en/information/terms-and-conditions' },
    { icon: <AiOutlineQuestionCircle />, text: 'How to place a bet', href: '/en/information/how-to-bet' },
    { icon: <AiOutlineUser />, text: 'Anti-Money Laundering', href: '/en/information/aml' },
    { icon: <AiOutlineUser />, text: 'KYC Policies', href: '/en/information/kyc-policies' },
    { icon: <IoShieldCheckmarkOutline />, text: 'Dispute resolution', href: '/en/information/dispute-resolution' },
    { icon: <RiShieldCheckLine />, text: 'Fairness & RNG Testing Methods', href: '/en/information/fairness-testing' },
    { icon: <HiOutlineShieldExclamation />, text: 'Responsible Gambling', href: '/en/information/responsible-gambling' },
    { icon: <BsShieldCheck />, text: 'Privacy Policy', href: '/en/information/privacy-policy' }
  ];

  return (
    <nav 
      className={`absolute left-0 top-0 h-screen bg-[#333333] transition-all duration-300 ease-in-out
        ${isHovered ? 'w-[363px]' : 'w-[60px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="navigation"
      aria-label="Main menu"
    >
      <ul className="flex flex-col w-full">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={() => handleClick(item.text)}
              className={`w-full flex items-center px-4 py-2 text-white hover:bg-[444444] transition-colors
                ${isHovered ? 'justify-start' : 'justify-center'}
                ${activeTab === item.text ? 'bg-[555555]' : ''}`}
              role="menuitem"
            >
              <span className="text-xl">{item.icon}</span>
              <span 
                className={`ml-3 whitespace-nowrap transition-opacity duration-300
                  ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                {item.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HoverSidebar;
