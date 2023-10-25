import { ReactNode } from "react";
import SimpleHeader from "../SimpleHeader";

interface Props {
    children: ReactNode | ReactNode[];
}

export default function SimpleLayout({ children }: Props) {
    return (
        <>
            <SimpleHeader />
            <main>{children}</main>
            <footer></footer>
        </>
    );
}
