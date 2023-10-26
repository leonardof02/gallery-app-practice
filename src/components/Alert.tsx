import React from "react";
import styles from "./Alert.module.css";
import { MdInfo } from "react-icons/md";

interface Props {
    text: string;
}

export default function Alert({ text }: Props) {
    return (
        <div className={styles.alertContainer}>
            <div className={styles.iconContainer}>
                <MdInfo size={20} />
            </div>
            <div>{text}</div>
        </div>
    );
}
