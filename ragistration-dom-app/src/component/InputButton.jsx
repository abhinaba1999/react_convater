import React from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider'

function InputButton() {
    const {values,isAuth,reset,setisAuth,setreset,setvalues}=React.useContext(AuthContext);
     
    let objvalue={
        name:'',
        gender:'',
        email:'',
        mobile:'',
    }
    let objisauth={
        name:false,
        gender:false,
        email:false,
        mobile:false,
    }
    function handlereset(){
        setvalues({...values,...objvalue})
        setisAuth({...isAuth,...objisauth})
    }
  return (
    <div>
    <button disabled={isAuth.name} onClick={()=>setisAuth({...isAuth,name:true})} >NAME</button>
	<button disabled={isAuth.gender} onClick={()=>setisAuth({...isAuth,gender:true})}>GENDER</button>
	<button disabled={isAuth.email} onClick={()=>setisAuth({...isAuth,email:true})}>EMAIL</button>
	<button disabled={isAuth.mobile} onClick={()=>setisAuth({...isAuth,mobile:true})}>MOBILE</button>
	<button  onClick={()=> setreset(true)}>RESET FORM</button>
	<button  onClick={ handlereset}>RESET DISPLAY</button>
    </div>
  )
}

export default InputButton
