import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { Route,Routes } from 'react-router-dom'
import Header from './pages/component/Header'
import Footer from './pages/component/Footer'

function App() {

  return (
    <>
    <Header/>
   <Routes>
<Route path='/' element={<Landing />} />
<Route path='/detail/:id' element={<Detail/>}/>
<Route path='/wish' element={<Wishlist/>}/>
<Route path='/cart' element={<Cart/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
