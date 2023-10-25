import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import AuthData, { defaultAuthData } from "@/models/AuthData";
import AuthDataContext, { defaultAuthDataContext } from "@/models/AuthDataContext";

const AuthContext = createContext<AuthDataContext>(defaultAuthDataContext);
export default AuthContext;

interface Props {
    children: ReactNode | ReactNode[];
}

export function AuthContextProvider({ children }: Props) {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [authData, setAuthData] = useState<AuthData>(defaultAuthData);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token){
            setAuthData({ ...authData, token });
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, authData, setAuthData }}
        >
            {children}
        </AuthContext.Provider>
    );
}