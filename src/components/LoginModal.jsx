'use client'
import { IoClose } from 'react-icons/io5';
import { IoInformationCircle } from 'react-icons/io5';

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[370px] p-4 relative">
        {/* Header Section */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <IoInformationCircle className="w-10 h-10 text-gray-300" />
          </div>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h2 className="text-center text-blue-500 font-medium text-lg">
            LOG IN TO YOUR ACCOUNT
          </h2>
          <p className="text-center text-gray-600">
            To play the game you need to log in or register
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-4 space-y-2">
          <button 
            className="w-full h-10 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors"
          >
            LOG IN
          </button>
          <button 
            className="w-full h-10 bg-gray-600 text-white font-bold rounded hover:bg-gray-700 transition-colors"
          >
            REGISTRATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
