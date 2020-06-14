import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Button from './components/Button';
import NavMenu from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div id="outer-container">
      <NavMenu />
      <div id="page-wrap">
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route exact path='/Projects'>
            <Projects />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
