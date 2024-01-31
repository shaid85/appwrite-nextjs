import { createContext } from "react";


export const AuthContext = createContext<{
    authStatus: boolean;
    setAuthStatus: (state: boolean) => void;
}>({
    authStatus: false,
    setAuthStatus: () => {}
}) 

export const AuthProvider = AuthContext.Provider;

export default AuthContext;