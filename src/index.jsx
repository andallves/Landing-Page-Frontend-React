import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home';
import { GlobalStyles } from './styles/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
);
