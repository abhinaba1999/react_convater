import React from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider'

function Form() {
    const {values,setvalues,reset,setreset}=React.useContext(AuthContext);
    let inputref=React.useRef("")
    function handleChange(e){
      
        if(e.target.value!=''){

            setvalues({...values,[e.target.name]:e.target.value})
          setreset(false)
        }
      
    }
    console.log(values)
  return (
    <div>
      <input type="text" required name="name" id="name" value={reset? inputref.current:values.name} placeholder='Enter your Name' onChange={(e)=> handleChange(e)}/>
      <select id="gender" required name='gender' value={reset ?inputref.current:values.gender} onChange={(e)=> handleChange(e)}>
		<option value="">--</option>
		<option  value="male">M</option>
		<option  value="female">F</option>
	</select>
  <input type="text" name="email" required id="email" value={reset? inputref.current:values.email} placeholder='Enter Your Email' onChange={(e)=> handleChange(e)}/>
	<input type="text" name="mobile" required id="mobile" value={reset? inputref.current:values.mobile} placeholder='Enter Your Mobile Number' onChange={(e)=> handleChange(e)}/>
    </div>
  )
}

export default Form
