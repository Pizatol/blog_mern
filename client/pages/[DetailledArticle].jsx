import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Axios from "Axios";
import Image from "next/image";
import Link from "next/link";
import css from "../styles/Pages/DetailledArticle.module.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { LoginContext } from "../context/LoginContext";
import { formattedDateWithSeconds } from "../Components/formatted_precise_date";
import img from "../public/assets/images/2.jpg";
import FirebaseAuthService from "../Firebase/FirebaseAuthService";

import ReactMarkdown from "react-markdown";
import Button_transparent from "../Components/Buttons/Button_transparent";

export default function DetailledArticle({ query }) {
    const { user, setUser, userName, setUserName } = useContext(LoginContext);

    const router = useRouter();
    // const searchParams = useSearchParams();

    let slugID = Object.values(router.query);

    let articleID = String(slugID);
    const [article, setArticle] = useState({});
    const [commentaries, setCommentaries] = useState([]);
    const [commentary, setCommentary] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // for (const [key, value] of searchParams) {
        //     slugID = value;
        //     console.log("SLUG", slugID);
        // }

        Axios.put("http://localhost:3001/fetchOneArticle", {
            id: slugID,
        })

            .then((response) => {
                try {
                    setArticle(response.data);
                    setLoading(true)
                } catch (error) {
                    console.log(error);
                }
            })
            .then(() => {
                setLoading(true);
            });

        Axios.put("http://localhost:3001/fetchCommentaries", {
            id: slugID,
        }).then((response) => {
            try {
                const filterCommentaries = response.data.filter(
                    (item) => item.articleID === articleID
                );

                setCommentaries(filterCommentaries.reverse());
            } catch (error) {
                console.log(error);
            }
        });
    }, []);

    const addCommentary = async () => {
        const time = formattedDateWithSeconds();
        const comID = v4();
        let pseudo = userName;
        const commentaryIndex = commentaries.length + 1;

        if (commentary.length < 3) {
            toast.info(` Please write a real comment! `, {
                autoClose: 2000,
                theme: "colored",
                closeOnClick: true,
                pauseOnHover: false,
            });
            return;
        }

        if (user === null && userName === null) {
            alert("Please Log In or Sign Up before commenting !");
        }

        Axios.post("http://localhost:3001/NewCommentary", {
            time: time,
            comID: comID,
            commentary: commentary,
            pseudo: pseudo,
            articleID: articleID,
            commentaryIndex: commentaryIndex,
        }).then(() => {
            try {
                toast.success(`Commentary uploaded ! `, {
                    autoClose: 2000,
                    theme: "colored",
                    closeOnClick: true,
                    pauseOnHover: false,
                });
                console.log("commentaire added !");
                setCommentary("");
            } catch (error) {
                console.log(error.message);
            }
        });
    };

    return (
        <div className={css.global}>
           
           <div>
           <Link href={'/'}>

            <Button_transparent name={"Retour"} />
           </Link>
           </div>
         
                
            {loading ? (    
                
          
            <div className={css.global_container}>
          
                <div className={css.image_container_upper}>
                    {loading === true && article.image && article.image.length > 0  ? (
                        <Image
                            className={css.image_card}
                            src={article.image[0].url}
                            alt="image blog"
                            fill
                        />
                    ) : (
                        <Image
                            className={css.image_card}
                            src={img}
                            alt="image blog"
                            fill
                            loading="lazy"
                        />
                    )}
                </div>
                <div className={css.data_container}>
                    <p>{article.author} </p>
                    <h4> {article.date}</h4>

                    <h1>{article.title} </h1>

                    <h3 className={css.description}>{article.description}</h3>
                        {/* MARKDOWN */}

                    <ReactMarkdown
                        children={article.text}
                        className={css.markdown}
                    />
                    <p></p>
                </div>
                <div className={css.images_container}>
                    {article.image
                        ? article.image.map((img, index) => (
                              <div
                                  className={css.image_container_mini}
                                  key={index}
                              >
                                  <a target="_blank" href={img.url}>
                                      <Image
                                          className={css.image}
                                          src={img.url}
                                          alt="image article"
                                          fill
                                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                                      />
                                  </a>
                              </div>
                          ))
                        : ""}
                </div>
            </div>
            ) : ''}
            {user && loading ? (
                <div className={css.commentary_section}>
                    <label className={css.commentary_section_label}>
                        <input
                            onChange={(e) => setCommentary(e.target.value)}
                            type="text"
                            value={commentary}
                            placeholder="Ajouter un commentaire"
                        />
                        <span className={css.commentary_section_bar}></span>
                        {/* <button
                            className={css.commentary_section_button}
                            onClick={addCommentary}
                            type="button"
                        >
                            Commenter
                        </button> */}
                    </label>
                        <Button_transparent name={'Commenter'} foo={addCommentary} />
                </div>
            ) : (
                ""
            )}

            <div className={css.commentaries_container}>
                {commentaries.map((com, index) => (
                    <div className={css.commentary} key={index}>
                        <h3>
                            {" "}
                            {com.pseudo} <span> ( {com.time} )</span>{" "}
                        </h3>
                        <p> {com.commentaryText} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// export const getStaticPaths = async () => {
//     const res = await fetch('http://localhost:3001/fetchArticles');
//     const { data } = await res.json();

//     const paths = data.map(user => {
//     return {
//     params: { id: user.id.toString() }
//     }
//     })
//     return {
//     paths,
//     fallback: false
//     }
//     }

//     export const getStaticProps = async (context) => {
//         const id = context.params.id;
//         const res = await fetch(`http://localhost:3001/${id}`);
//         const { data } = await res.json();
//         return {
//         props: { user: data }
//         }
//         }

// ******************
//     TRIER COMMENTAIRES AVEC LE commentaryIndex
// var numArray = [140000, 104, 99, 12, 50 , 300, 3, 5, 6];
// numArray.sort(function(a, b) {
//   return a - b;
// });
// console.log(numArray);
