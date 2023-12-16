import React from 'react';
import ViewProduct from './components/ViewProduct';
import Customers from './components/Customers';
import './style.css';

export default function App() {
  return (
    <div>
      <ViewProduct />
      <hr />
      <Customers />
    </div>
  );
}
