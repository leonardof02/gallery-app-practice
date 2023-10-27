import PictureDetails from "@/components/Pictures/PictureDetails";
import MainLayout from "@/components/layouts/MainLayout";
import Picture from "@/models/Picture";
import { getPictureById } from "@/services/PictureService";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Picture() {
    const [picture, setPicture] = useState<Picture>();
    const router = useRouter();
    const { id } = router.query!;

    useEffect(() => {
        getPictureById(parseInt(id as string))
            .then((picture) => {
                setPicture(picture);
            })
            .catch((error) => console.log(error));
            
    });

    return (
        <MainLayout>
            {picture && (
                <PictureDetails
                    album={picture.album}
                    description={picture.description}
                    url={picture.url}
                    imageUrl={`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture/${id}`}
                />
            )}
        </MainLayout>
    );
}
