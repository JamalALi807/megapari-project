'use client'
// components/HorizontalSlider.js
import { useState } from 'react';
import { CiMedal } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiHeart } from 'react-icons/hi';
const games = [
  { id: 1, desc:'1st half, 40 minutes / Group stage. Round 1. Group B', league: "Turkish Cup", home: "BB Erzurum", away: "Goztepe", score: "0-1", odds: { W1: 13.1, X: 4.78, W2: 1.296 } },
  { id: 2, desc:'1st half, 40 minutes / Group stage. Round 1. Group B', league: "Premier League", home: "Man City", away: "Arsenal", score: "2-2", odds: { W1: 2.1, X: 3.78, W2: 2.9 } },
  // Add more games here
];

export default function HorizontalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % games.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
        <div className="flex items-center justify-between px-4 h-10 bg-gray-800 text-white">
        <CiMedal className="w-6 h-6" />
        <span className="flex-grow ml-2">Top Games</span>
        <button
        className="flex text-white  rounded-full p-1 focus:outline-none"
        onClick={prevSlide}
      >
        <IoIosArrowBack />
      </button>
      
      <p className='text-white'> {currentIndex + 1} /{games.length}</p>
      <button
        className="flex  rounded-full p-1 focus:outline-none"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
      </div>
      {/* Slides */}
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {games.map((game, index) => (
          <div key={game.id} className="w-full flex-shrink-0 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex">
                <CiMedal className="w-6 h-6" />
             <h3 className="text-sm font-semibold text-gray-800">{game.league}</h3>
             <HiHeart className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-600">{game.desc}</p>
        <div className="flex items-center justify-between my-2">
          <span className="text-sm">BB Erzurum</span>
          <span className="text-sm font-semibold">0</span>
          <span className="text-sm ml-4">Goztepe</span>
          <span className="text-sm font-semibold">1</span>
        </div>
        <p className="text-sm text-gray-600">Detailed score</p>
           
            <p className="text-xs text-gray-500">Half time / Group stage</p>
            <p className="mt-2 font-bold text-gray-700">{game.home} vs {game.away}</p>
            <p className="text-sm text-gray-600">Score: {game.score}</p>
            <div className="flex justify-around mt-2 text-xs">
              <div>W1: {game.odds.W1}</div>
              <div>X: {game.odds.X}</div>
              <div>W2: {game.odds.W2}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      
    </div>
  );
}
