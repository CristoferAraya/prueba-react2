import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import React, {useState, useEffect} from 'react';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Contacto from './views/Contacto';
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';
import NotFound from './views/NotFound';

import Context  from './context';

function App() {

  const storedCart = localStorage.getItem('cart');
  const [cart, setCart] = useState(storedCart ? JSON.parse(storedCart) : []); 
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      
      <BrowserRouter>
        <Context.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home/>} />      
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/pizza/:id" element={<Pizza/>} />
            <Route path="/carrito" element={<Carrito/>} />              
            <Route path="*" element={<NotFound />} />          
          </Routes> 
        </Context.Provider>         
      </BrowserRouter> 
       
    </div>   
  );
}

export default App;