import { useState } from 'react';
import FoodCourtGame from './FoodCourtGame';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Xinjiang from './stalls/Xinjiang';
import Zhejiang from './stalls/Zhejiang';
import Heilongjiang from './stalls/Heilongjiang';
import Sichuan from './stalls/Sichuan';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter basename="/chinese-game">
      <div className="App">
        <Routes>
          <Route path="/" element={<FoodCourtGame />} />
          <Route path="/stall/zhejiang" element={<Zhejiang />} />
          <Route path="/stall/xinjiang" element={<Xinjiang />} />
          <Route path="/stall/heilongjiang" element={<Heilongjiang />} />
          <Route path="/stall/sichuan" element={<Sichuan />} />
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App
