import React, { FormEvent } from "react";

import styles from "../Authentication/AuthForm.module.css";
import buttonStyles from "../Button.module.css";
import { uploadPicture } from "@/services/PictureService";
import { useRouter } from "next/router";
import { usePictureValidation } from "./hooks/usePictureValidation";
import Picture from "@/models/Picture";
import Alert from "../Alert";

export default function UploadPictureForm() {
    const router = useRouter();
    const { error, isNotEmpty } = usePictureValidation();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const pictureData = new FormData(event.target as HTMLFormElement);

        try {
            validateErrors(pictureData);
            const response = await uploadPicture(pictureData);
            router.back();
        } catch (err) {
            console.error(err);
        }
    }

    function validateErrors(pictureData: FormData) {
        const data = Object.fromEntries(pictureData.entries()) as unknown as Picture;
        isNotEmpty(data.description);
        isNotEmpty(data.album);
        isNotEmpty(data.url);
    }

    return (
        <div className={styles.center}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Upload Picture</h3>
                <div className={styles.inputContainer}>
                    <label htmlFor="file">Choose a Picture</label>
                    <input type="file" placeholder="Select File" name="picture" id="picture" />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        id="description"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="album">Album Name</label>
                    <input type="text" placeholder="Album" name="album" id="album" />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="url">Picture URL</label>
                    <input type="url" placeholder="URL" name="url" id="url" />
                </div>
                {error && <Alert text={error} />}
                <input
                    type="submit"
                    value="Upload Picture"
                    className={`${buttonStyles.button} ${buttonStyles.primary}}`}
                ></input>
            </form>
        </div>
    );
}
