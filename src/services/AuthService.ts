import AuthData from "@/models/AuthData";

async function getToken(username: string, password: string): Promise<AuthData> {
    const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    };
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/Authenticate/login`,
        fetchOptions
    );
    const data = await response.json();
    if (response.status == 401 || response.status == 400) throw new Error("Invalid Credentials");
    return data;
}

async function authUser(username: string, password: string) {
    const authData: AuthData = await getToken(username, password);
    if (authData.token) localStorage.setItem("token", authData.token);
}

export { authUser, getToken };
