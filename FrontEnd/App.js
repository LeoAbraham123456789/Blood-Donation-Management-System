import React from 'react'
import Registration from './Registration/Registration'
import Navbar from './navbar/Navigationbar'
import Home from './Home/Home'
import Login from './login/Login'
import Request from './pages/Request' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './pages/Details/Details'


function App() {
  return (

      <Router>
        <Routes>
          <Route
           path="/"
           element={
             <Home />
           }
         />
        </Routes>

        <Routes>
          <Route
           path="/login"
           element={
             <Login />
           }
         />
        </Routes>

        <Routes>
          <Route
           path="/register"
           element={
             <Registration />
           }
         />
        </Routes>
        <Routes>
          <Route
           path="/request"
           element={
             <Request />
           }
         />
        </Routes>
        <Routes>
          <Route
            path="/details"
            element={
              <Details/>
            }/>
        </Routes>

      </Router>
  )
}

export default App
