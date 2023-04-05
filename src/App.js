import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Header from './components/Header';
import {Route, Routes}from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes> 
    </>
      
  );
}

export default App;
