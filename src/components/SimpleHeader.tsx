import React from "react";

import styles from "./Header.module.css";
import Link from "next/link";

export default function SimpleHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link className={styles.stack} href={"/"}>
                    <h1 className={styles.title}>Ugallery</h1>
                    <p className={styles.subtitle}>Save your pictures</p>
                </Link>
            </nav>
        </header>
    );
}
