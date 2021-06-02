import React, { useState } from 'react'
import './App.css';
import Products from './components/Products.js'
import Cart from './components/Cart.js'
// import About from "./Pages/About.js"
// import Contact from "./Pages/Contact.js"
// import Home from "./Pages/Home.js"
import {BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom"

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

  const Home = () => (
    <div>
      Home
    </div>
  )

  const Contact = () => (
    <div>
      Contact
    </div>
  )

  const About = () => (
    <div>
      About
    </div>
  )

  return (
    
    <div className="App">
      
      <header>
        <section id="header_grid">
          <img className="header_imgs" alt="Marketplace icon " title="Marketplace" src="data:image/jpeg;base64,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"/>
        </section>
        <section id="title_container">
          <b>MARKETPLACE</b>
        </section>
      </header>
      
      
      <nav>
        <ul>
          <Router>
            <NavLink to="/"><li>Home</li></NavLink>             
            <NavLink to="/About"><li>About</li></NavLink>         
            <NavLink to="/Contact"><li>Contact</li></NavLink>                  
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Contact" component={Contact}/>
            </Switch>
          </Router>
        </ul>
      </nav>
      <main>
        <section id="buttons_container">
          <button onClick={() => navigateTo(PAGE_CART)}>Go to cart({cart.length})</button>
          <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
        </section>
        <section>
          <p id="balance">Balance: ${balance}</p>
        </section>
        {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}    
        {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart}/>}

        <footer>
          <i><small>	&copy; Tom O'Dwyer</small></i>
        </footer>
      </main>
    </div>
  );
}

export default App;
