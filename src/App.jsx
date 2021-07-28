// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './Components/AllTheThings/index'
import MyShoppingCart from './Components/MyShoppingCart/index';
import productsArr from './products'

function App() {

  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    setCart([...cart, product])
  }

  const handleRemove = (i) => {
    setCart(prevCart => {
      let newCart = cart.slice()
      newCart.splice(i, 1)
      return (newCart)
    })
  }

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
       <AllTheThings products={productsArr} handleAdd={handleAdd}/>
       <MyShoppingCart cart={cart} handleRemove={handleRemove} />
  </div>
  );
}

export default App