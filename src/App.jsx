import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Home from './components/Layout/Home'
import AvailableMeals from './components/Meals/AvailableMeals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [cartShown, setCartShown] = useState(false)

  const toggleCartShown = () =>{
    setCartShown(vl => !vl)
  }

  return (
    <CartProvider>
      {cartShown && <Cart toggleCartShown={toggleCartShown}/>}
      <Header toggleCartShown={toggleCartShown}/>
      <Home />
      <AvailableMeals />
    </CartProvider>
  )
}

export default App
