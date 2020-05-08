import React from 'react';
import {Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Details from './pages/Details';
import './App.css';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/item-details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
