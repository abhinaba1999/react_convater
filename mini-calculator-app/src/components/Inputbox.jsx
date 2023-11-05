import React from 'react'
import '../App.css'
import { AuthContext } from '../AuthContext/AuthContextProvider'

function Inputbox() {

    const {fvalues,setfvalues,setsvalues,svalues}=React.useContext(AuthContext)
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"1rem"
}}>
      <input type="number" name="1st number" id="fstnumber" placeholder='Enter 1 st number' onChange={(e)=>setfvalues(e.target.value)} />
    <input type="number" name="2nd number" id="sndnumber" placeholder='Enter 2 st number' onChange={(e)=>setsvalues(e.target.value)}/>
    </div>
  )
}

export default Inputbox
