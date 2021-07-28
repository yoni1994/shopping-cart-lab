// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './Components/AllTheThings';
import MyShoppingCart from './Components/MyShoppingCart';
import productsArr from './products'

export default function App() {

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
       <AllTheThings  />
       <MyShoppingCart />
  </div>
  );
}
