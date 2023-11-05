import React from 'react'

export const AuthContext=React.createContext();
function AuthContextProvider({children}) {
 const [fvalues,setfvalues]=React.useState(0)
 const [svalues,setsvalues]=React.useState(0)
 const [targetvalues,setstargetvalues]=React.useState(0)



  return (
    <AuthContext.Provider value={{fvalues,setfvalues,setsvalues,svalues,targetvalues,setstargetvalues}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
