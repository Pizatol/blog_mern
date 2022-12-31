import "../styles/globals.css";

import React, { useState } from "react";
import LoginForm from "../Components/LoginForm.jsx";
import { db } from "../../server/Models/model";
import { LoginContext } from "../context/LoginContext";
import NavBar from "../Components/NavBar";

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(null);
    const [formOn, setFormOn] = useState(false);
    const [userName, setUserName] = useState(null);
    return (
        <LoginContext.Provider
            value={{ user, setUser, formOn, setFormOn, userName, setUserName }}
        >
            <LoginForm />
            <NavBar/>
            <Component {...pageProps} />;
        </LoginContext.Provider>
    );
}

export default MyApp;
