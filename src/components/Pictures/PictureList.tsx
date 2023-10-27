import styles from "./Picture.module.css";
import PictureItem from "./Picture";
import { usePictures } from "./hooks/usePictures";
import { useAuth } from "../Authentication/hooks/useAuth";

export default function PictureList() {
    const { pictures, setPictures, error } = usePictures();

    function handleDelete(id: number) {
        setPictures(pictures.filter((picture) => picture.id != id));
    }

    return (
        <div className={styles.gridImages}>
            {pictures.map((picture, index) => (
                <PictureItem key={index} {...picture} onDelete={handleDelete} />
            ))}
            {error && <p>{error.message}</p>}
        </div>
    );
}
