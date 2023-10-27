import React from "react";

import styles from "./AppPresentation.module.css";
import { MdPhoto } from "react-icons/md";

export default function AppPresentation() {
    return (
        <div className={styles.container}>
            <div className={styles.stack}>
                <MdPhoto size={60}/>
                <h1 className={styles.mainText}>Save your picture in your private storage</h1>
            </div>
        </div>
    );
}