import Response from "@/models/Response";
import { authUser } from "./AuthService";
import { ValidationError } from "@/models/ValidationError";

export async function registerUser(username: string, password: string) {
    const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/Authenticate/register`, fetchOptions);
    if( response.status == 401 )
        throw new Error("Registration Error")

    const data: Response = await response.json();
    if( response.status != 200 ) {
        const error = new Error(data.message) as ValidationError;
        throw error;
    }
}