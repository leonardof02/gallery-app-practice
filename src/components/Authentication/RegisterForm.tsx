import styles from "./AuthForm.module.css";
import buttonStyles from "../Button.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./hooks/useAuth";
import { validatePassword, validateUsername } from "@/services/ValidationService";
import { ValidationError } from "@/models/ValidationError";
import { registerUser } from "@/services/RegisterService";
import { authUser } from "@/services/AuthService";
import Alert from "../Alert";

export default function RegisterForm() {
    const router = useRouter();
    const { setIsAuthenticated } = useAuth();

    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const userFormData = new FormData(event.target as HTMLFormElement);
            const { username, password }: UserData = Object.fromEntries(
                userFormData.entries()
            ) as unknown as UserData;

            getUsernameErrors(username);
            getPasswordErrors(password);

            await registerUser(username, password);
            await authUser(username, password);
            setIsAuthenticated(true);
            router.push("/");
        } catch (err) {
            setErrorMessage((err as Error).message);
        }
    }

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

    return (
        <div className={styles.center}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Register User</h3>
                <div className={styles.inputContainer}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        id="username"
                        className={usernameErrors.length > 0 ? styles.inputError : ""}
                    />
                    <div>
                        {usernameErrors.map((error, index) => (
                            <p key={index} className={styles.labelError}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className={passwordErrors.length > 0 ? styles.inputError : ""}
                    />
                    <div>
                        {passwordErrors.map((error, index) => (
                            <p key={index} className={styles.labelError}>
                                {error}
                            </p>
                        ))}
                    </div>
                </div>
                {errorMessage && <Alert text={errorMessage} />}
                <input
                    type="submit"
                    value="Sign Up"
                    className={`${buttonStyles.button} ${buttonStyles.primary}`}
                ></input>
            </form>
        </div>
    );
}
