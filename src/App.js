import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Stats from './components/pages/Stats'
import Recipes from './components/pages/Recipes'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} ></Route>
        <Route path="/stats" component={Stats} ></Route>
        <Route path="/recipes" component={Recipes} ></Route>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
