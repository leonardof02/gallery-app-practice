import React from "react";
import Image from "next/image";

import Picture from "../../models/Picture";

import styles from "./Picture.module.css";
import Link from "next/link";

interface Props extends Picture {};

export default function PictureItem({ description, id }: Props) {
    return (
        <Link className={styles.container} href={`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture/${id}`}>
            <Image
                className={styles.image}
                alt="Gallery Image"
                src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture/${id}`}
                objectFit="cover"
                fill
            />
            <div className={styles.descriptionContainer}>
                <p>{description}</p>
            </div>
        </Link>
    );
}
