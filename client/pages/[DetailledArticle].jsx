import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Axios from "Axios";
import Image from "next/image";
import Link from "next/link";
import css from "../styles/Pages/DetailledArticle.module.scss";

import { v4 } from "uuid";
import { LoginContext } from "../context/LoginContext";
import img from "../public/assets/images/img00.jpg";

export default function DetailledArticle() {
    const { user, setUser, userName, setUserName } = useContext(LoginContext);

    const router = useRouter();

    const slugID = Object.values(router.query);

    const [article, setArticle] = useState({});

    const [commentary, setCommentary] = useState("");

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

    const addCommentary = async () => {
        const time = new Date();
        console.log(time);
        const comID = v4();
        let pseudo = "michel";
        const articleID = String(slugID);
        console.log("1");

        if(user === null && userName === null){
            alert('Please Log In or Sign Up before commenting !')
        }

        console.log("2");
      

        Axios.post("http://localhost:3001/NewCommentary", {
            time: time,
            comID: comID,
            commentary: commentary,
            pseudo: pseudo,
            articleID: slugID,
        }).then(() => {
            try {
                console.log("3");
                alert("Commentaire Added");
                setCommentary("");
            } catch (error) {
                console.log(error.message);
            }
        });
    };

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
                                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                                  />
                              </div>
                          ))
                        : ""}
                </div>
            </div>

            <div className={css.commentary_section}>
                <label>
                    <input
                        onChange={(e) => setCommentary(e.target.value)}
                        type="text"
                        value={commentary}
                    />
                    <button onClick={addCommentary} type="button">
                        Commenter
                    </button>
                </label>
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
