import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Wish from './Pages/Wish'
import View from './Pages/View'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/wish' element={<Wish/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
