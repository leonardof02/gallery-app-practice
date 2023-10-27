import { useState } from "react";

export function usePictureValidation() {
    const [error, setError] = useState<string | null>(null);

    function isNotEmpty(text: string) {
        if (text.length != 0)
            setError(null);
        else
            setError("All fields are required");
    }
    
    return {
        error,
        isNotEmpty,
    };
}
