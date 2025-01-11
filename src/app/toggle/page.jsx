'use client'
import React, { useState } from 'react';

const RightPanelToggle = () => {
  const [isOpenedRightPanel, setIsOpenedRightPanel] = useState(false);

  const toggleRightPanel = () => {
    setIsOpenedRightPanel((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleRightPanel}>
         Close Panel 
      </button>

      {isOpenedRightPanel ? (
        <div>opened</div>
      ) : (
        <div>
          <div>closed</div>
        </div>
      )}
    </div>
  );
};

export default RightPanelToggle;
