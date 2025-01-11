import React from 'react'

const Megagames = () => {
  return (
    <>
     <div
            onMouseEnter={() => setIsMegaGamesOpen(true)}
             onMouseLeave={() => setIsMegaGamesOpen(false)}
             className="absolute z-50 top-[100px] left-1/2 transform -translate-x-1/2 bg-white w-[500px]
             text-black shadow-lg mt-2 rounded-md p-4 ">
            <div className="grid grid-cols-3 gap-4">
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

            </div>

            <button className="w-full mt-2 bg-gray-200 text-black py-2 rounded">
            SHOW ALL
          </button>
            </div>
    </>
  )
}

export default Megagames