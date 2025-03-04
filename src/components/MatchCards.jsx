function MatchCard({ league, team1, team2, date, time, odds }) {
    return (
      <div className="bg-[#2a2c31] w-[400px] md:w-[25%] rounded-md inline-block">
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
              <span className="text-sm text-gray-300">{league}</span>
            </div>
            <button className="text-gray-400 hover:text-blue-400">
              <Star className="h-5 w-5" />
            </button>
          </div>
  
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-4 h-4 ${team1.color} rounded-sm`}></div>
              <span className="text-sm">{team1.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 ${team2.color} rounded-sm`}></div>
              <span className="text-sm">{team2.name}</span>
            </div>
          </div>
  
          <div className="text-xs text-gray-400 mb-3">
            {date} / {time} / Pre-match bets
          </div>
        </div>
  
        <div className="grid grid-cols-6 text-center border-t border-[#3a3c41]">
          <div className="p-2 border-r border-[#3a3c41]">
            <div className="text-xs text-gray-400 mb-1">W1</div>
            <div className="text-sm font-medium">{odds.W1}</div>
          </div>
          <div className="p-2 border-r border-[#3a3c41]">
            <div className="text-xs text-gray-400 mb-1">X</div>
            <div className="text-sm font-medium">{odds.X}</div>
          </div>
          <div className="p-2 border-r border-[#3a3c41]">
            <div className="text-xs text-gray-400 mb-1">W2</div>
            <div className="text-sm font-medium">{odds.W2}</div>
          </div>
          <div className="col-span-3 p-2 text-right">
            <span className="text-blue-400 text-sm">{odds.extra}</span>
          </div>
        </div>
      </div>
    );
  }