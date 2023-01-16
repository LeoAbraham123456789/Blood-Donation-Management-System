import React from 'react'
import Registration from './Registration/Registration'
import Navbar from './navbar/Navigationbar'
import Home from './Home/Home'
import Login from './login/Login'
import Request from './pages/Request' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './pages/Details/Details'
import Admin from './admin/Admin'
import List from './admin/pages/list/List'
import Profile from './pages/Profile/Profile'
import Hospital from './pages/Hospital/Hospital'
import Sponsor from './pages/Sponsor/Sponsor'
import Aboutus from './pages/AboutUs/Aboutus'
import Logined from './pages/Logined/Logined'

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
        <Routes>
          <Route
           path="/hospital"
           element={
             <Hospital />
           }
         />
         </Routes>
         <Routes>
          <Route
           path="/sponsor"
           element={
             <Sponsor />
           }
         />
        </Routes>

        <Routes>
          <Route
           path="/logined"
           element={
             <Logined />
           }
         />
        </Routes>   

        <Routes>
          <Route
           path="/profile"
           element={
             <Profile />
           }
         />
        </Routes>  

         <Routes>
          <Route
           path="/aboutus"
           element={
             <Aboutus />
           }
         />
        </Routes> 

        <Routes>
          <Route
           path="/admin"
           element={
             <Admin />
           }
         />
        </Routes>
        <Routes>
          <Route
            path="/users"
            element={
              <List/>
            }/>
        </Routes>


      </Router>
  )
}

export default App
