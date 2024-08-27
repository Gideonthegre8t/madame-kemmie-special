import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import { CartProvider } from './components/CartContext';
import { TransactionProvider } from './components/TransactionContext';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <TransactionProvider>
        <HelmetProvider>
        <App />
        </HelmetProvider>
      </TransactionProvider>
    </CartProvider>
  </React.StrictMode>
);
