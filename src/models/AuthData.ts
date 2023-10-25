export default interface AuthData {
    token: string;
    expiration?: string
}

// Default value
export const defaultAuthData = {
    token: "",
    expiration: "",
}