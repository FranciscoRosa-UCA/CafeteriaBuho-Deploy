import { useState } from 'react'
import './App.css'

import MainHeader from './Components/HeaderMain/HeaderMain'
import AccountHeader from './Components/HeaderAccount/HeaderAccount'
import Container from './Components/Container/Container'

function App() {

  return (
    <div className="App">
      <MainHeader>
      </MainHeader>
      {/* <AccountHeader>

      </AccountHeader> */}
      <Container>

      </Container>
    </div>
  )
}

export default App
