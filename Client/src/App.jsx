import { useState } from 'react'
import './App.css'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import MainHeader from './Components/Header/Header'
import Container from './Components/Container/Container'
import Login from './Components/Authentication/Login/Login'
import Register from './Components/Authentication/Register/Register';

function App() {

  return (
    <div className="App">
      {/* <MainHeader>
      </MainHeader> */}
      {/* <AccountHeader>

      </AccountHeader> */}
      {/* <Container>
      
      </Container> */}

      {/* <Login></Login> */}
      
      {/* <Register></Register> */}

    </div>
  )
}

export default App
