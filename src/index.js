import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './Home';
import Bakery from './Bakery.js';
import About from './About.js';
import Order from './Order.js';
import Product from './Product.js';
import Speciality from './Speciality';
import {Cake, Pastry, Brownies, Cookies, CupCake, Bread, Sandwich} from './All.js';
import Gift from './Gift.js';
import Tea from './Tea-Time.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Bakery />} />
          <Route path='about' element={<About />} />
          <Route path='order' element={<Order />} />
          <Route path='product' element={<Product />} />
          <Route path='speciality' element={<Speciality />} />
          <Route path='cakes' element={<Cake />} />
          <Route path='pastry' element={<Pastry />} />
          <Route path='browny' element={<Brownies />} />
          <Route path='bread' element={<Bread />} />
          <Route path='cooky' element={<Cookies />} />
          <Route path='cupcake' element={<CupCake />} />
          <Route path='sandwich' element={<Sandwich />} />
          <Route path='gift' element={<Gift />} />
          <Route path='tea' element={<Tea />} />
        </Route>
      </Routes>
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
