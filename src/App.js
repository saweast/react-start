import React, { useState } from 'react';

import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ItemDetail from './pages/ItemDetail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:id" component={ItemDetail} exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;