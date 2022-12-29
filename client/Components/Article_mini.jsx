import React from "react";
import css from "../styles/Components/Article_mini.module.scss";
import Button_main from "./Buttons/Button_main";
import Image from "next/image";

import img2 from "../public/assets/images/img2.jpg";

export default function Article_mini({
    title,
    description,
    text,
    id,
    author,
    date,
}) {
    return (
        <div className={css.global_container}>
            <div className={css.left_part_card}>
                <Image
                    className={css.image_card}
                    src={img2}
                    alt="image blog"
                    fill
                />
            </div>
            <div className={css.right_part_card}>
             <h4>{date} </h4>
                <h2> {title} </h2>
                <h3> {description} </h3>
                <Button_main color={"orange"} name={"Read More"} />
            </div>
        </div>
    );
}
