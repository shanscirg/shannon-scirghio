import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import ContactMenu from './components/ContactMenu';
import NavMenu from './components/NavMenu';
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
