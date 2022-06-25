// Core
import React from 'react';
import ReactDOM from 'react-dom/client';

// App
import Routing from './routing/Routing';

// Styles
import 'antd/dist/antd.css';

const app = (
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')!).render(app);
