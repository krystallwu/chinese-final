import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import playerImg from './assets/player.png';
import { useLocation } from 'react-router-dom';
const baseStalls = [
  {
    id: 1,
    name: 'Zhejiang Bistro',
    description: 'Bestsellers: Vinegar fish, Dongpo pork'
  },
  {
    id: 2,
    name: 'Xinjiang Cuisine',
    description: 'Bestsellers: Lamb skewers, Nang bread'
  },
  {
    id: 3,
    name: 'Heilongjiang Cuisine',
    description: 'Bestsellers: Guobaorou, Dumplings'
  },
  {
    id: 4,
    name: 'Sichuan Express',
    description: 'Bestsellers: Mapo tofu, Mala hotpot'
  }
];

const stallWidth = 225;

const stallData = baseStalls.map((stall, index) => {
  const key = stall.name.split(' ')[0].toLowerCase();
  return {
  ...stall,
  x: index * (stallWidth),
  y: 0,
  image: `/src/stalls/${key}.jpg`
  };
});

export default function FoodCourtGame() {
  const [started, setStarted] = useState(false); // for start screen
  const [showInstructions, setShowInstructions] = useState(false); // for popup before game
  const [inGame, setInGame] = useState(false); // actual game begins
  const [player, setPlayer] = useState({ x: 400, y: 500 });
  const [activeStall, setActiveStall] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('resume') === 'true') {
      setStarted(true);
      setShowInstructions(false);
      setInGame(true);
    }
  }, [location]);

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter' && activeStall) {
        const path = `/stall/${activeStall.name.split(' ')[0].toLowerCase()}`;
        navigate(path);
      }
    };
  
    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  }, [activeStall, navigate]);
  

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!started) return;
      setPlayer((prev) => {
        const step = 10;
        let newX = prev.x;
        let newY = prev.y;
        if (e.key === 'ArrowUp') newY -= step;
        else if (e.key === 'ArrowDown') newY += step;
        else if (e.key === 'ArrowLeft') newX -= step;
        else if (e.key === 'ArrowRight') newX += step;
        return { x: newX, y: newY };
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [started]);

  useEffect(() => {
    const stallBoxHeight = 215;
    const stallBoxWidth = 170;
    const playerTopY = player.y;
    const playerCenterX = player.x + 20; // Assuming player is 80px wide
  
    const proximityThreshold = 10;
  
    const found = stallData.find(stall => {
      const stallBottomY = stall.y + stallBoxHeight;
      const verticalClose = Math.abs(playerTopY - stallBottomY) < proximityThreshold;
  
      const stallLeftX = stall.x;
      const stallRightX = stall.x + stallBoxWidth;
      const horizontallyWithinStall = playerCenterX >= stallLeftX && playerCenterX <= stallRightX;
  
      return verticalClose && horizontallyWithinStall;
    });
  
    setActiveStall(found || null);
  }, [player]);
  
  
  

  if (!started && !showInstructions && !inGame) {
    return (
        <div className="relative arcade-crt">
        <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl text-yellow-300 mb-8 drop-shadow-md tracking-widest animate-pulse">
            🍜 Food Court Fighter
        </h1>
        <button
            onClick={() => setShowInstructions(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg border-4 border-white transition-all duration-300 text-sm"
        >
            Start Game
        </button>
        </div>
        </div>
    );
  }
  if (showInstructions && !inGame) {
    return (
      <div className="relative arcade-crt">
        <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl text-yellow-300 mb-8 drop-shadow-md tracking-widest animate-pulse">          🎮 How to Play          </h1>
          <ul className="text-sm leading-relaxed mb-10 text-left">
            <li>⬅️ ➡️ ⬆️ ⬇️ — Use arrow keys to move your character</li>
            <li>🗺 Approach different food stalls to see regional specialties</li>
            <li>⏎ Press <kbd className="border px-1">Enter</kbd> to enter a stall</li>
            <li>🥢 Explore traditional flavors and Chinese medicinal ideas</li>
          </ul>
          <button
            onClick={() => {
              setInGame(true);
              setShowInstructions(false);
              setStarted(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg border-4 border-white transition-all duration-300 text-sm">
            Let’s Go!
          </button>
        </div>
      </div>
    );
  }
  if (!inGame) return null; 
  

  return (
    <div className="relative arcade-crt">
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-white px-4">
      {/* Game Box */}
      <div className="relative w-[900px] h-[600px] bg-gray-900 border-4 border-white rounded-lg shadow-lg overflow-hidden">
        {/* Player */}
        <img
          src={playerImg}
          alt="player"
          className="absolute w-20 h-20 object-contain z-20"
          style={{ left: player.x, top: player.y }}
        />
  
        {/* Stalls */}
        {stallData.map(stall => (
          <div
            key={stall.id}
            className="absolute flex flex-col items-center"
            style={{ left: stall.x, top: stall.y }}
          >
            <div className="w-55 h-55 bg-red-600 rounded-sm flex items-center justify-center text-white border-2 border-white shadow text-[10px] text-center">
              {stall.name.split(' ')[0]}
              <img
                src={stall.image}
                alt={stall.name}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
            <div className="mt-1 text-[10px] text-yellow-200 w-16 text-center leading-tight">
              {stall.name.split(' ').slice(1).join(' ')}
            </div>
          </div>
        ))}
        {/* Tables under the stalls */}
        {[
          { x: 125, y: 300 },
          { x: 300, y: 450 },
          { x: 525, y: 300 },
          { x: 725, y: 450 },
        ].map((table, idx) => (
          <div
            key={idx}
            className="absolute w-16 h-16 rounded-full bg-yellow-800 border-4 border-white shadow-md z-0"
            style={{ left: table.x, top: table.y }}
          />
        ))}

        {/* Stall Popup */}
        {activeStall && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white text-black p-4 rounded shadow-lg border-2 border-gray-800 w-80 text-center relative z-20">
              <h2 className="font-bold text-lg mb-2">{activeStall.name}</h2>
              <p>{activeStall.description}</p>
            </div>
          </div>
        )}
      </div>
      {activeStall && (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-yellow-300">
        Press <kbd className="border px-1">Enter</kbd> to enter {activeStall.name}
      </div>
      )}
    </div>
    </div>
  );
  
}
