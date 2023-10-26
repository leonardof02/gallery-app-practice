import styles from "./LoginForm.module.css";
import buttonStyles from "../Button.module.css";
import { FormEvent, use, useState } from "react";
import { authUser, getToken } from "@/services/AuthService";
import { useRouter } from "next/router";
import { useAuth } from "./hooks/useAuth";
import Alert from "../Alert";
import { isPasswordEmpty, isUsernameEmpty, validateUsername } from "@/services/ValidationService";
import { useLoginValidation } from "./hooks/useLoginValidation";

export default function LoginForm() {
    const router = useRouter();
    const { setIsAuthenticated } = useAuth();

    const {
        errorMessage,
        passwordError,
        usernameError,
        getPasswordErrors,
        getUsernameErrors,
        setErrorMessage,
    } = useLoginValidation();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const userFormData = new FormData(event.target as HTMLFormElement);
            const userData: UserData = Object.fromEntries(
                userFormData.entries()
            ) as unknown as UserData;

            const { username, password } = userData;

            getUsernameErrors(username);
            getPasswordErrors(password);

            await authUser(username, password);
            setIsAuthenticated(true);
            router.push("/");
        } catch (err) {
            setErrorMessage((err as Error).message);
        }
    }

    return (
        <div className={styles.center}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Log In</h3>
                <div className={styles.inputContainer}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        id="username"
                        className={
                            errorMessage || usernameError.length > 0 ? styles.inputError : ""
                        }
                    />
                    {usernameError && <p className={styles.labelError}>{usernameError}</p>}
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className={
                            errorMessage || passwordError.length > 0 ? styles.inputError : ""
                        }
                    />
                    {passwordError && <p className={styles.labelError}>{passwordError}</p>}
                </div>
                {errorMessage && !usernameError && !passwordError && <Alert text={errorMessage} />}
                <input
                    type="submit"
                    value="Log In"
                    className={`${buttonStyles.button} ${buttonStyles.primary}`}
                ></input>
            </form>
        </div>
    );
}
