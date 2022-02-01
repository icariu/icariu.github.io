import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen)
        setIsOpen(false);
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  });

  return (
    <>
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;