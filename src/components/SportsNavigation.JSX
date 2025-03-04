import { Menu } from "lucide-react";
import Image from "next/image";

function SportsNavigation() {
  const sports = [
    { name: "Football", icon: "/icons/football.png" },
    { name: "Basketball", icon: "/icons/basketball.png" },
    { name: "Tennis", icon: "/icons/tennis.png" },
    { name: "Ice Hockey", icon: "/icons/ice-hockey.png" },
    { name: "Table Tennis", icon: "/icons/table-tennis.png" },
    { name: "Volleyball", icon: "/icons/ball.png" },
    { name: "Handball", icon: "/icons/volleyball.png" },
    { name: "Esports", icon: "/icons/multiplayer.png" },
    { name: "Horse Racing", icon: "/icons/speed.png" },

  ];
  
  
  

  return (
    <div className="flex bg-white overflow-x-auto space-x-4 mb-6 pb-2 border-b border-[#3a3c41]">
      {sports.map((sport, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:text-gray-600 whitespace-nowrap"
        >
          <Image
            src={sport.icon}
            alt={sport.name}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span>{sport.name}</span>
        </button>
      ))}
      <button
        className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white whitespace-nowrap"
        aria-label="More sports"
      >
        <Menu className="h-5 w-5" />
      </button>
    </div>
  );
}

export default SportsNavigation;
