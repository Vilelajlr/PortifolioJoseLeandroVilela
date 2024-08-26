import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import Contact from './components/pages/Contact';

import Home from './components/pages/Home';
import About from './components/pages/About';



import './App.css';

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
                <div id="projects" style={{ height: '100vh' }}>
                  <h1>Projetos Section</h1>
                  {/* Conteúdo da seção Projetos */}
                </div>
                </div> 
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </Router>
  );
}

export default App;
