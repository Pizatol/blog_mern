import React, { useState, useEffect } from "react";
import css from "../styles/Pages/AllArticles.module.scss";
import Axios from "Axios";
import Link from "next/link";
import Article_mini from "../Components/Article_mini";

import formattedDate from "../Components/formattedDate";

export default function AllArticles() {
    const [allArticles, setAllArticles] = useState([]);

    const [date, setDate] = useState(undefined);

    useEffect(() => {
        Axios.get("http://localhost:3001/fetchArticles").then((response) => {
            try {
                setAllArticles(response.data);
            } catch (error) {
                console.log(error);
            }
        });
    }, []);

    // DELETE
    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
            setAllArticles(allArticles.filter((val) => val._id !== id));
        });
    };

    return (
        <div className={css.global_container}>
            <Link href={"/"}>
                <button>Retour</button>
            </Link>

            <div className={css.articles_container}>
                {allArticles.map((item, index) => (
                    <Article_mini
                        title={item.title}
                        description={item.description}
                        text={item.text}
                        id={item._id}
                        author={item.author}
                        date={item.date}
                        image = {item.image}
                        key={index}
                        allArticles = {allArticles}
                        setAllArticles = {setAllArticles}
                    />
                ))}
            </div>
        </div>
    );
}
