import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/contact' element={ <Contact /> } />
        <Route exact path='/about' element={ <About /> } />
        <Route exact path='/projects' element={ <Projects /> } />
        <Route exact path='/' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
