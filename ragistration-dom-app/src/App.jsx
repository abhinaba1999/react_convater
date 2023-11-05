import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputButton from './component/InputButton'
import Form from './component/Form'
import { AuthContext } from './AuthContext/AuthContextProvider'

function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    document.title="Registration"
  },[])
  const {isAuth,values}=useContext(AuthContext);
   
  return (
    <>
      <Form/>
  <h1 id="dName">NAME:- {isAuth.name && values.name}</h1>
	<h2 id="dGender">GENDER:- {isAuth.gender && values.gender}</h2>
	<h3 id="dEmail">EMAIL:- {isAuth.email && values.email}</h3>
	<h4 id="dMobile">MOBILE:- {isAuth.mobile && values.mobile}</h4>
	
	<InputButton/>
    </>
  )
}

export default App
