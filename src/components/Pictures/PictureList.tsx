import styles from "./Picture.module.css";
import PictureItem from "./Picture";
import { usePictures } from "./hooks/usePictures";
import { useAuth } from "../Authentication/hooks/useAuth";

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
