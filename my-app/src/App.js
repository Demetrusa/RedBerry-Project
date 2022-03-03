import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import About from './components/common/about/About';
import Covid from './components/common/covid/Covid';
import Header from './components/common/header/Header';
import Origin from './components/common/Origin/Origin';
import Skill from './components/common/skill/Skill';
import SubmitPage from './components/common/submitPage/SubmitPage';
import ThankYou from './components/common/submitPage/ThankYou';


function App() {
  return (
    <div className="App">
    
        <Header />
        <Origin />
        {/* <Skill /> */}
        {/* <Covid /> */}
        {/* <About /> */}
        {/* <SubmitPage /> */}
        {/* <ThankYou /> */}
    </div>
  );
}

export default App;
