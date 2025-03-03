'use client';

import React, { useState } from "react";
import Link from "next/link";
import { CiPlane } from "react-icons/ci";
import BonusModal from "./BonusModal";
import Megagames from "./Megagames";

const Navbar2Taiwind = () => {
  const [isMegaGamesOpen, setIsMegaGamesOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-blue-500 p-2">
      <ul className="flex items-center space-x-6 text-white">
        <li>
          <Link className="hover:text-gray-200 cursor-pointer" href="/cricket">CRICKET</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200 cursor-pointer" href="#">LIVE</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200 cursor-pointer" href="#">SPORTS</Link>
        </li>
        <li className="flex items-center space-x-2">
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700"
          >
            🔥 BONUSES
          </span>
        </li>
        {isHovered && <BonusModal />}
        <li>
          <Link className="hover:text-gray-200 cursor-pointer" href="#">LIVE CASINO</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200 cursor-pointer" href="#">CASINO</Link>
        </li>
        <li
          onMouseEnter={() => setIsMegaGamesOpen(true)}
          onMouseLeave={() => setIsMegaGamesOpen(false)}
        >
          <Link className="hover:text-gray-200 cursor-pointer" href="#">MEGAGAMES</Link>
        </li>
        {isMegaGamesOpen && (
          <Megagames
            onMouseEnter={() => setIsMegaGamesOpen(true)}
            onMouseLeave={() => setIsMegaGamesOpen(false)}
          />
        )}
        <li>
          <Link className="hover:text-gray-200 cursor-pointer" href="#">ESPORTS</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200 cursor-pointer" href="#">MORE</Link>
        </li>
        <li className="flex items-center">
          <Link className="hover:text-gray-200 cursor-pointer flex items-center" href="#">
            Crash <CiPlane className="text-[20px] text-white font-bold" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2Taiwind;
