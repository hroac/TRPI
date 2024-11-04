import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/TRPI'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
