"use client"

import { ChartNoAxesCombined } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      date: "22 March",
      dateFormatted: "22/03",
      time: "19:00",
    
      team1: {
        name: "Kolkata Knight Riders",
        logo: "/kkr.png",
      },
      team2: {
        name: "Royal Challengers Bangalore",
        logo: "/rcb.png",
      },
      odds: {
        team1: 1.924,
        draw: 25,
        team2: 1.924,
        team1Alt: 1.92,
        dash: "-",
        team2Alt: 1.92,
        handicap: "+140",
      },
      isFavorite: false,
    },
    {
      id: 2,
      date: "23 March",
      dateFormatted: "23/03",
      time: "15:00",
      team1: {
        name: "Sunrisers Hyderabad",
        logo: "/srh.png",
      },
      team2: {
        name: "Rajasthan Royals",
        logo: "/rr.png",
      },
      odds: {
        team1: 1.832,
        draw: 25,
        team2: 2.025,
        team1Alt: 1.829,
        dash: "-",
        team2Alt: 2.021,
        handicap: "+50",
      },
      isFavorite: false,
    },
    {
      id: 3,
      date: "23 March",
      dateFormatted: "23/03",
      time: "19:00",
      team1: {
        name: "Chennai Super Kings",
        logo: "/csk.png",
      },
      team2: {
        name: "Mumbai Indians",
        logo: "/mi.png",
      },
      odds: {
        team1: 1.976,
        draw: 25,
        team2: 1.875,
        team1Alt: 1.972,
        dash: "-",
        team2Alt: 1.871,
        handicap: "+50",
      },
      isFavorite: false,
    },
  ])

  const toggleFavorite = (id) => {
    setMatches(matches.map((match) => (match.id === id ? { ...match, isFavorite: !match.isFavorite } : match)))
  }

  const matchesByDate = matches.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = []
    }
    acc[match.date].push(match)
    return acc
  }, {})

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-2 py-4">
        {Object.entries(matchesByDate).map(([date, dateMatches]) => (
          <div key={date} className="mb-3">
            <h2 className="text-base font-semibold text-gray-700 mb-1.5">{date}</h2>
            <div className="bg-white relative rounded-md shadow-sm overflow-hidden">
              {dateMatches.map((match) => (
                <div key={match.id} className="border-b border-gray-200 last:border-b-0">
                  <div className="grid grid-cols-12 items-center">
                    {/* Left section with teams */}
                    <div className="col-span-12 md:col-span-5 p-3 border-r border-gray-200">
                      <div className="flex items-start mb-1">
                        <div className="flex flex-col mr-2">
                          <button className="p-1 text-gray-400 hover:text-gray-600" aria-label="Pin match">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                          </button>
                          <button
                            className={`p-1 ${
                              match.isFavorite ? "text-yellow-400" : "text-gray-400 hover:text-gray-600"
                            }`}
                            onClick={() => toggleFavorite(match.id)}
                            aria-label="Favorite match"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill={match.isFavorite ? "currentColor" : "none"}
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <div className="w-5 h-5 mr-2 relative">
                              <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-700">
                                {match.team1.name.charAt(0)}
                              </div>
                            </div>
                            <span className="font-medium text-sm">{match.team1.name}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="w-5 h-5 mr-2 relative">
                              <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-700">
                                {match.team2.name.charAt(0)}
                              </div>
                            </div>
                            <span className="font-medium text-sm">{match.team2.name}</span>
                          </div>
                          <div className="flex absolute bottom-1 left-2 items-center mt-3 text-xs text-gray-500">
                            <span>
                              {match.dateFormatted} / {match.time}   
                                  
                            </span>
                            <div className="flex ml-3">
                              <button className="p-0.5 text-gray-400 hover:text-gray-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </button>
                              <button className="p-0.5 ml-1 text-gray-400 hover:text-gray-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                  />
                                </svg>
                              </button>
                              <button className="p-0.5 ml-1 text-gray-400 hover:text-gray-600">
                              <ChartNoAxesCombined 
                              size={12}
                              />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right section with odds */}
                    <div className="col-span-12 md:col-span-7">
                      <div className="grid grid-cols-6 text-center">
                        <div className="p-2">
                          <div className="bg-gray-100 py-1.5 px-2 rounded text-sm">{match.odds.team1.toFixed(3)}</div>
                        </div>
                        <div className="p-2">
                          <div className="bg-gray-100 py-1.5 px-2 rounded text-sm">{match.odds.draw}</div>
                        </div>
                        <div className="p-2">
                          <div className="bg-gray-100 py-1.5 px-2 rounded text-sm">{match.odds.team2.toFixed(3)}</div>
                        </div>
                        <div className="p-2">
                          <div className="bg-gray-100 py-1.5 px-2 rounded text-sm">
                            {match.odds.team1Alt.toFixed(3)}
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="bg-gray-100 py-1.5 px-2 rounded text-sm">{match.odds.dash}</div>
                        </div>
                        <div className="p-2 relative">
                          <div className="bg-gray-100 py-1.5 px-2 rounded text-sm">
                            {match.odds.team2Alt.toFixed(3)}
                          </div>
                          <span className="absolute top-0.5 right-2.5 text-green-600 text-xs font-medium">
                            {match.odds.handicap}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown button for mobile */}
                    <div className="col-span-12 md:hidden border-t border-gray-200 p-1">
                      <button className="w-full flex justify-center items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

