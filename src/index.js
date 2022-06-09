import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import PetCartContextProvider from './store/petCart-context';
import CustomerAuthContextProvider from './store/customerAuth-context';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomerAuthContextProvider>
        <PetCartContextProvider>
          <App />
        </PetCartContextProvider>
      </CustomerAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
