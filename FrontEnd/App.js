import React from 'react'
import Registration from './Registration/Registration'
import Navbar from './navbar/Navigationbar'
import Home from './Home/Home'
import Login from './login/Login'
import Request from './pages/Request' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
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

      </Router>
    </div>
  )
}

export default App
