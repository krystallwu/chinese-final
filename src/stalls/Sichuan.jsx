import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; 
import SichuanFood from '/src/stalls/sichuan_food.png';
import SichuanFood2 from '/src/stalls/sichuan_food2.png';

export default function Sichuan() {
  const navigate = useNavigate();
  return (
      <div className="relative arcade-crt">
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white px-4 py-4">
        <h1 className="relative z-10 filter-none backdrop-filter-none text-3xl text-yellow-300 mb-4">🌶 Welcome to Sichuan!🌶<br />🌶 欢迎来到四川!🌶</h1>
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">
          Flavor profiles: Spicy, numbing, and fragrant <br />
          Signature ingredients: Sichuan peppercorn, chili oil, and garlic <br />
          Climate: Humid and hot summers, cold winters <br />
          Native vegetables: Chili peppers (辣椒), garlic (大蒜), green peppercorn leaves (花椒叶), yam (山药) <br />
        </p>
        <div className="relative z-10 bg-black p-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jQgAEJPW3TE?si=PaKRWDHpPVZL76md&amp;start=193" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>
        </div>
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">Pictured below are Sichuan dishes from a restaurant in Brooklyn, NY called Antidote.</p>
        <img
          width="800"
          height="450"
          src={SichuanFood}
          alt="Dish collage"
          className="w-[500px] z-10 w-64 rounded shadow-lg py-2"
        />
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">Pictured below are Sichuan dishes from a restaurant in Atlanta Chinatown food court called Chongqing Hotpot.</p>
        <img
          width="800"
          height="450"
          src={SichuanFood2}
          alt="Dish collage "
          className="w-[500px] z-10 w-64 rounded shadow-lg py-2"
        />
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">
        Sichuan’s hot, humid basin climate led to the dominance of spicy, pungent flavors like chili, peppercorn, and ginger. 
        In traditional Chinese medicine, such spices stimulate sweating and promote internal circulation, helping the body dispel dampness and counteract 寒气 trapped within. 
        Though fiery in flavor, the cuisine was traditionally seen as a way to purge—not provoke—火气, making it both preventive and curative.
        </p>
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