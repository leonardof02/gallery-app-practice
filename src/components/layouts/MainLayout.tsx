import React, { ReactNode } from "react";

import styles from "./MainLayout.module.css"
import Header from "../Header";

interface Props {
    children: ReactNode | ReactNode[];
}

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer></footer>
        </>
    );
}