import AuthContext, { AuthContextProvider } from "@/components/Authentication/context/AuthContext";
import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    );
}
