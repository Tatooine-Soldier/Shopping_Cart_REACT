import React from 'react'


export default function Cart({cart, removeFromCart}) {
    return (
        <>
          <h1>Cart</h1>
          <div className="products">
            {cart.map((product, idx) => (
              <div className="product" key={idx}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <img src={product.image} alt={product.name}/>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            ))}
          </div>
        </>
    )
}
