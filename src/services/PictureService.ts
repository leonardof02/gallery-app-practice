import Picture from "@/models/Picture";

async function getAllPictures(): Promise<Picture[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture`);
    if( response.status == 401 )
        throw new Error("Authentication Error, please Log In or Sign up");
    const data = await response.json();
    return data;
}

export { getAllPictures };