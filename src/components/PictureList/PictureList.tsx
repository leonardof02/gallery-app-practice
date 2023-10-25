import { useEffect, useState } from "react";

import styles from "@/components/PictureList/Picture.module.css";

import { getAllPictures } from "@/services/PictureService";
import Picture from "@/models/Picture";
import PictureItem from "./Picture";
import { usePictures } from "./hooks/usePictures";

export default function PictureList() {
    
    const { pictures, error } = usePictures();

    return (
        <div className={styles.gridImages}>
            {pictures.map((picture, index) => (
                <PictureItem key={index} {...picture} />
            ))}
            { error && <p>{error.message}</p> }
        </div>
    );
}
