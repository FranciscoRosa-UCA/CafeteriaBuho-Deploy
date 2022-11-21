import { useState } from 'react'
import './App.css'

import MainHeader from './Components/HeaderMain/HeaderMain'
import AccountHeader from './Components/HeaderAccount/HeaderAccount'
import Container from './Components/Container/Container'
import Login from './Components/Authentication/Login/Login'

function App() {

  return (
    <div className="App">
      <MainHeader>
      </MainHeader>
      {/* <AccountHeader>

      </AccountHeader> */}
      <Container>

      </Container>

      {/* <Login></Login> */}

    </div>
  )
}

export default App
