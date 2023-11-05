import React from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider'

function ButtonComp() {
    const {fvalues,svalues,setstargetvalues}=React.useContext(AuthContext);
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <button onClick={()=>setstargetvalues(fvalues+svalues)}>Add</button>
      <button onClick={()=>setstargetvalues(fvalues-svalues)}>Subtract</button>
      <button onClick={()=>setstargetvalues(fvalues*svalues)}>Multiply</button>
      <button onClick={()=> setstargetvalues(fvalues/svalues)}>Divide</button>
    </div>
  )
}

export default ButtonComp
