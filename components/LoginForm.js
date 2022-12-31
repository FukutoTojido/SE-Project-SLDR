import React, { useRef, useState } from "react";
import { useAuth } from "../context/auth";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/LoginForm.module.css";
import { getCookies, setCookie } from "cookies-next";

const LoginForm = () => {
    const router = useRouter();
    const [err, setErr] = useState("");
    const { auth, updateAuth } = useAuth();
    const userRef = useRef();
    const passRef = useRef();

    async function handleLogin(e) {
        e.preventDefault();
        if (userRef.current.value && passRef.current.value) {
            const res = await axios.post("api/v1/auth", {
                username: userRef.current.value,
                password: passRef.current.value,
            });

            setCookie("authData", JSON.stringify(res.data));

            if (JSON.stringify(res.data) !== "{}") {
                setErr("");
                updateAuth(res.data);

                router.reload("/");
            } else {
                setErr("User does not exist");
            }
        } else {
            setErr("Username and Password must not be blank");
        }
    }

    return (
        <div className={styles.formBackground}>
            <form className={styles.loginForm}>
                {/*
                <button className={ styles.exitBtn} onClick={() => setIsOpen(false)}>
                    <CloseRoundedIcon />
                </button>
                 */}
                <h1 className={styles.h1}>Login</h1>

                <input className={styles.input} ref={userRef} placeholder="username" />
                <input className={styles.input} type="password" ref={passRef} placeholder="password" />
                {err && <p className={styles.err}>{err}</p>}
                <button
                    className={styles.loginBtn}
                    onClick={(e) => {
                        handleLogin(e);
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
