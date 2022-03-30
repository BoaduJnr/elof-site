import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from './Components/Services';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Contacts from './Components/Contacts';
import About from './Components/AboutUs';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path= "/" element={<App/>}>
        <Route path='Home' element={<Home/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='Gallery' element={<Gallery/>}/>
        <Route path='Contacts' element={<Contacts/>}/>
        <Route path='AboutUs' element={<About/>}/>
        
      </Route>
      
      
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
