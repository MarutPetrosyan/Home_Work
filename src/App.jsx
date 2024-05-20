import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Loyout from './Components/Loyout/Loyout'
import Icon from './Pages/Icon/Icon'
import { useState } from 'react'


function App({ product }) {
  const [cart, setCart] = useState([])

  const addBtnsClicks = (count) => {
    setCart(cart.map((el)=>{
      return {
        ...el,
        count : count,
        initprice : el.price * count
      }
    }))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path='/product' element={<Product product={product} setCart={setCart} />} />
          <Route path='/icon' element={<Icon cart={cart} addBtnsClicks={addBtnsClicks}/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
