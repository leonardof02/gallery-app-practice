import { SetStateAction } from "react";
import AuthData, { defaultAuthData } from "./AuthData";

export default interface AuthDataContext {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>;
    authData: AuthData;
    setAuthData: React.Dispatch<SetStateAction<AuthData>>;
}

// Default value
export const defaultAuthDataContext = {
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    authData: defaultAuthData,
    setAuthData: () => {},
};