import React, { useState, useEffect } from "react";
import css from "../styles/Components/AddArticle.module.scss";
import Axios from "Axios";
import Button_main from "./Buttons/Button_main";

import formattedDate from "./formattedDate";

export default function AddArticle() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState(undefined);
    const [author, setAuthor] = useState("");
    const [articlesList, setArticlesList] = useState([]);

    const addArticle = async (e) => {
        e.preventDefault();

        const dateFormated = formattedDate();

        if(title !== "" && description !=="" && text !== "" && author !== "" ){

        

        Axios.post("http://localhost:3001/addArticle", {
            title: title,
            description: description,
            text: text,
            author: author,
            date: dateFormated,
        })
            .then(() => {
                try {
                    alert("Yeah it worked");
                    setTitle("");
                    setDescription("");
                    setText("");
                    setDate(undefined);
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
        } else {
            alert('Please complete the form')
            return;
        }
    };

    return (
        <div className={css.form_container}>
            <form>
                <h2 className={css.title_form}>New Article</h2>
                <div className={css.input}>
                    <label
                    required
                    >Author</label>
                    <input
                        required
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        value={author}
                    />
                </div>
                <div className={css.input}>
                    <label>Title</label>
                    <input
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                    />
                </div>
                <div className={`${css.input} ${css.description_textarea}`}>
                    <label> Description</label>
                    <textarea
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <div className={`${css.input} ${css.text_textarea}`}>
                    <label required> Text</label>
                    <textarea
                        required
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

// Lorem ipsum dolor sit amet.

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa dolorem facilis sapiente maxime dolore repudiandae pariatur quisquam sunt animi et nulla aliquam atque perspiciatis, laudantium quae nisi omnis deserunt.

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!
