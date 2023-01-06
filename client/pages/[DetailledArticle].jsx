import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "Axios";
import Image from "next/image";
import Link from "next/link";
import css from "../styles/Pages/DetailledArticle.module.scss";

import img from "../public/assets/images/img00.jpg";
export default function DetailledArticle() {
    const router = useRouter();

    const slugID = Object.values(router.query);

    const [article, setArticle] = useState({});



    useEffect(() => {
        Axios.put("http://localhost:3001/fetchOneArticle", {
            id: slugID,
        }).then((response) => {
            try {
                setArticle(response.data);
            } catch (error) {
                console.log(error);
            }
        });
    }, []);

    return (
        <div>
            <div className={css.global_container}>
                <div className={css.image_container}>
                    <Image
                        className={css.image_card}
                        src={img}
                        alt="image blog"
                        fill
                    />
                </div>
                <div className={css.data_container}>
                    <h4> {article.date}</h4>

                    <h1>{article.title} </h1>

                    <h3>{article.description}</h3>

                    <p>{article.text}</p>
                </div>
                <div className={css.images_container}>
                    {article.image
                        ? article.image.map((img, index) => (
                              <div
                                  className={css.image_container_mini}
                                  key={index}
                              >
                                  <Image
                                      className={css.image}
                                      src={img.url}
                                      alt="image"
                                      fill
                                  />
                              </div>
                          ))
                        : ""}
                </div>
            </div>

            <div>
                <Link href={"/"}>
                    <button> Retour</button>
                </Link>
            </div>
        </div>
    );
}

//  author, date , description , text  , title
