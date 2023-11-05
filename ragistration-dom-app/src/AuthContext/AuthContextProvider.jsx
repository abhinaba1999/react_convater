import React from 'react'

export const AuthContext=React.createContext()
function AuthContextProvider(props) {
    const [values,setvalues]=React.useState({
        name:'',
        gender:'',
        email:'',
        mobile:'',

    })
    const [isAuth,setisAuth]=React.useState({
        name:false,
        gender:false,
        email:false,
        mobile:false,
    });
    const [reset,setreset]=React.useState(false)
  return (
    <AuthContext.Provider value={{values,setvalues,isAuth,setisAuth,reset,setreset}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
