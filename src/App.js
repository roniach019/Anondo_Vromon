import React, { Component } from 'react';  
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Home from './Components/Home';  
import Login from './Components/Login';  
import About from './Components/About';
import Signup from './Components/Signup';  
import NotFound from './Components/NotFound'; 
import Information from './Components/Information'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


import { AddProducts } from './Components/AddProducts'

import './App.css'; 
   
const App = () => {  
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return ( 
       <Router>  
        <div className="App">   
          <nav className="main-nav">        
            <div
              className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
              }>
              <ul>
                <li>
                  <p className='link'><Link to="/">Home</Link> </p> 
                </li>
                <li>
                  <Link to="/Login">Login</Link>  
                </li>
                <li>  
                    <Link to="/Signup">Sign up</Link>  
                  </li> 
                  <li>  
                    <Link to="/about">About Us</Link>  
                  </li>  
                  <li>  
                    <Link to="/add-products"> Admin panel </Link>  
                  </li> 
              </ul>
            </div>
 
            {/* 3rd social media links */}
            <div className="social-media">       

              {/* hamburget menu start  */}
              <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <GiHamburgerMenu />
                </a>
              </div>
        </div>
      </nav>
           <Routes>  
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>   
                 <Route exact path='/Signup' element={< Signup />}></Route>
                 <Route exact path='/about' element={< About />}></Route> 
                 <Route exact path='/Information' element={< Information /> }></Route>
                 <Route Component={NotFound}></Route>              
                 <Route exact path="/add-products" element={<AddProducts />}/>
                {/* <Route exact path="/cart" component={Cart}/>        */}        
          </Routes>  
          </div>            
       </Router> 
   );  
  }  
  
export default App;  










{/* <ul >  
              <li>  
                <Link to="/">Home</Link>  
              </li>  
              <li>  
                <Link to="/Login">Login</Link>  
              </li> 
              <li>  
                <Link to="/Signup">Sign up</Link>  
              </li> 
              <li>  
                <Link to="/about">About Us</Link>  
              </li>  
              <li>  
                <Link to="/contact">Contact Us</Link>  
              </li>  
            </ul>   */}