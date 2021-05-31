import React, { useState } from 'react'
import './App.css';
import Products from './components/Products.js'
import Cart from './components/Cart.js'
import Hamburger from './components/Hamburger'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

const ORIGINAL_BALANCE = 20

function App() {
  const [page, setPage] = useState(PAGE_PRODUCTS)
  const [cart, setCart] = useState([])
  const [balance, setBalance] = useState(ORIGINAL_BALANCE)
  
  

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove))
    if (balance === "**NOT ENOUGH FUNDS**") {
      setBalance("")
      if (productToRemove.price > ORIGINAL_BALANCE) {
        setBalance(ORIGINAL_BALANCE)
      } else {
        setBalance(productToRemove.price)
      }
    } else {
      setBalance(balance+productToRemove.price)
    }
  }

  const addToCart = (product) => {
    setCart([...cart, {...product}])
    if (balance > product.price) {
      setBalance(balance-product.price)
    } else {
      setBalance("**NOT ENOUGH FUNDS**")
      return 
    }
     
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to cart({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      <section>
        <p id="balance">Balance: ${balance}</p>
      </section>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}    
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart}/>}
    </div>
  );
}

export default App;
