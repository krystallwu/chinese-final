import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Zhejiang() {
  const navigate = useNavigate();

  return (
    <div className="relative arcade-crt">
      <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-white px-4">
        <h1 className="text-3xl font-bold text-yellow-300 mb-4">🐟 Welcome to Zhejiang!🐟<br />🐟 欢迎来到浙江!🐟</h1>
        <p className="mb-6 text-sm max-w-lg text-center">
          Seafood-heavy cuisine designed to cool the body in humid coastal weather.
        </p>
        <video controls className="w-full max-w-xl mx-auto rounded shadow-lg border-2 border-white">
          <source src="/videos/northern.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() => navigate('/?resume=true')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg border-2 border-white transition-all"
        >
          ⬅ Back to Game
        </button>
      </div>
    </div>
  );
}
