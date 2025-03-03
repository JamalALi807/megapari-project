'use client'
import { useState } from 'react';
import RegistrationPanel from '@/components/Registration/RegistrationPanel';
import RightPanel from '@/components/RightPanel'

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import FormulaCarousel from "@/components/FormulaCarousel";

import GameDetailPage from '@/components/GameDetail/GameDetailPage';


export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false);
  return (
    <>
    
    <div className="flex">
      <Sidebar />
      <div className='w-full'>
      <FormulaCarousel />
      <GameDetailPage/> 
      <GameDetailPage/> 
      </div>
      <RightPanel/>
      <div>
      {/* <button 
        onClick={() => setShowRegistration(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
         Registration
      </button>

      {showRegistration && (
        <RegistrationPanel onClose={() => setShowRegistration(false)} />
      )} */}
    </div>
    </div>

    
    </>
    
  );

}