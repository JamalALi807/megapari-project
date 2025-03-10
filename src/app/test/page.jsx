'use client'
import LoginForm from '@/components/LoginForm'
import HoverBonus from '@/components/HoverBonus'
import React, { useState } from 'react'
import LoginModal from '../../components/LoginModal'
import MobileLogin from '@/components/MobileLoginPage'
const page = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      {/* <div className="absolute z-50 top-full left-0 bg-white text-black shadow-lg mt-2 rounded-md p-4 grid grid-cols-3 gap-4">
              <div>
                <p className="hover:text-blue-500 cursor-pointer">Crash</p>
                <p className="hover:text-blue-500 cursor-pointer">Crystal</p>
                <p className="hover:text-blue-500 cursor-pointer">Western Slot</p>
                <p className="hover:text-blue-500 cursor-pointer">21</p>
                <p className="hover:text-blue-500 cursor-pointer">Under and Over 7</p>
              </div>
              <div>
                <p className="hover:text-blue-500 cursor-pointer">Solitaire</p>
                <p className="hover:text-blue-500 cursor-pointer">Vampire Curse</p>
                <p className="hover:text-blue-500 cursor-pointer">Scratch Card</p>
                <p className="hover:text-blue-500 cursor-pointer">Las Vegas</p>
                <p className="hover:text-blue-500 cursor-pointer">Mayan Tomb</p>
              </div>
              <div>
                <p className="hover:text-blue-500 cursor-pointer">Burning Hot</p>
                <p className="hover:text-blue-500 cursor-pointer">Apple Of Fortune</p>
                <p className="hover:text-blue-500 cursor-pointer">Midgard Zombies</p>
                <p className="hover:text-blue-500 cursor-pointer">Spin and Win</p>
                <p className="hover:text-blue-500 cursor-pointer">Gems Odyssey</p>
              </div>
            </div> */}

            {/* <LoginForm/> */}
            {/* <LoginModal onClose={() => setIsLoginModalOpen(false)}/> */}
            {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
            <MobileLogin/>
            <HoverBonus/>
    </div>
  )
}

export default page
