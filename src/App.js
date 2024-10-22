import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import About from './Components/About';
//import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Product from './Components/Product';

import UserCart from './Components/UserCart';
//import { Login } from '@mui/icons-material';
import Login from'./Components/Login';
import Signup from './Components/Signup';
import UserAuthor from './Components/UserAuthor';

//import Cart from './Components/Cart';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        
        <Route path="/product" element={<Home />} /> 
        <Route path="/product/:productid" element={<Product />} /> 
       <Route path='/cart' element={<UserCart/>}/>
       <Route path='/signup' element={< Signup/>}/>
       <Route path='./userAuthor' element={<UserAuthor/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
