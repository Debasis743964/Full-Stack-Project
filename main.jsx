import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
   
  </BrowserRouter>,
);
