import { useState, createContext, useContext } from "react";

export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

function AuthProvider({children}) {
    const [auth, setAuth] = useState()

    function updateAuth(newAuth) {
        setAuth(newAuth)
    }

    return (
        <AuthContext.Provider value={{auth, updateAuth}}>
            {children}
        </AuthContext.Provider>

    )
   
}

export default AuthProvider