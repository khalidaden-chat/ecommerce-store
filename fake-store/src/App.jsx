import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { CartProvider } from './context/CartContext.jsx'

import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
function App() {

  return (
    <>
    <CartProvider>

     <BrowserRouter>
     <Navbar />
   
     <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/Cart' element={<Cart/>} />
     </Routes>
          </BrowserRouter>
          </CartProvider>
    </>
  )
}

export default App
