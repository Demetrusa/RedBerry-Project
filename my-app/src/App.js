import React from 'react';
import './App.css';
import About from './components/common/about/About';
import Covid from './components/common/covid/Covid';
import Header from './components/common/header/Header';
import Origin from './components/common/Origin/Origin';
import Skill from './components/common/skill/Skill';
import SubmitPage from './components/common/submitPage/SubmitPage';
import ThankYou from './components/common/submitPage/ThankYou';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/origin">
        <Origin />
          </Route>
        <Route path="/page">
          <Skill />
        </Route>
        <Route path="/covid">
          <Covid />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/submit">
          <SubmitPage/>
        </Route>
        <Route path="/thankYou">
          <ThankYou/>
        </Route>
        <Route path="/submit">
          <ThankYou />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
