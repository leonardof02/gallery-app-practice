import React from "react";
import Image from "next/image";

import styles from "./PictureDetails.module.css";
import Link from "next/link";

interface Props {
    imageUrl: string;
    description: string;
    album: string;
    url: string;
}

export default function PictureDetails({ imageUrl, description, album, url }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Link className={styles.imageContainer} href={imageUrl}>
                    <Image src={imageUrl} alt="Picture" objectFit="cover" fill />
                </Link>
                <h4 className={styles.detailsTitle}>Details</h4>
                <ul className={styles.stack}>
                    <li className={styles.listItem}>
                        <div className={styles.label}>Description</div>
                        <div>{description}</div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.label}>Album</div>
                        <div>{album}</div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.label}>URL</div>
                        <div>{url}</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
