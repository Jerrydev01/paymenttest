import React from 'react';
import ReactDOM from 'react-dom/client';
import BgImg from './assets/Vector55.svg'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: ' top center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
      className="w-full">
      <App />
    </main>
  </React.StrictMode>
);


