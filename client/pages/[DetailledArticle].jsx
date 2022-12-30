import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "Axios";
import Image from 'next/image'

import css from '../styles/Pages/DetailledArticle.module.scss'

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
        <div className={css.global_container}>

        <div>
            IMAGE
        </div>

     
           
        </div>
    );
}


//  author, date , description , text  , title 