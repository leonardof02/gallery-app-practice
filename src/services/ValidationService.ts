import { ValidationError } from "@/models/ValidationError";

export function validatePassword(password: string) {
    const sixMinimumChars = /^.{6,}$/;
    const atLeastOneLowercase = /^(?=.*[a-z]).*$/;
    const atLeastOneUppercase = /^(?=.*[A-Z]).*$/;
    const atLeastOneDigit = /^(?=.*\d).*$/;
    const nonAlphanumericalChar = /^(?=.*\W).*$/;

    const errorMessage = "The password must contain at least ";
    const errors: string[] = [];

    if (!sixMinimumChars.test(password)) errors.push(`${errorMessage} 6 characters`);
    if (!atLeastOneLowercase.test(password)) errors.push(`${errorMessage} 1 lowercase character`);
    if (!atLeastOneUppercase.test(password)) errors.push(`${errorMessage} 1 uppercase character`);
    if (!atLeastOneDigit.test(password)) errors.push(`${errorMessage} 1 numerical digit`);
    if (!nonAlphanumericalChar.test(password)) errors.push(`${errorMessage} 1 or more spaces`);

    if (errors.length > 0) {
        const validationError = new Error("Validation errors") as ValidationError;
        validationError.errors = errors;
        throw validationError;
    }
}

export function validateUsername(username: string) {
    if (username == "") {
        const validationError = new Error("Validation errors") as ValidationError;
        validationError.errors.push("Username can not be empty");
        throw validationError;
    }
}
