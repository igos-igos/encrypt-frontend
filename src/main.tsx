import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')!).render(app);
