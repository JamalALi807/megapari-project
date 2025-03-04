import { ChevronDown, Eye, X } from "lucide-react";

export default function Registrationsidebar() {
  return (
    <div className="flex w-[300px] fixed z-50  bg-[#2B2B2B] right-0 top-[105px] flex-col h-full overflow-auto">
      {/* Collapse header */}
      <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
        <span className="text-sm">Collapse block</span>
        <ChevronDown className="w-4 h-4" />
      </div>

      {/* Registration section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-center font-bold text-gray-700 mb-4">
          REGISTRATION
        </h2>

        {/* Registration tabs */}
        <div className="flex mb-4">
          <div className="flex-1 bg-gray-200 text-center py-2 border border-gray-300 flex items-center justify-center">
            <span className="text-xs mr-1">✉️</span>
            <span className="text-xs">By e-mail</span>
          </div>
          <div className="flex-1 bg-white text-center py-2 border border-gray-300 flex items-center justify-center">
            <span className="text-xs mr-1">📱</span>
            <span className="text-xs">By phone</span>
          </div>
        </div>

        {/* Country selector */}
        <div className="mb-3 relative">
          <div className="flex items-center justify-between border border-gray-300 p-2 rounded">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">🇵🇰</span>
              <span className="text-sm">Pakistan</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Currency selector */}
        <div className="mb-3 relative">
          <div className="flex items-center justify-between border border-gray-300 p-2 rounded">
            <span className="text-sm">Pakistani rupee (PKR)</span>
            <div className="flex items-center">
              <span className="mr-1">0</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Form fields */}
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          <input
            type="tel"
            placeholder="Phone number (optional)"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded text-sm pr-8"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Eye className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Promo code (if you have one)"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Register button */}
        <button className="w-full bg-red-500 text-white py-2 mt-4 font-bold">
          REGISTER
        </button>

        {/* Terms text */}
        <p className="text-xs mt-2 text-gray-600">
          By clicking this button you confirm that you have read and agree to
          the <span className="text-blue-500">Terms and Conditions</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span> of the company
          and confirm that you are over 18 years old.
        </p>

        {/* Bonus text */}
        <div className="bg-gray-800 text-white text-center py-2 mt-3 text-sm font-bold">
          100% BONUS ON YOUR 1ST DEPOSIT
        </div>
      </div>

      {/* Bet slip section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between mb-4">
          <button className="text-xs font-bold pb-1 border-b-2 border-gray-800">
            Bet slip
          </button>
          <button className="text-xs text-gray-500">My bets</button>
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold">YOUR BETS</span>
          <button>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mb-4">
          Add events to the bet slip or enter a code to load events
        </p>

        <button className="w-full bg-red-500 text-white py-2 font-bold mb-3">
          REGISTRATION
        </button>

        <div className="border-t border-dashed border-gray-300 pt-3">
          <button className="w-full text-center text-xs text-gray-600">
            Save/load events
          </button>
        </div>
      </div>

      {/* Mobile apps section */}
      <div className="p-4 bg-gray-800 text-white mt-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <span className="mr-2">🤖</span>
            <span className="text-xs">Android</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🍎</span>
            <span className="text-xs">iOS</span>
          </div>
          <X className="w-4 h-4" />
        </div>

        <div className="flex">
          <div className="w-1/2 flex justify-center">
            <div className="bg-white p-1 rounded">
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-800">QR Code</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-bold">MEGA-PARI</div>
              <div className="text-xs">MOBILE</div>
              <div className="text-xs">APPLICATION</div>
              <button className="mt-2 bg-red-500 text-white text-xs py-1 px-3 rounded flex items-center">
                <span className="mr-1">☁️</span>
                <span>Free Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
