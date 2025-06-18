import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes, Route } from "react-router-dom" 
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
function App() {
  return (
    <>
    
<BrowserRouter>
<Header/>
<Routes>
  
  <Route path='/' element={<Home/>}/>
  <Route path='/Login' element={<Login/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App