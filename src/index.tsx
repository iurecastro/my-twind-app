import React from 'react';
import ReactDOM from 'react-dom';
import { setup } from '@twind/core';
import { tw } from '@twind/react';
import config from './twind.config'; //  path
import App from './App';
import './index.css';

// Initialize Twind
setup(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
