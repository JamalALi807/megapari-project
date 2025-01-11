'use client'
import React from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa';

const FooterLinks2 = () => {
  const sections = [
    {
      title: 'INFORMATION',
      links: ['About us', 'Careers', 'Contacts', 'Affiliate Program', 'Terms and Conditions']
    },
    {
      title: 'BETTING',
      links: ['Basketball', 'Football', 'Cricket', 'Baseball', 'Ice Hockey', 'Multi-LIVE']
    },
    {
      title: 'GAMES',
      links: ['Crystal', 'Crash', 'Dice']
    },
    {
      title: 'STATISTICS',
      links: ['Statistics', 'Results']
    },
    {
      title: 'USEFUL LINKS',
      links: ['Mobile version', 'Registration', 'Become an agent']
    },
    {
      title: 'APPS',
      links: [
        { text: 'iOS', icon: <FaApple className="w-5 h-5" /> },
        { text: 'Android', icon: <FaAndroid className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-2.5">
              <h2 className="font-bold text-sm mb-2">{section.title}</h2>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {typeof link === 'string' ? (
                      <a 
                        href="#" 
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    ) : (
                      <a 
                        href="#" 
                        className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {link.icon}
                        <span>{link.text}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks2;