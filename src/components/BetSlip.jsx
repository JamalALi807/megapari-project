import { ChevronLeft, ChevronRight, Calendar, X } from "lucide-react";

export default function CricketFooter() {
  return (
    <div className="min-h-screen bg-[#2B2B2B] p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Regular Accumulator Card */}
        <AccumulatorCard
          title="Accumulator Of The Day №1"
          matches={[
            {
              date: "05/03",
              time: "01:00",
              teamA: { name: "Borussia Dortmund", icon: "🟡" },
              teamB: { name: "Lille OSC", icon: "🟣" },
              matchInfo: "223325 / UEFA Champions League",
              odds: "1.31",
              prediction: "Total 2 1.5 Under",
            },
            
            {
              date: "05/03",
              time: "01:00",
              teamA: { name: "PSV Eindhoven", icon: "🔴" },
              teamB: { name: "Arsenal", icon: "🔴" },
              matchInfo: "223273 / UEFA Champions League",
              odds: "1.287",
              prediction: "Double Chance 2X",
            },
            {
              date: "05/03",
              time: "01:00",
              teamA: { name: "PSV Eindhoven", icon: "🔴" },
              teamB: { name: "Arsenal", icon: "🔴" },
              matchInfo: "223273 / UEFA Champions League",
              odds: "1.287",
              prediction: "Double Chance 2X",
            },
            {
              date: "05/03",
              time: "01:00",
              teamA: { name: "PSV Eindhoven", icon: "🔴" },
              teamB: { name: "Arsenal", icon: "🔴" },
              matchInfo: "223273 / UEFA Champions League",
              odds: "1.287",
              prediction: "Double Chance 2X",
            },
          ]}
          bonus="1.1"
          overallOdds="4.493"
        />

        {/* Live Accumulator Card */}
        <AccumulatorCard
          title="Live Accumulator Of The Day №1"
          isLive={true}
          matches={[
            {
              date: "04/03",
              time: "10:40",
              teamA: { name: "Jawahar Union", icon: "🟤" },
              teamB: { name: "Deccan", icon: "🟠" },
              matchInfo: "208078 / India. Bangalore. A Division",
              odds: "1.95",
              prediction: "Total Over 2.5",
            },
            {
              date: "04/03",
              time: "10:40",
              teamA: { name: "Jawahar Union", icon: "🟤" },
              teamB: { name: "Deccan", icon: "🟠" },
              matchInfo: "208078 / India. Bangalore. A Division",
              odds: "1.95",
              prediction: "Total Over 2.5",
            },
      

          ]}
          bonus="1.1"
          overallOdds="7.335"
        />
      </div>
    </div>
  );
}

function AccumulatorCard({ title, isLive, matches, bonus, overallOdds }) {
  return (
    <div className="bg-[#2B2B2B]  shadow-md overflow-hidden">
      <div className="flex items-center justify-between bg-[#474747] text-white p-2">
        
        <h2 className="text-sm font-medium">{title}</h2>
        <div className="flex">
        <div className="flex items-center gap-2">
          <ChevronLeft size={18} />
          <Calendar size={18} />
          <ChevronRight size={18} className="mr-5"/>
        </div>
        <span className="border-l px-3">
        <X size={18} className="font-bold"/>
        </span>
        </div>
      </div>

      <div className="bg-[#F2F2F2] p-2">
        {matches.map((match, index) => (
          <div key={index} className="p-3 py-1 bg-[#ffffff] rounded-md mb-2">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <div className="flex items-center gap-2 ">
                <div className="text-xs text-gray-500 w-14 border-r">
                  <div>{match.date}</div>
                  <div>{match.time}</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{match.teamA.icon}</span>
                    <span className="font-medium text-black text-sm">{match.teamA.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{match.teamB.icon}</span>
                    <span className="font-medium text-black text-sm">{match.teamB.name}</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-black bg-gray-100 h-fit px-5 text-sm py-1  flex items-center justify-center">
                <span className="font-semibold">{match.odds}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-500 items-start sm:items-center">
              <div className="flex items-center space-x-2">
                <span className="inline-block">⚽</span>
                <span>{match.matchInfo}</span>
              </div>
              <div className="mt-1 sm:mt-0 text-right">{match.prediction}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-2 bg-[#F2F2F2] text-black">
        <div className="flex justify-between bg-white p-2 px-4 items-center mb-2 rounded-md">
          <div className="text-xs">BONUS from Megapari</div>
          <div className="font-semibold text-xs">{bonus}</div>
        </div>
        <div className="flex bg-white justify-between p-2 px-4 items-center mb-4 rounmded-md">
          <div className="text-xs">Overall odds</div>
          <div className="font-semibold text-xs">{overallOdds}</div>
        </div>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition-colors">
          ADD TO BET SLIP
        </button>
      </div>
    </div>
  );
}
