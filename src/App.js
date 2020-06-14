import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavMenu from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <NavMenu />
      <div id="page-wrap">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/About'>
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
    </>
  );
}

export default App;
