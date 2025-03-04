'use client'
import { useState } from "react";
import Header from "../../components/Header";
import SportsNavigation from "../../components/SportsNavigation";
import Image from "next/image";
import MatchRow from "../../components/MatchRow";
import { BarChart2Icon } from "lucide-react";
import CricketFooter from "../../components/BetSlip";
import MatchRow1 from "../../components/MatchRow";
export default function Crickettwo() {
    const [isOpen, setIsOpen] = useState(true);
  

  
    return (
      <div className="min-h-screen w-full bg-[#1e2024] text-white">
        <div className="w-full px-4 py-4">
          <Header />
          <SportsNavigation />
  
          {/* League header */}
          <div className="flex  items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart2Icon className="h-5 w-5 text-gray-400" />
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="India"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-white font-medium">Indian Premier League</span>
            </div>
  
            <div className="grid grid-cols-5 gap-4  text-center">
              <div className="w-20 text-center">1</div>
              <div className="w-20 text-center">X</div>
              <div className="w-20 text-center">2</div>
              <div className="w-20 text-center">1</div>
              <div className="w-20 text-center">2</div>
            </div>
          </div>
  
          {/* Match day header */}
          <div className="text-gray-400 mb-2">22 March</div>
  
      <MatchRow1/>
        </div>
  
        <CricketFooter/>
      </div>
    );
  }