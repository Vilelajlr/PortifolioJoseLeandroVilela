import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS

// Função principal que inicializa o AOS e renderiza o App
function Main() {
  useEffect(() => {
    AOS.init({
      duration: 700, 
      offset: 120, 
      once: false,
      mirror: true,    
    });
  }, []);

  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
