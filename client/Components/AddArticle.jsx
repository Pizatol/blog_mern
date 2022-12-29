import React, { useState, useEffect } from "react";
import css from "../styles/Components/AddArticle.module.scss";
import Axios from "Axios";
import Button_main from "./Buttons/Button_main";
export default function AddArticle() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [text, setText] = useState("");

    const [articlesList, setArticlesList] = useState([]);

    const addArticle = async (e) => {
        e.preventDefault();

        Axios.post("http://localhost:3001/addArticle", {
            title: title,
            description: description,
            text: text,
        })
            .then(() => {
                try {
                    alert("Yeah it worked");
                    setTitle("");
                    setDescription("");
                    setText("");
                } catch (error) {
                    console.log(error);
                }
            })
            .then((response) => {
                try {
                    setArticlesList([
                        ...articlesList,
                        {
                            // _id: response.data.id,
                            title: title,
                            description: description,
                            text: text,
                        },
                    ]);
                } catch (error) {
                    console.log(error);
                }
            });
    };

    return (
        <div className={css.form_container}>
            <form>
                <h2 className={css.title_form}>New Article</h2>
                <div className={css.input}>
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                    />
                </div>
                <div className={`${css.input} ${css.description_textarea}`}>
                    <label> Description</label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <div className={`${css.input} ${css.text_textarea}`}>
                    <label> Text</label>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    ></textarea>
                </div>
               
                <Button_main
                    name={"Submit"}
                    color={"blue"}
                    foo={(e) => addArticle(e)}
                />
            </form>
        </div>
    );
}
