import Head from "next/head";
import Image from "next/image";
import css from "../styles/Pages/Index.module.scss";
import AddArticle from "../Components/AddArticle";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import FirebaseAuthService from "../Firebase/FirebaseAuthService";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Home() {
    const { user, setUser, formOn, setFormOn, userName, setUserName } =
        useContext(LoginContext);
        const router = useRouter()
    const toggleForm = () => {
        setFormOn(!formOn);
    };

    const logOut = () => {
        FirebaseAuthService.logoutUser();
    };

    const toaster = () => {
        toast.success(`Bye `, {
            autoClose: 2000,
            theme: "colored",
            closeOnClick: true,
            pauseOnHover: false,
        });
    };

    useEffect(() => {
        router.push('/AllArticles')
    }, []) 
 
    
    return (
        <div className={css.container}>
                <Head>
                    <title>Le Blog.</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div></div>
                {user ? (
                    <Link href={"/NewArticle"}>
                        <button> New article</button>
                    </Link>
                ) : (
                    ""
                )}

                <Link href={"/AllArticles"}>
                    <button> All Articles</button>
                </Link>

          
        </div>
    );
}
