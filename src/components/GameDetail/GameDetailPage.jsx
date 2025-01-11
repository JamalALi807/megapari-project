'use client'
import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { CiTrophy } from 'react-icons/ci';
import { 
  MdSportsSoccer, 
  MdSportsBasketball, 
  MdSportsTennis, 
  MdSportsVolleyball,
  MdSportsHockey 
} from 'react-icons/md';
import { FaTableTennis, FaBadminton } from 'react-icons/fa';
import { SiMortalKombat, SiSpringboot } from 'react-icons/si';
import MatchItem from './MatchItem';

const GameDetailPage = () => {
  const [liveStreamsOnly, setLiveStreamsOnly] = useState(false);

  const matches = [
    {
      league: "Bangladesh Premier League",
      team1: "Dhaka Capitals",
      team2: "Chittagong Kings",
      score: "130/4 (16.3)",
      odds: [
        { value: "2.31", type: "1" },
        { value: "25", type: "X" },
        { value: "1.62", type: "2" },
        { value: "2.3", type: "1" },
        { value: "1.616", type: "Team Wins" }
      ]
    },
    {
      league: "Bharuch Karjan Premier League",
      team1: "Bhikha Blasters Mankan",
      team2: "Lal Bazar Valan",
      score: "7/1 (1.4)",
      odds: [
        { value: "1.744", type: "1" },
        { value: "25", type: "X" },
        { value: "1.97", type: "2" },
        { value: "1.725", type: "1" },
        { value: "1.945", type: "Team Wins" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-gray-800 text-white p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IoHomeOutline className="w-6 h-6" />
            <CiTrophy className="w-6 h-6" />
            <span>Matches</span>
            <span>Recommended</span>
            <span>Upcoming events</span>
            <span>1st period</span>
            <span>2nd period</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by match"
              className="px-4 py-1 rounded bg-gray-700 text-white"
            />
          </div>
        </div>
      </nav>

      {/* Sports Filter Bar */}
      <div className="bg-gray-700 text-white p-2">
        <div className="container mx-auto flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={liveStreamsOnly}
              onChange={(e) => setLiveStreamsOnly(e.target.checked)}
              className="form-checkbox"
            />
            <span>With live streams</span>
          </label>
          <div className="flex items-center space-x-6">
            <MdSportsSoccer className="w-6 h-6" />
            <MdSportsBasketball className="w-6 h-6" />
            <MdSportsTennis className="w-6 h-6" />
            <MdSportsVolleyball className="w-6 h-6" />
            <FaTableTennis className="w-6 h-6" />
            <FaTableTennis className="w-6 h-6" />
            <MdSportsHockey className="w-6 h-6" />
            <MdSportsTennis className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Match Listings */}
      <div className="container mx-auto py-4">
        <div className="space-y-4">
          {matches.map((match, index) => (
            <MatchItem key={index} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
