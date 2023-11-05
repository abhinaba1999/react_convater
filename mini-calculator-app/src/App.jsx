import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputbox from './components/Inputbox'
import ButtonComp from './components/ButtonComp'
import { AuthContext } from './AuthContext/AuthContextProvider'

function App() {
  const {targetvalues}=useContext(AuthContext);

  return (

    <>
    <h1>Your Ans. is: {targetvalues}</h1>
    <Inputbox/>
    <ButtonComp/>
    
    </>
  )
}

export default App
