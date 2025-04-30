import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Zhejiang() {
  const navigate = useNavigate();

  return (
    <div className="relative arcade-crt">
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white px-4 py-4">
        <h1 className="relative z-10 filter-none backdrop-filter-none text-3xl font-bold text-yellow-300 mb-4">🐟 Welcome to Zhejiang!🐟<br />🐟 欢迎来到浙江!🐟</h1>
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">
          Flavor profiles: Light, fresh, and slightly sweet <br />
          Signature ingredients: Fish, bamboo shoots, and rice <br />
          Climate: Humid subtropical, mild winters <br />
        </p>
        <div className="relative z-10 bg-black p-2">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/seo7rNxWhlg?si=YAxjFuRmHkt4FcgW&amp;start=193" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
        </div>
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">Pictured below is a Zhejiang fish dish, 清蒸鱼, from a restaurant in Johns Creek, GA called Yifan.</p>
        <img
          width="800"
          height="450"
          src="/src/stalls/zhejiang_fish.png"
          alt="Delicious dish"
          className="w-[500px] z-10 w-64 rounded shadow-lg py-2"
        />
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">Zhejiang cuisine developed along the humid southern coast, 
          where dampness and heat were believed to create internal 火气 (excess heat). 
          To balance this, the cuisine emphasizes cooling (寒凉) ingredients like fish, bamboo shoots, and tofu, often prepared with light broths or vinegars. 
          These dishes aligned with traditional Chinese medicine’s goal of dispelling heat and moisture, restoring internal equilibrium.</p>
        <button
          onClick={() => navigate('/?resume=true')}
          className="z-10 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg border-2 border-white transition-all"
        >
          ⬅ Back to Game
        </button>
      </div>
    </div>
  );
}
