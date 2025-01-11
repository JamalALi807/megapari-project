'use client'
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineBell } from 'react-icons/ai';
import { 
  MdSportsSoccer, 
  MdSportsBasketball, 
  MdSportsTennis, 
  MdSportsVolleyball,
  MdSportsBaseball 
} from 'react-icons/md';
import { PiTableTennisFill } from 'react-icons/pi';
import { BiSolidThumbUp } from 'react-icons/bi';
import { LiaKeySolid } from 'react-icons/lia';
import { CiMedal } from 'react-icons/ci';
import HorizontalSlider from './SidebarHorSlider';
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('LIVE');
  const games = [
    { id: 1, league: "Turkish Cup", home: "BB Erzurum", away: "Goztepe", score: "0-1", odds: { W1: 13.1, X: 4.78, W2: 1.296 } },
    { id: 2, league: "Premier League", home: "Man City", away: "Arsenal", score: "2-2", odds: { W1: 2.1, X: 3.78, W2: 2.9 } },
    // Add more games here
  ];

  return (
    <div className="relative w-[238px] bg-white shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 h-10 bg-gray-800 text-white">
        <LiaKeySolid className="w-6 h-6" />
        <span className="flex-grow ml-2">Recommended</span>
        <IoMdArrowDropdown className="w-6 h-6" />
      </div>

      <div className="flex items-center justify-between px-4 h-10 bg-gray-800 text-white">
        <CiMedal className="w-6 h-6" />
        <span className="flex-grow ml-2">Top Games</span>
        <IoMdArrowDropdown className="w-6 h-6" />
      </div>

      {/* Game Details Section */}

      <div className="p-2 border-b">
        <p className="text-sm text-gray-600">1st half, 40 minutes / Group stage. Round 1. Group B</p>
        <div className="flex items-center justify-between my-2">
          <span className="text-sm">BB Erzurum</span>
          <span className="text-sm font-semibold">0</span>
          <span className="text-sm ml-4">Goztepe</span>
          <span className="text-sm font-semibold">1</span>
        </div>
        <p className="text-sm text-gray-600">Detailed score</p>
      </div>

      <HorizontalSlider />

      {/* Odds Section */}
      <div className="flex justify-between p-2 border-b">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">W1</span>
          <span className="text-sm">12.6</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">X</span>
          <span className="text-sm">4.77</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">W2</span>
          <span className="text-sm">1.3</span>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex text-sm bg-gray-800 text-gray-300">
        <button 
          className={`flex-1 py-2 text-center ${activeTab === 'LIVE' ? 'text-white font-semibold' : ''}`}
          onClick={() => setActiveTab('LIVE')}
        >
          LIVE
        </button>
        <button 
          className={`flex-1 py-2 text-center ${activeTab === 'SPORTS' ? 'text-white font-semibold' : ''}`}
          onClick={() => setActiveTab('SPORTS')}
        >
          SPORTS
        </button>
      </div>

      {/* Category Section */}
      <div className="p-2">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold">ALL 777</span>
          <span className="text-xs text-gray-500">329</span>
          <AiOutlineBell className="w-6 h-6 text-gray-600" />
        </div>

        {/* Category List */}
        <div className="space-y-2">
          {[
            { icon: <MdSportsSoccer />, name: 'Football', count: 38 },
            { icon: <MdSportsBasketball />, name: 'Basketball', count: 39 },
            { icon: <MdSportsTennis />, name: 'Tennis', count: 38 },
            { icon: <MdSportsVolleyball />, name: 'Volleyball', count: 19 },
            // { icon: <PiTableTennisFill />, name: 'Table Tennis', count: 58 },
            { icon: <MdSportsBaseball />, name: 'Baseball', count: 1 },
          ].map((sport, index) => (
            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-xl text-gray-600">{sport.icon}</span>
                <span className="text-sm text-gray-500">{sport.name} ({sport.count})</span>
              </div>
              <IoMdArrowDropdown className="text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;