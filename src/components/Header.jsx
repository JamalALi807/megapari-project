import { Home, ChevronRight, BarChart2, Clock, Search } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <div className="flex space-x-1">
          <a href="#" className="flex items-center text-gray-400 hover:text-white">
            <Home className="h-4 w-4" />
          </a>
          <ChevronRight className="h-4 w-4 text-gray-600" />
          <a href="#" className="flex items-center text-gray-400 hover:text-white">
            <BarChart2 className="h-4 w-4" />
          </a>
          <ChevronRight className="h-4 w-4 text-gray-600" />
          <a href="#" className="flex items-center text-gray-400 hover:text-white">
            <Clock className="h-4 w-4" />
          </a>
        </div>

        <div className="ml-6 flex space-x-4 border-b border-[#3a3c41]">
          <button className="px-4 py-2 text-white border-b-2 border-white">Matches</button>
          <button className="px-4 py-2 text-gray-400 hover:text-white">Recommended</button>
          <button className="px-4 py-2 text-gray-400 hover:text-white">1st period</button>
          <button className="px-4 py-2 text-gray-400 hover:text-white">2nd period</button>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search by match"
          className="bg-[#2a2c31] text-white px-4 py-2 pr-10 rounded-md text-sm w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}

export default Header;
