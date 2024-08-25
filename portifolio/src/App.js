import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import Contact from './components/pages/Contact'; // Importe o componente da página de Contato
import Container from './components/layout/Container';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* Seções da página principal */}
                <div id="home" style={{ height: '100vh' }}>
                  <Home />
                </div>
                <div id="about" style={{ height: '100vh' }}>
                  <h1>Empresa Section</h1>
                  {/* Conteúdo da seção Empresa */}
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
      </Container>
    </Router>
  );
}

export default App;
