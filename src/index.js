import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-slideshow-image/dist/styles.css'
import 'react-phone-input-2/lib/style.css'
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
