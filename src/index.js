import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import PetCartContextProvider from './store/petCart-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PetCartContextProvider>
        <App />
      </PetCartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
