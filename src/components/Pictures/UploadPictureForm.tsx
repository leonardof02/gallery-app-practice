import React, { FormEvent } from "react";

import styles from "../Authentication/AuthForm.module.css";
import buttonStyles from "../Button.module.css";
import { uploadPicture } from "@/services/PictureService";
import { useRouter } from "next/router";

export default function UploadPictureForm() {

    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const pictureData = new FormData(event.target as HTMLFormElement);
        const response = await uploadPicture(pictureData);
        router.push("/");
    }

    return (
        <div className={styles.center}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Log In</h3>
                <div className={styles.inputContainer}>
                    <label htmlFor="username">Choose a Picture</label>
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
                    <label htmlFor="description">Album Name</label>
                    <input type="text" placeholder="Album" name="album" id="album" />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="description">Picture URL</label>
                    <input type="url" placeholder="URL" name="url" id="url" />
                </div>
                <input
                    type="submit"
                    value="Upload Picture"
                    className={`${buttonStyles.button} ${buttonStyles.primary}}`}
                ></input>
            </form>
        </div>
    );
}
