import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import PictureItem from "../components/PictureList/Picture";

import styles from "@/components/PictureList/Picture.module.css";

import Picture from "../models/Picture";
import { getAllPictures } from "@/services/PictureService";
import PictureList from "@/components/PictureList/PictureList";

export default function IndexHome() {
    
    const [pictures, setPictures] = useState<Picture[]>([]);

    // useEffect(() => {
    //     getAllPictures().then((pictures) => {
    //         setPictures(pictures);
    //     });
    // }, []);

    return (
        <MainLayout>
            <PictureList />
        </MainLayout>
    );
}
