'use client'
import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import { RiGiftLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { HiHeart } from "react-icons/hi";
import RegistrationPanel from '@/components/Registration/RegistrationPanel';
import LoginPanel from '@/components/LoginForm'
import BonusNav1 from '@/components/HoverBonus'
const Navbar1Taiwind = () => {

    const [isMegaGamesOpen, setIsMegaGamesOpen] = useState(false);
    // const [isMegaGamesOpen, setIsMegaGamesOpen] = useState(true);
    const [showRegistration, setShowRegistration] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showBonus, setShowBonus] = useState(false);


  return (
    <nav className="bg-gray-500 p-3 flex justify-between fixed top-0 w-full z-50">
      <ul className="flex items-center space-x-6 text-white">
        <li className="hover:text-gray-200 cursor-pointer h-[35px] flex"> <p className="text-2xl pr-1 font-bold ">PARI</p> <img className="h-[35px]" src="logo.svg" alt="logo" /> </li>
        <li className="hover:text-gray-200 cursor-pointer h-[35px] flex">   <img className="h-[35px]" src="esport.svg" alt="logo" /> </li>
        <li className="hover:text-gray-200 cursor-pointer h-[35px] flex">   <img className="h-[35px]" src="icc.svg" alt="logo" /> </li>
 
       
      </ul>
      <ul  className="flex items-center  text-white">
      <li className="hover:text-gray-200 mr-3 bg-gray-400 rounded-sm p-1 cursor-pointer  "><MdOutlineCurrencyBitcoin className="h-[20px]" /> </li>

      <li className="hover:text-gray-200 mr-3 bg-red-600 rounded-sm p-2 h-[35px] cursor-pointer text-sm">VIP</li>
      <li className="hover:text-gray-200 mr-3 bg-gray-400 rounded-sm p-1 cursor-pointer  "><HiHeart className="h-[20px]" /> </li>
      <li onClick={() => setShowBonus(true)} className="hover:text-gray-200 mr-4 bg-gray-400 rounded-sm p-1 cursor-pointer  "><RiGiftLine className="h-[20px]" /> </li>
      {showBonus && (
        <BonusNav1 onClose={() => setShowBonus(false)} />
      // <li onClick={() => setShowBonus(false)} className="hover:text-gray-200 mr-3 bg-gray-400 rounded-sm p-1 cursor-pointer  "><HiHeart className="h-[20px]" /> </li>

      )}

      <li onClick={() => setShowRegistration(true)} className="hover:text-gray-200 mr-4 bg-red-600 rounded-sm p-2 h-[35px] cursor-pointer">REGISTRATION</li>
      {showRegistration && (
        <RegistrationPanel onClose={() => setShowRegistration(false)} />
      )}
      <li onClick={() => setShowLogin(true)} className="hover:text-gray-200 mr-4 bg-red-600 rounded-sm p-2 h-[35px] cursor-pointer">LOGIN</li>
      {showLogin && (
        <LoginPanel onClose={() => setShowLogin(false)} />
      )}

        <li className="hover:text-gray-200 cursor-pointer h-[35px] relative"><CiSettings className="text-[35px] hover:rotate-180 transition-transform duration-300 pt-1 " />
         {/* <img className=" h-[20px] absolute top-0 left-0" src="cap.svg" alt="logo" /> */}
         </li>
         
      </ul>
    </nav>
  );
};

export default Navbar1Taiwind;
