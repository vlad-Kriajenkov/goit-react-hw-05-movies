import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.css';
import { SkeletonTheme } from 'react-loading-skeleton';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <BrowserRouter basename="/sain-stream">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </SkeletonTheme>
);
