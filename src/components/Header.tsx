import React from "react";

import styles from "./Header.module.css";
import buttonStyles from "./Button.module.css";
import utilsStyles from "./Utils.module.css";

import Link from "next/link";
import Avatar from "./Avatar";
import { useAuth } from "./Authentication/hooks/useAuth";

export default function Header() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    function handleLogout() {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link className={styles.stack} href={"/"}>
                    <h1 className={styles.title}>Ugallery</h1>
                    <p className={styles.subtitle}>Save your pictures</p>
                </Link>
                {isAuthenticated ? (
                    <div className={utilsStyles.flexCenter}>
                        <Avatar />
                        <button
                            className={`${buttonStyles.button} ${buttonStyles.neutral}`}
                            onClick={handleLogout}
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <div className={styles.row}>
                        <Link
                            href={"/register"}
                            className={`${buttonStyles.button} ${buttonStyles.primaryOutline}`}
                        >
                            Sign up
                        </Link>
                        <Link
                            href={"/login"}
                            className={`${buttonStyles.button} ${buttonStyles.primary}`}
                        >
                            Log In
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
