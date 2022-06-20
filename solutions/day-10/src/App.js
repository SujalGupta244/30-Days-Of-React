import React from 'react';
import Header from './components/Header/Header';
import About from './components/about'
import Portfolio from './components/portfolios';
import Connect from './components/connect';
import Navbar from './components/Navbar';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Connect/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
