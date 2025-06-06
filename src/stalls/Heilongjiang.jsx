import React from 'react';
import { useNavigate } from 'react-router-dom';
import HFood from '/src/stalls/heilongjiang_food.jpg';

export default function Heilongjiang() {
  const navigate = useNavigate();
  return (
    <div className="relative arcade-crt">
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white px-4 py-4">
        <h1 className="relative z-10 filter-none backdrop-filter-none text-3xl text-yellow-300 mb-4">🍜 Welcome to Heilongjiang!🍜<br />🍜 欢迎来到黑龙江!🍜 </h1>
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">
          Flavor profiles: Hearty, warming, and comforting <br />
          Signature ingredients: Buckwheat, mushrooms, and game meats <br />
          Climate: Cold winters, short summers <br />
          Native vegetables: Potatoes (土豆), carrots (胡萝卜), turnips (萝卜), cabbage (卷心菜) <br />
        </p>
        <div className="relative z-10 bg-black p-2">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9Or0drDHbMQ?si=R9AKdaVof_d8Z32s" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
        </div>
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">Pictured below is a Heilongjiang dish, 羊肉火锅. I ate this dish in Beijing.</p>
        <img
          width="800"
          height="450"
          src={HFood}
          alt="Lamb hotpot"
          className="w-[500px] z-10 w-64 rounded shadow-lg py-2"
        />
        <p className="relative z-10 filter-none backdrop-filter-none text-white py-2">Heilongjiang, bordering Siberia, faces long, 
          frigid winters. Its cuisine—rich in wheat, stews, and fried foods—was designed to generate warmth and resist 寒气 (cold energy). 
          These heavier, cooked dishes are aligned with warming (温热) dietary principles in traditional Chinese medicine, aimed at strengthening qi and preserving 
          internal heat, vital for survival in northern climates. Not only that, but Heilongjiang is home to the eight great wildernesses, consisting of
          China Snow Town, Siberia Tiger Park, Snow Valley, Fenghuangshan National Geopark, China's Snow Town, Xuexiang National Forest Park, Yabuli Ski Resort, 
          and Yabuli Sun Mountain. Its location also inspired Chinese-Russian fusion dishes like Borscht, smoked sausage, and sourdough. Because of the many minority 
          groups that reside there and the great wildernesses available, HeilongJiang cuisine consists of game like deer, boar, horse, and pheasant. </p>
        <button
          onClick={() => navigate('/?resume=true')}
          className="z-10 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg border-2 border-white transition-all">
          ⬅ Back to Game
        </button>
      </div>
    </div>
  );
}