import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Login from './Components/Login'
import Search from './Components/Search'
import Homepage from './Components/Homepage';
import ProductDetails from './Components/ProductDetails';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'
          element={<Homepage/>}/>
    <Route path='/login'
          element={<Login />}/>
    <Route path='/search' 
          element={<Search />} />
    <Route path='/products/:id'
          element={<ProductDetails />}/>
  </Routes>
  </BrowserRouter>
  );
}
export default App;
