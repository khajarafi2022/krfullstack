import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import CarouselPage from './Components/CarouselPage';
import Trailers2024 from './Components/Trailers2024';
import Trailers2023 from './Components/Trailers2023';

import Electronics from './Components/Electronics';
import Electronics1 from './Components/Electronics1';
import Footer from './Components/Footer';
import MiniTv from './Components/MiniTv';
import Notfound from './Components/Notfound';
import Servlets from './Components/Servlets';
import Hibernate from './Components/Hibernate';
import Jpa from './Components/Jpa';
import Spring from './Components/Spring';
import Springboot from './Components/Springboot';
import Html from './Components/Html';
import Css from './Components/Css';
import Bootstrap from './Components/Bootstrap';
import Javascript from './Components/Javascript';
import ReactJS from './Components/ReactJS';


function App() {
  return (
    <div className="App">
      <NavbarComp />
      <CarouselPage />
      <Routes>
        <Route path="/" element={<Trailers2024 />} />
        <Route exact path="/" element={<Trailers2024/>} />
        <Route path="/trailers2023" element={<Trailers2023/>} />
        <Route path="/servlet" element={<Servlets/>} />
        <Route path="/hibernate" element={<Hibernate/>} />
        <Route path="/jpa" element={<Jpa/>} />
        <Route path="/spring" element={<Spring/>} />
        <Route path="/springboot" element={<Springboot/>} />
        <Route path="/html" element={<Html/>} />
        <Route path="/css" element={<Css/>} />
        <Route path="/bootstrap" element={<Bootstrap/>} />
        <Route path="/javascript" element={<Javascript/>} />
        <Route path="/reactjs" element={<ReactJS/>} />
        <Route exact path="/" element={<Electronics/>} />
        <Route path="/electronics1" element={<Electronics1 />} />
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/minitv" element={<MiniTv />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;