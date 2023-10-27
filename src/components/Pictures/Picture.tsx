import React from "react";
import Image from "next/image";

import Picture from "../../models/Picture";

import styles from "./Picture.module.css";
import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";
import { deletePictureById } from "@/services/PictureService";

interface Props extends Picture {
    onDelete: (id: number) => void;
}

export default function PictureItem({ description, id, onDelete }: Props) {
    
    async function handleDelete() {
        if (id) {
            await deletePictureById(id);
            onDelete(id);
        }
    }

    return (
        <div className={styles.container}>
            <Link href={`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture/${id}`}>
                <Image
                    className={styles.image}
                    alt="Gallery Image"
                    src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/Picture/${id}`}
                    objectFit="cover"
                    fill
                />
            </Link>
            <div className={styles.descriptionContainer}>
                <p>{description}</p>
                <div className={styles.controlsContainer}>
                    <MdEdit size={30} />
                    <button className={styles.deleteButton} onClick={handleDelete}>
                        <MdDelete size={30} color="red" />
                    </button>
                </div>
            </div>
        </div>
    );
}