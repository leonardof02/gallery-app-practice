import { isPasswordEmpty, isUsernameEmpty } from "@/services/ValidationService";
import React, { useState } from "react";

export function useLoginValidation() {
    
    const [passwordError, setPasswordError] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function getPasswordErrors(password: string) {
        try {
            isPasswordEmpty(password);
            setPasswordError("");
        } catch (error: any) {
            setPasswordError(error.message);
        }
    }

    function getUsernameErrors(username: string) {
        try {
            isUsernameEmpty(username);
            setUsernameError("");
        } catch (error: any) {
            setUsernameError(error.message);
        }
    }

    return {
        passwordError,
        usernameError,
        errorMessage,
        setErrorMessage,
        getPasswordErrors,
        getUsernameErrors,
    };
}
