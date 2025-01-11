'use client'
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const RightPanel = () => {
  const [activeTab, setActiveTab] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    country: 'India',
    currency: 'Indian rupee (INR)',
    email: '',
    password: '',
    phone: '',
    promoCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [activeSlipTab, setActiveSlipTab] = useState('betslip');
  const [activePlatform, setActivePlatform] = useState('android');
  // const [isOpenedRightPanel ,setisOpenedRightPanel ] =useState('false')
  // const toggleRightPanel = () => {
  //   setIsOpenedRightPanel((prev) => !prev);
  // };
  const [isOpenedRightPanel, setIsOpenedRightPanel] = useState(false);

  const toggleRightPanel = () => {
    setIsOpenedRightPanel((prev) => !prev);
  };

  return (
    <div className={`${isOpenedRightPanel ? 'w-[300px]' : 'w-[60px]'}`}>
    {/* {isOpenedRightPanel?`<div>opened</div>`:'<div><div>closed</div></div>'}
    {isOpenedRightPanel ? (
        <div>opened</div>
      ) : (
        <div>
          <div>closed</div>
        </div>
      )} */}
      <div>
      {/* <button onClick={toggleRightPanel}>
         Close Panel 
      </button> */}

      {isOpenedRightPanel ? (
       <div className='w-[300px]'>
       <div className="  bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-gray-900 w-[300px] rounded-lg shadow-xl">
           {/* Collapse Block */}
           <div onClick={toggleRightPanel} className="flex justify-between items-center p-4 text-white border-b border-gray-700">
             {/* <span onClick={toggleRightPanel} >Collapse block</span> */}
             <button  >
         Close Panel 
      </button>
             <IoMdArrowDropdown />
           </div>
   
           {/* Registration Form */}
           <div className="p-4 space-y-4">
             <div className="space-y-2">
               <h2 className="text-lg font-bold text-white">REGISTRATION</h2>
               <div className="flex space-x-2">
                 <button
                   className={`flex-1 py-1 px-3 text-sm rounded ${
                     activeTab === 'email' 
                       ? 'bg-gray-700 text-white' 
                       : 'bg-transparent text-gray-400'
                   }`}
                   onClick={() => setActiveTab('email')}
                 >
                   By e-mail
                 </button>
                 <button
                   className={`flex-1 py-1 px-3 text-sm rounded ${
                     activeTab === 'phone' 
                       ? 'bg-gray-700 text-white' 
                       : 'bg-transparent text-gray-400'
                   }`}
                   onClick={() => setActiveTab('phone')}
                 >
                   By phone
                 </button>
               </div>
             </div>
   
             {/* Country and Currency Selection */}
             <div className="space-y-2">
               <div className="relative">
                 <select
                   name="country"
                   value={formData.country}
                   onChange={handleInputChange}
                   className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 appearance-none"
                 >
                   <option value="India">India</option>
                 </select>
                 <IoMdArrowDropdown className="absolute right-2 top-1/2 -translate-y-1/2 text-white" />
               </div>
               <div className="relative">
                 <select
                   name="currency"
                   value={formData.currency}
                   onChange={handleInputChange}
                   className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 appearance-none"
                 >
                   <option value="Indian rupee (INR)">Indian rupee (INR)</option>
                 </select>
                 <IoMdArrowDropdown className="absolute right-2 top-1/2 -translate-y-1/2 text-white" />
               </div>
             </div>
   
             {/* Input Fields */}
             <div className="space-y-2">
               <input
                 type="email"
                 name="email"
                 placeholder="Email"
                 value={formData.email}
                 onChange={handleInputChange}
                 className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700"
               />
               <input
                 type="tel"
                 name="phone"
                 placeholder="Phone number (optional)"
                 value={formData.phone}
                 onChange={handleInputChange}
                 className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700"
               />
               <div className="relative">
                 <input
                   type={showPassword ? "text" : "password"}
                   name="password"
                   placeholder="Password"
                   value={formData.password}
                   onChange={handleInputChange}
                   className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700"
                 />
                 <button
                   type="button"
                   onClick={() => setShowPassword(!showPassword)}
                   className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                 >
                   {showPassword ? <FaEyeSlash /> : <FaEye />}
                 </button>
               </div>
               <input
                 type="text"
                 name="promoCode"
                 placeholder="Promo code (if you have one)"
                 value={formData.promoCode}
                 onChange={handleInputChange}
                 className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700"
               />
             </div>
   
             {/* Register Button */}
             <button className="w-full py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition-colors">
               REGISTER
             </button>
   
             {/* Terms and Privacy */}
             <p className="text-xs text-gray-400 text-center">
               By clicking this button you confirm that you have read and agree to the{' '}
               <a href="#" className="text-blue-400 hover:underline">Terms and Conditions</a> and{' '}
               <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> of the company and confirm that you are of legal age
             </p>
   
             {/* Bonus Text */}
             <div className="text-center font-bold text-white bg-gray-800 py-2 rounded">
               100% BONUS ON YOUR 1ST DEPOSIT
             </div>
           </div>
         </div>
       </div>
   
   
       <div className="w-[300px] bg-white shadow-lg">
         {/* Tab Navigation */}
         <div className="flex">
           <button
             onClick={() => setActiveSlipTab('betslip')}
             className={`flex-1 py-3 px-4 text-white text-center transition-colors ${
               activeSlipTab === 'betslip' ? 'bg-red-600' : 'bg-gray-800'
             }`}
           >
             Bet slip
           </button>
           <button
             onClick={() => setActiveSlipTab('mybets')}
             className={`flex-1 py-3 px-4 text-white text-center transition-colors ${
               activeSlipTab === 'mybets' ? 'bg-red-600' : 'bg-gray-800'
             }`}
           >
             My bets
           </button>
         </div>
   
         {/* Your Bets Section */}
         <div className="p-4">
           <div className="flex justify-between items-center mb-4">
             <span className="font-semibold text-gray-800">YOUR BETS</span>
             <IoSettingsOutline className="w-5 h-5 text-gray-600 cursor-pointer" />
           </div>
   
           {/* Bet Slip Content */}
           <div className="bg-gray-100 p-4 rounded-lg">
             <p className="text-gray-600 mb-4 text-center">
               Add events to the bet slip or enter a code to load events
             </p>
             <button className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors">
               REGISTRATION
             </button>
           </div>
   
           <div className="text-center text-gray-600 text-sm mt-4">
             Save/load events
           </div>
         </div>
   
         {/* Mobile Application Section */}
         <div className="bg-gray-800 p-4">
           {/* Platform Tabs */}
           <div className="flex gap-4 mb-4">
             <button
               onClick={() => setActivePlatform('android')}
               className={`flex items-center gap-2 text-white ${
                 activePlatform === 'android' ? 'opacity-100' : 'opacity-60'
               }`}
             >
               <FaAndroid className="w-5 h-5" />
               Android
             </button>
             <button
               onClick={() => setActivePlatform('ios')}
               className={`flex items-center gap-2 text-white ${
                 activePlatform === 'ios' ? 'opacity-100' : 'opacity-60'
               }`}
             >
               <FaApple className="w-5 h-5" />
               iOS
             </button>
             <button className="ml-auto text-white">
               <IoClose className="w-5 h-5" />
             </button>
           </div>
   
           {/* QR Code and Download Section */}
           <div className="flex gap-4">
             {/* QR Code */}
             <div className="w-[60px] h-[60px] bg-white rounded-lg flex items-center justify-center">
               <img 
                 src="/placeholder.svg?height=50&width=50" 
                 alt="QR Code for mobile app download"
                 className="w-[50px] h-[50px]"
               />
             </div>
   
             {/* Download Info */}
             <div className="flex-1">
               <h3 className="text-white font-bold mb-2">
                 MEGA:PARI MOBILE APPLICATION
               </h3>
               <button className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                 Free download
               </button>
             </div>
           </div>
         </div>
       </div>
   
       </div>
      ) : (
        <div className='w-[60px]'>
           <div className="  flex flex-col w-[60px] h-[542px] bg-[#242424] space-y-[10px]">
      {/* Collapse Button */}
      <button 
        className="w-[60px] h-[60px] bg-[#333333] flex items-center justify-center"
        // aria-label="Collapse sidebar"
        onClick={toggleRightPanel}
      >
        <IoIosArrowBack className="w-6 h-6 text-white" />
      </button>

      {/* Registration Button */}
      <button 
        className="w-[60px] h-[120px] bg-[#FF3B30] relative"
        aria-label="Registration"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-white whitespace-nowrap text-sm">
          REGISTRATION
        </span>
      </button>

      {/* Bet Slip Button */}
      <button 
        className="w-[60px] h-[60px] bg-[#555555] relative"
        aria-label="Bet slip"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-white whitespace-nowrap text-sm">
          Bet slip
        </span>
      </button>

      {/* Mobile Button */}
      <button 
        className="w-[60px] h-[60px] bg-[#555555] flex items-center justify-center"
        aria-label="Mobile version"
      >
        <IoPhonePortraitOutline className="w-6 h-6 text-white" />
      </button>
    </div>
        </div>
      )}
    </div>
    


    </div>
  );
};

export default RightPanel;