'use client'
import React, { useState } from 'react';
import { FaFire, FaDollarSign, FaGift, FaFootballBall } from 'react-icons/fa';
import { LuCherry } from 'react-icons/lu';

const BonusModal = () => {
  

  return (
    <div className="absolute z-50 top-[60px] left-0 transform  bg-gray-500 shadow-lg ">
       

      
        <div
          className="absolute top-12 left-0 w-[458px] bg-white shadow-md rounded p-4 h-[300px]"
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
           className="grid grid-cols-2 gap-2"> 
            <div className="flex items-center bg-gray-800 text-white p-2 rounded">
              <span className="bg-red-500 text-xs px-1 rounded mr-2">NEW</span>
              <span className="flex-1">First Deposit</span>
              <FaFire className="text-xl" />
            </div>
            <div className="flex items-center bg-gray-800 text-white p-2 rounded">
              <span className="bg-red-500 text-xs px-1 rounded mr-2">NEW</span>
              <span className="flex-1">Casino Cashback</span>
              <FaDollarSign className="text-xl" />
            </div>
            <div className="flex items-center bg-gray-800 text-white p-2 rounded">
              <span className="bg-red-500 text-xs px-1 rounded mr-2">NEW</span>
              <span className="flex-1">Welcome Pack</span>
              <LuCherry className="text-xl" />
            </div>
            <div className="flex items-center bg-gray-800 text-white p-2 rounded">
              <span className="flex-1">Free bet on your first deposit</span>
              <FaGift className="text-xl" />
            </div>
            <div className="flex items-center bg-gray-800 text-white p-2 rounded">
              <span className="flex-1">Sports Cashback</span>
              <FaDollarSign className="text-xl" />
            </div>
            <div className="flex items-center bg-gray-800 text-white p-2 rounded">
              <span className="flex-1">100% Saturday Football Bonus</span>
              <FaFootballBall className="text-xl" />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <span className="text-black">Special Offers and Bonuses</span>
            <span className="text-black">Promo Code Store</span>
          </div>

          <button className="w-full mt-2 bg-gray-200 text-black py-2 rounded">
            SHOW ALL
          </button>
        </div>
    </div>
  );
};

export default BonusModal;
