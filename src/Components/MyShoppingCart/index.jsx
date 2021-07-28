import React from 'react';

function MyShoppingCart({cart, handleRemove}) {

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
            {cart.map((product, i) => {
                return (
                    <li 
                    key={i} 
                    onClick={() => handleRemove(i)} 
                    >
                        {product.name} - {product.price}
                    </li>
                )
            })}
        </ul>
    </div>
  );
}

export default MyShoppingCart;
