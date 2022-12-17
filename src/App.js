import React, { Component } from 'react';  
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Home from './Components/Home';  
import Login from './Components/Login';  
import Contact from './Components/Navbar';
import Signup from './Components/Signup';  
import About from './Components/Products';  
import NotFound from './Components/NotFound'; 
import Information from './Components/Information'


import { AddProducts } from './Components/AddProducts'
//import { Cart } from './components/Cart'

import './App.css'; 
   
class App extends Component {  
  render() {  
    return ( 
       <Router>  
           <div className="App">  
            <div className='router'>
              <Link to="/"> Home </Link>
              <Link to="/Login"> Login </Link>
              <Link to="/Signup"> Sign up </Link>
              <Link to="/about"> Offers </Link>
              <Link to="/contact"> Contact Us </Link>  
              <Link to="/add-products"> Admin panel </Link> 
              <Link to="/Information"> Information </Link> 
            </div>
            
            
           <Routes>  
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>   
                 <Route exact path='/Signup' element={< Signup />}></Route>
                 <Route exact path='/about' element={< About />}></Route>  
                 <Route exact path='/contact' element={< Contact />}></Route> 
                 <Route exact path='/Information' element={< Information /> }></Route>
                 <Route Component={NotFound}></Route>


                 
        
                <Route exact path="/add-products" element={<AddProducts />}/>
                {/* <Route exact path="/cart" component={Cart}/>        */}
        
          </Routes>  

          

          </div>  

          
       </Router> 
   );  
  }  
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