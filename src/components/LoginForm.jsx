'use client'
import { useState } from 'react';
import { 
  FaGoogle, 
  FaTelegram, 
  FaTwitch, 
  FaTwitter, 
  FaGithub 
} from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const LoginForm = ({onClose}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="absolute text-black z-30 top-[60px] w-[300px] p-4 bg-white rounded-lg shadow-lg space-y-3">
       <button 
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-600 hover:text-gray-800 z-10"
        >
          <IoClose size={24} />
        </button>
      {/* Input Fields */}
      <div className="space-y-2">
        <div className="relative">
          <input
            type="text"
            placeholder="E-mail or ID"
            className="w-full h-10 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            aria-label="Email or ID"
          />
          <MdKeyboardArrowDown className="absolute right-3 top-3 text-gray-400" />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full h-10 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            aria-label="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </button>
        </div>
      </div>

      {/* Options and Actions */}
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-5 h-5 border border-gray-300 rounded"
          />
          <span className="text-sm">Remember</span>
        </label>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot your password?
        </a>
      </div>

      {/* Login Button */}
      <button className="w-full h-10 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors">
        LOG IN
      </button>

      {/* Social Login Options */}
      <div className="space-y-2">
        <p className="text-sm text-center text-gray-600">
          You can log in to your account via:
        </p>
        <div className="flex justify-center space-x-2">
          <button aria-label="Login with Google" className="p-2 hover:bg-gray-100 rounded-full">
            <FaGoogle className="w-6 h-6 text-gray-600" />
          </button>
          <button aria-label="Login with Telegram" className="p-2 hover:bg-gray-100 rounded-full">
            <FaTelegram className="w-6 h-6 text-gray-600" />
          </button>
          <button aria-label="Login with Twitch" className="p-2 hover:bg-gray-100 rounded-full">
            <FaTwitch className="w-6 h-6 text-gray-600" />
          </button>
          <button aria-label="Login with Twitter" className="p-2 hover:bg-gray-100 rounded-full">
            <FaTwitter className="w-6 h-6 text-gray-600" />
          </button>
          <button aria-label="Login with GitHub" className="p-2 hover:bg-gray-100 rounded-full">
            <FaGithub className="w-6 h-6 text-gray-600" />
          </button>
          <button aria-label="Login with LINE" className="p-2 hover:bg-gray-100 rounded-full">
            <SiLine className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
