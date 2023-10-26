import Picture from "@/models/Picture";
import Response from "@/models/Response";
import { request } from "http";

async function getAllPictures(): Promise<Picture[]> {
    const requestInit: RequestInit = {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture`, requestInit);
    if (response.status == 401) throw new Error("Authentication Error, please Log In or Sign up");
    const data = await response.json();
    return data;
}

async function uploadPicture(picture: FormData): Promise<Response> {
    console.log(picture);
    const requestInit: RequestInit = {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: picture,
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture`, requestInit);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

export { getAllPictures, uploadPicture };
