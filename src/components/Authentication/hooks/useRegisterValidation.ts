import { ValidationError } from "@/models/ValidationError";
import { validatePassword, validateUsername } from "@/services/ValidationService";
import { useState } from "react";

export function useRegisterValidation() {
    
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function getPasswordErrors(password: string) {
        try {
            validatePassword(password);
            setPasswordErrors([]);
        } catch (error: any) {
            const errors = (error as ValidationError).errors;
            setPasswordErrors(errors);
            throw new Error("Validation Errors");
        }
    }

    function getUsernameErrors(username: string) {
        try {
            validateUsername(username);
            setUsernameErrors([]);
        } catch (error: any) {
            const errors = (error as ValidationError).errors;
            setUsernameErrors(errors);
            throw new Error("Validation Errors");
        }
    }


    return {
        passwordErrors,
        usernameErrors,
        errorMessage,
        setErrorMessage,
        getPasswordErrors,
        getUsernameErrors,
    };
}
