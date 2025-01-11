// 'use client'
import React, { useState } from "react";

const HoverModal = ({onClose}) => {
//   const [isHovered, setIsHovered] = useState(false);

  return (
    <div
    //   className="relative"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    >
       {/* Hover Target */}
       {/* <button className="px-4 py-2 bg-blue-500 text-white rounded">
    //     Hover Me
    //   </button> */}

       {/* Modal */}
       {/* {isHovered && ( */}
        <div
          className="absolute   top-full transform  mt-2 p-4 bg-gray-500 shadow-lg rounded-lg w-72 text-center z-50"
        >
          <p className="font-bold text-lg">100% first deposit bonus</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            MAKE A DEPOSIT
          </button>
        </div>
       {/* )} */}
     </div>
  );
};

export default HoverModal;
