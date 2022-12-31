import css from "../styles/Components/NavBar.module.scss";
import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import FirebaseAuthService from "../Firebase/FirebaseAuthService";
import { Auth } from "firebase/auth";

export default function NavBar() {
    const { user, setUser, formOn, setFormOn, userName, setUserName } =
        useContext(LoginContext);
    FirebaseAuthService.subscribeToAuthChanges(setUser);
    const toggleForm = () => {
        setFormOn(!formOn);
    };

    const logOut = () => {
        FirebaseAuthService.logoutUser();
    };

    return (
        <div className={css.global_container}>
            <div className={css.left}>
                {user ? (
                    <div>
                        <h3>Welcome {userName}</h3>
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
