import { useEffect, useState } from 'react'
import React from 'react';
import axios from "axios";
import bookLogo from './assets/books.png'
import ProtectedRoute from "./ProtetedRoute";

// function App() {
//   const [token, setToken] = useState(null)

//   return (
//     <>
//       <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
//     </>
//   )
// }

// 

import {useEffect, useState} from 'react';
import axios from "axios";
import Signup from './Signup';
function App(){
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);

  useEffect (() => {

  })


useEffect (() => {
  axios("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/") // << insert link to book buddy api in the parentheses
    .then((response) => {
      console.log(response.data);

      setProducts(response.data);
  })
    .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <BrowserRouter>
      <header>
        {!token && <Link to="/signin">Sign In</Link>}
        
      </header>
      
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route element= "{<ProtectedRoute />}" />
          <Route path= "/Books" element={<Books />} /> 
          <Route path= "/Signin" element={<Signin />} /> 
          <Route path= "/Signup" element={<Signup />} /> 
          <Route path= "/Favorites" element={<Favorites />} /> 
          <Route path= "/*" element={<Home/>} /> 
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
};
    

export default App;

