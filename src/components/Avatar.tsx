import React from "react";
import { IoMdContact } from "react-icons/io";

import styles from "./Avatar.module.css"

export default function Avatar() {
    return <div className={ styles.avatar }>
        <IoMdContact size={60} />
    </div>;
}