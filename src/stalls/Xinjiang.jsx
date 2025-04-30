import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Xinjiang() {
  const navigate = useNavigate();

  return (
    <div className="relative arcade-crt">
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white px-4 py-4">
          <h1 className="relative z-10 filter-none backdrop-filter-none text-3xl font-bold text-yellow-300 mb-4">🍢 Welcome to Xinjiang!🍢<br />🍢 欢迎来到新疆!🍢</h1>
          <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">
            Flavor profiles: Spicy, aromatic, and hearty <br />
            Signature ingredients: Lamb, cumin, and chili peppers <br />
            Climate: Arid and dry, with large temperature variations (freezing nights and hot days) <br />
            Native vegetables: Eggplant (茄子), tomatoes (西红柿), bell peppers (辣椒), pumpkin/squash (南瓜) <br />
          </p>
          <div className="relative z-10 bg-black p-2">
            <video controls className="w-full max-w-xl mx-auto rounded shadow-lg border-2 border-white">
              <source src="/src/stalls/xinjiang.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">The above picture is Krystal eating lamb skewers from a halal restaurant in New World Mall located in Flushing, Queens. <br /> 
          The restaurant is pictured below. </p>
          <div className="relative z-10 bg-black p-2">
            <video controls className="w-full max-w-xl mx-auto rounded shadow-lg border-2 border-white">
              <source src="/src/stalls/Skewers.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">Pictured below is a Xinjiang cold dish, 大盘鸡拌菜, from a restaurant in Johns Creek, GA called Masterpiece.</p>
          <img
            width="850"
            src="/src/stalls/xinjiang_food.png"
            alt="Delicious dish"
            className="w-[500px] z-10 w-64 rounded shadow-lg py-2"
          />
          <p className="relative z-10 filter-none backdrop-filter-none text-white">
          Xinjiang’s arid, high-altitude climate and nomadic culture led to diets heavy in lamb, bread, and spices—warming foods used to combat the internal 寒气 
          (cold) of the environment. The region’s bold, spicy dishes reflect a practical and medicinal need to stoke internal fire (火气) and sustain energy in
           cold, dry conditions, reinforcing the belief that food should counter environmental extremes. Xinjiang's home to the Uyghur people,
           who are traditionally predominantly Muslim, so the region's cuisine is not centered around pork, unlike a majority of Chinese cuisines. 
           Not only that, but dairy based dishes are popular as well, and the moistness of yogurt and dairy counters the dry environment of Xinjiang well.
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
