import React from 'react';

function AllTheThings({products, handleAdd}) {
 
  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>

        <ul>
            {products.map((product, i) => {
                return (
                    <li 
                    key={i} 
                    onClick={() => handleAdd(product)} 
                    >
                        {product.name} - {product.price}
                    </li>
                )
            })}
        </ul>
    </div>
      

  );
}

export default AllTheThings;
