import { useState, useEffect } from "react";
import Picture from "@/models/Picture";
import { getAllPictures } from "@/services/PictureService";

export function usePictures() {
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getAllPictures()
            .then((pictures) => {
                setPictures(pictures);
                setIsLoading(false);
                setError(null);
            })
            .catch((error: any) => {
                setError(error);
            });
    }, []);

    return { pictures, setPictures, isLoading, error };
}
