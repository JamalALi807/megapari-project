import Image from "next/image"
import { Star, Search, BarChart2, Clock, ChevronRight, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e2024] text-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top match cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* England FA Cup */}
          <div className="bg-[#2a2c31] rounded-md overflow-hidden">
            <div className="p-4 pb-2">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/"
                    alt="Football"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-sm text-gray-300">England. FA Cup</span>
                </div>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                  <span className="text-sm">Nottingham Forest</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  <span className="text-sm">Ipswich Town</span>
                </div>
              </div>

              <div className="text-xs text-gray-400 mb-3">04/03/2025 / 00:30 / Pre-match bets</div>
            </div>

            <div className="grid grid-cols-6 text-center border-t border-[#3a3c41]">
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W1</div>
                <div className="text-sm font-medium">1.68</div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">X</div>
                <div className="text-sm font-medium">4.15</div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W2</div>
                <div className="text-sm font-medium">5.27</div>
              </div>
              <div className="col-span-3 p-2 text-right">
                <span className="text-blue-400 text-sm">+1374</span>
              </div>
            </div>
          </div>

          {/* Spain La Liga */}
          <div className="bg-[#2a2c31] rounded-md overflow-hidden">
            <div className="p-4 pb-2">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Football"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-sm text-gray-300">Spain. La Liga</span>
                </div>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 bg-yellow-600 rounded-sm"></div>
                  <span className="text-sm">Villareal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  <span className="text-sm">Espanyol</span>
                </div>
              </div>

              <div className="text-xs text-gray-400 mb-3">04/03/2025 / 01:00 / Pre-match bets</div>
            </div>

            <div className="grid grid-cols-6 text-center border-t border-[#3a3c41]">
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W1</div>
                <div className="text-sm font-medium">1.483</div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">X</div>
                <div className="text-sm font-medium">5.04</div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W2</div>
                <div className="text-sm font-medium">7</div>
              </div>
              <div className="col-span-3 p-2 text-right">
                <span className="text-blue-400 text-sm">+1301</span>
              </div>
            </div>
          </div>

          {/* Italy Serie A */}
          <div className="bg-[#2a2c31] rounded-md overflow-hidden">
            <div className="p-4 pb-2">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Football"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-sm text-gray-300">Italy. Serie A</span>
                </div>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                  <span className="text-sm">Juventus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                  <span className="text-sm">Hellas Verona</span>
                </div>
              </div>

              <div className="text-xs text-gray-400 mb-3">04/03/2025 / 00:45 / Pre-match bets</div>
            </div>

            <div className="grid grid-cols-6 text-center border-t border-[#3a3c41]">
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W1</div>
                <div className="text-sm font-medium">1.363</div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">X</div>
                <div className="text-sm font-medium">5.53</div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W2</div>
                <div className="text-sm font-medium">9.9</div>
              </div>
              <div className="col-span-3 p-2 text-right">
                <span className="text-blue-400 text-sm">+1296</span>
              </div>
            </div>
          </div>

          {/* AFC Champions */}
          <div className="bg-[#2a2c31] rounded-md overflow-hidden">
            <div className="p-4 pb-2">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Football"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-sm text-gray-300">AFC Champions</span>
                </div>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
                  <span className="text-sm">Esteghlal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
                  <span className="text-sm">Al Nassr</span>
                </div>
              </div>

              <div className="text-xs text-gray-400 mb-3">03/03/2025 / 2</div>
            </div>

            <div className="grid grid-cols-6 text-center border-t border-[#3a3c41]">
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W1</div>
                <div className="text-sm font-medium">4.365</div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">X</div>
                <div className="text-sm font-medium"></div>
              </div>
              <div className="p-2 border-r border-[#3a3c41]">
                <div className="text-xs text-gray-400 mb-1">W2</div>
                <div className="text-sm font-medium"></div>
              </div>
              <div className="col-span-3 p-2 text-right">
                <span className="text-blue-400 text-sm"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
    

        {/* Sports navigation */}
        <div className="flex overflow-x-auto space-x-4 mb-6 pb-2 border-b border-[#3a3c41]">
          <button className="flex items-center space-x-2 px-4 py-2 text-white border-b-2 border-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Football"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Football</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Basketball"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Basketball</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Tennis"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Tennis</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Ice Hockey"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Ice Hockey</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Table Tennis"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Table Tennis</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Volleyball"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Volleyball</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Handball"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Handball</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Esports"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Esports</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Horse Racing"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>Horse Racing</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="UFC"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>UFC</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="American Football"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>American Football</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* League header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-gray-400" />
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="India"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-white font-medium">Indian Premier League</span>
          </div>

          <div className="grid grid-cols-5 gap-4 text-center">
            <div className="w-20 text-center">1</div>
            <div className="w-20 text-center">X</div>
            <div className="w-20 text-center">2</div>
            <div className="w-20 text-center">1</div>
            <div className="w-20 text-center">2</div>
          </div>
        </div>

        {/* Match day header */}
        <div className="text-gray-400 mb-2">22 March</div>

        {/* Match row */}
        <div className="bg-[#2a2c31] rounded-md mb-4">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <button className="text-gray-400 hover:text-white">
                  <BarChart2 className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Kolkata"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Kolkata Knight Riders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Bangalore"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Royal Challengers Bangalore</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">22/03 / 19:00</div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.924</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">25</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.924</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.92</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.92</div>
            </div>

            <div className="text-blue-400">+146</div>
          </div>
        </div>

        {/* Match day header */}
        <div className="text-gray-400 mb-2">23 March</div>

        {/* Match row */}
        <div className="bg-[#2a2c31] rounded-md mb-4">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <button className="text-gray-400 hover:text-white">
                  <BarChart2 className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Hyderabad"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Sunrisers Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Rajasthan"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Rajasthan Royals</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">23/03 / 15:00</div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.832</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">25</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">2.025</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.829</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">2.021</div>
            </div>

            <div className="text-blue-400">+56</div>
          </div>
        </div>

        {/* Match row */}
        <div className="bg-[#2a2c31] rounded-md mb-4">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <button className="text-gray-400 hover:text-white">
                  <BarChart2 className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Chennai"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Chennai Super Kings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Mumbai"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Mumbai Indians</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">23/03 / 19:00</div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.976</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">25</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.875</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.972</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.871</div>
            </div>

            <div className="text-blue-400">+56</div>
          </div>
        </div>

        {/* Match day header */}
        <div className="text-gray-400 mb-2">24 March</div>

        {/* Match row */}
         <div className="bg-[#2a2c31] rounded-md mb-4">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <button className="text-gray-400 hover:text-white">
                  <BarChart2 className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-400">
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Delhi"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Delhi Capitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Punjab"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="text-white">Punjab Kings</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">24/03 / 19:00</div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.924</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">25</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.924</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.92</div>
              <div className="bg-gray-200 text-black rounded px-4 py-2 w-20">1.92</div>
            </div>

            <div className="text-blue-400">+56</div>
          </div>
        </div> 
      </div>
   
    </div>
  )
}

