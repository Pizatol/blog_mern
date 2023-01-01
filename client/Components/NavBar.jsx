import css from "../styles/Components/NavBar.module.scss";
import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import FirebaseAuthService from "../Firebase/FirebaseAuthService";

import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function NavBar() {
    const { user, setUser, formOn, setFormOn, userName, setUserName } =
        useContext(LoginContext);
    FirebaseAuthService.subscribeToAuthChanges(setUser);

    const router = useRouter()
    const toggleForm = () => {
        setFormOn(!formOn);
    };

    const logOut = () => {
        FirebaseAuthService.logoutUser();
        router.push("/");
        toast.success(`Bye} `, {
            autoClose: 2000,
            theme: "colored",
            closeOnClick: true,
            pauseOnHover: false,
        });
    };

    return (
        <div className={css.global_container}>
            <div className={css.left}>
                {user ? (
                    <div>
                        <h3>
                            welcome,{" "}
                            <span className={css.userName}> {userName}</span>{" "}
                        </h3>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className={css.middle}>
                <h1>Le Blog</h1>
            </div>
            <div className={css.right}>
                {user ? (
                    <button onClick={logOut}> Log out</button>
                ) : (
                    <button onClick={toggleForm}> Log</button>
                )}
            </div>
        </div>
    );
}
