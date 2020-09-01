import React, { useEffect, useContext } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from '../src/components/Footer';
import { MyContext } from '../src/utils/Context';


function App() {

  const { menuOpenState, setMenuOpenState } = useContext(MyContext)

  useEffect(() => {
    document.getElementById('page-wrap').onclick = function () {
      menuOpenState && setMenuOpenState(!menuOpenState);
    }
  }, [menuOpenState]);


  return (
    <>
      <NavMenu />
      <div id='page-wrap'>
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
      <Footer />
    </>
  );
}
export default App;
