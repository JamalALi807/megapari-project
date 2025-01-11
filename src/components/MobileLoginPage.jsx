'use client'
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaUsers } from 'react-icons/fa';

const MobileLoginPage = () => {
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full flex justify-center items-center bg-white min-h-[calc(100vh-120px)]">
    <div className="flex flex-col   p-4 max-w-[800px] h-[400px] space-y-3 bg-white shadow-md m-4 ">
      {/* Header Section */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-white">
          <FaEnvelope className="text-black" size={24} />
        </div>
        <span className="text-black">By e-mail</span>
        <div className="flex items-center justify-center w-10 h-10 bg-white">
          <FaPhone className="text-black" size={24} />
        </div>
        <span className="text-black">By phone</span>
        <div className="flex items-center justify-center w-10 h-10 bg-white">
          <FaUsers className="text-black" size={24} />
        </div>
        <span className="text-black">Social networks</span>
      </div>

      {/* Input Fields Section */}
      <div className="flex flex-col space-y-2">
        <label className="text-black">E-mail or ID*</label>
        <input
          type="text"
          value={emailOrId}
          onChange={(e) => setEmailOrId(e.target.value)}
          className="w-full h-10 px-2 border border-gray-300 rounded"
          placeholder="E-mail or ID"
        />
        <label className="text-black">Password*</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-10 px-2 border border-gray-300 rounded"
          placeholder="Password"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-5 h-5 border border-gray-300 rounded"
          />
          <span className="text-black ml-2">Remember me</span>
        </div>
      </div>

      {/* Login Button */}
      <button className="w-full h-10 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors">
        LOG IN
      </button>

      {/* Footer Links */}
      <div className="flex flex-col items-center space-y-1">
        <a href="#" className="text-blue-600 hover:underline">
          Forgot your password?
        </a>
        <span className="text-blue-600 hover:underline">
          Don't have an account? Register
        </span>
      </div>
    </div>

    </div>
  );
};

export default MobileLoginPage;
