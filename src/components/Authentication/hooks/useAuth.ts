import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export function useAuth() {
    const authDataContext = useContext(AuthContext);
    return authDataContext;
}