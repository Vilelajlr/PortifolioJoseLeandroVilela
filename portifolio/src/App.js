import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import Contact from './components/pages/Contact';

import Home from './components/pages/Home';
import About from './components/pages/About';



import './App.css';
import Projects from './components/pages/Projects';
import Footer from './components/pages/Footer';



function App() {

  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="max">
                <div id="home" style={{ minHeight: '100dvh' }}>
                  <Home />
                </div>
                
                <div id="about">
                  <About />
                </div>
                <div id="projects">
                  <Projects />
                </div>

                <div id="contact">
                  <Contact />
                </div>

              </div> 
            }
          />
          
        </Routes>
        
        <Footer />

    </Router>
  );
}

export default App;
