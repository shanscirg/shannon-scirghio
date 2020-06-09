import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
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
    </>
  );
}

export default App;
