import React from 'react';

const MatchItem = ({ match }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="border-b pb-2 mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{match.league}</h3>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">{match.team1}</span>
            <span className="text-gray-700">vs</span>
            <span className="text-gray-700">{match.team2}</span>
          </div>
          <div className="text-sm text-gray-500">
            Score: {match.score}
          </div>
        </div>
        
        <div className="flex space-x-2 ml-4">
          {match.odds.map((odd, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium transition-colors"
            >
              <div className="text-xs text-gray-500">{odd.type}</div>
              <div className="text-gray-800">{odd.value}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchItem;
