import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; 

export default function Sichuan() {
  const navigate = useNavigate();
  return (
      <div className="relative arcade-crt">
        <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-white px-4">
        <h1 className="text-3xl text-yellow-300 mb-4">🌶 Welcome to Sichuan!🌶<br />🌶 欢迎来到四川!🌶</h1>
        <p className="mb-4">
          Hot and sour dishes to dispel dampness. Known for their fiery intensity and balance of acid.
        </p>
        <div className="relative z-10 bg-black p-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jQgAEJPW3TE?si=PaKRWDHpPVZL76md&amp;start=193" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>
        </div>
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