import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import any global CSS or assets here
import './styles/index.css';
import serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration()
