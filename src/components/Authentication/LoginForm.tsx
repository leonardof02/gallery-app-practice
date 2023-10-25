import styles from "./LoginForm.module.css";
import buttonStyles from "../Button.module.css";
import { FormEvent } from "react";
import { authUser, getToken } from "@/services/AuthService";
import { useRouter } from "next/router";
import { useAuth } from "./hooks/useAuth";

export default function LoginForm() {

    const router = useRouter();
    const { setIsAuthenticated } = useAuth();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const userFormData = new FormData(event.target as HTMLFormElement);
            const userData: UserData = Object.fromEntries(userFormData.entries()) as unknown as UserData;
            await authUser( userData.username, userData.password);
            setIsAuthenticated(true);
            router.push("/");
        }
        catch( err ) {
            console.log(err);
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
                        className={styles.inputError}
                    />
                    <p className={styles.labelError}>Error msg</p>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" name="password" id="password" />
                    <p className={styles.labelError}>Error msg</p>
                </div>
                <input
                    type="submit"
                    value="Log In"
                    className={`${buttonStyles.button} ${buttonStyles.primary}`}
                ></input>
            </form>
        </div>
    );
}