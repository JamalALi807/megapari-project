// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Star, Search, BarChart2, Clock, ChevronRight, Menu, ChevronLeft, Calendar, X } from "lucide-react"

// export default function Crickettwo() {
//   const [isOpen, setIsOpen] = useState(true)

//   const matches = [
//     {
//       id: 1,
//       date: "03/03",
//       time: "13:00",
//       team1: {
//         name: "Barys U20",
//         logo: "/placeholder.svg?height=24&width=24",
//       },
//       team2: {
//         name: "Astana U20",
//         logo: "/placeholder.svg?height=24&width=24",
//       },
//       matchInfo: "221418 / 1XBet Kazakhstan Championship U20 / 3rd period",
//       odds: "1.84",
//       betType: "Handicap 1 (0)",
//     },
//     {
//       id: 2,
//       date: "03/03",
//       time: "13:00",
//       team1: {
//         name: "Lumwana Radiants",
//         logo: "/placeholder.svg?height=24&width=24",
//       },
//       team2: {
//         name: "Green Buffaloes",
//         logo: "/placeholder.svg?height=24&width=24",
//       },
//       matchInfo: "183894 / Zambia. Super League / 2nd half",
//       odds: "1.985",
//       betType: "1X2 X",
//     },
//     {
//       id: 3,
//       date: "03/03",
//       time: "13:00",
//       team1: {
//         name: "Diliman College Blue Dragons",
//         logo: "/placeholder.svg?height=24&width=24",
//       },
//       team2: {
//         name: "ICC Blue Hawks",
//         logo: "/placeholder.svg?height=24&width=24",
//       },
//       matchInfo: "179427 / Philippines. UCAL / 3rd quarter",
//       odds: "1.925",
//       betType: "1X2 W1",
//     },
//   ]

//   const BetSlip = () => {
//     if (!isOpen) return null

//     return (
//       <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
//           {/* Header */}
         

//           {/* Match List */}
//           <div className="divide-y divide-gray-200">
//             {matches.map((match) => (
//               <div key={match.id} className="p-4 hover:bg-gray-50">
//                 <div className="flex items-start justify-between mb-2">
//                   <div className="flex items-center">
//                     <div className="text-sm text-gray-600 mr-3">
//                       <div>{match.date}</div>
//                       <div>{match.time}</div>
//                     </div>
//                     <div>
//                       <div className="flex items-center mb-1">
//                         <Image
//                           src={match.team1.logo || "/placeholder.svg"}
//                           alt={match.team1.name}
//                           width={24}
//                           height={24}
//                           className="mr-2"
//                         />
//                         <span className="text-sm font-medium">{match.team1.name}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Image
//                           src={match.team2.logo || "/placeholder.svg"}
//                           alt={match.team2.name}
//                           width={24}
//                           height={24}
//                           className="mr-2"
//                         />
//                         <span className="text-sm font-medium">{match.team2.name}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">{match.odds}</div>
//                 </div>
//                 <div className="text-xs text-gray-500">{match.matchInfo}</div>
//                 <div className="text-xs text-gray-600 mt-1">{match.betType}</div>
//               </div>
//             ))}
//           </div>

//           {/* Footer */}
          
//         </div>
//       </div>
//     )
//   }


// }

