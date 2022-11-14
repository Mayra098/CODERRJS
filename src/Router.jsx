import React from 'react'
import App from '../src/App'
import Character from '../src/screen/Character/Character'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Navbar  from './components/NavBar'
import PantalonNegro from './screen/Character/PantalonNegro'
import Footer from './components/Footer'

const Router = () => {
  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/category/:category" element={<App/>}></Route>
    <Route path="/hola/:pantalon negro con textura" element={<PantalonNegro/>}></Route>
    <Route path="/category/pantalones/hola/:pantalon negro con textura" element={<PantalonNegro/>}></Route>

{/*     <Route path="/hola/:name" element={<Character/>}></Route>
 */}    <Route path="/hola/:idCharacter" element={<Character/>}></Route>

    <Route path="/*" element={<div>404 not found</div>}></Route>

 </Routes>
 <Footer/>
 </BrowserRouter>
  )
}

export default Router