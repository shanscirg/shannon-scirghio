import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div className='app-component'>
      <Navbar />
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
  );
}

export default App;
