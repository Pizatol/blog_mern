import React, { useContext } from "react";
import css from "../styles/Components/Article_mini.module.scss";
import Button_main from "./Buttons/Button_main";
import Image from "next/image";
import Link from "next/link";
import { LoginContext } from "../context/LoginContext";
import img2 from "../public/assets/images/img00.jpg";
import Axios from "Axios";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
    deleteObject,
} from "firebase/storage";
import { storage } from "../Firebase/FirebaseConfig";
import { useRouter } from "next/router";
import Button_readMore from "./Buttons/Button_readMore";

export default function Article_mini({
    title,
    description,
    text,
    id,
    author,
    date,
    image,
    allArticles,
    setAllArticles,
}) {
    const { user } = useContext(LoginContext);
    const router = useRouter();
    const imagesListRef = ref(storage, "images/");
    let first_preview_image = [];

    if (image.length > 0) {
        first_preview_image = image[0].url;
    }

    const handleDelete = (id) => {
        for (let e of image) {
            const imageSelectRef = ref(storage, `/images/${e.name}`);
            deleteObject(imageSelectRef)
                .then(() => {
                    console.log(imageSelectRef);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }

        Axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                setAllArticles(allArticles.filter((val) => val._id !== id));
            })
            .then(() => {
                router.push("/");
            });
    };

    return (
        <div className={css.global_container}>
            {/* <div className={css.left_part_card}>
                {first_preview_image.length > 0 ? (
                    <Image
                        className={css.image_card}
                        src={first_preview_image}
                        alt="image blog"
                        fill
                    />
                ) : (
                    <Image
                        className={css.image_card}
                        src={img2}
                        alt="image blog"
                        fill
                    />
                )}
            </div> */}
            <div className={css.right_part_card}>
                <h2> {title} </h2>
                <h3> {description} </h3>
                <div className={css.buttons_container}>
                    <Link href={{ pathname: `${id}` }}>
                        {/* <Button_main color={"orange"} name={"Read More"} /> */}
                        <Button_readMore />
                    </Link>
                    {user ? (
                        <button onClick={() => handleDelete(id)}>X</button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

// href={`${id}`
