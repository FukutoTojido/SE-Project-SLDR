import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import { useAuth } from "../context/auth";
import { setCookie } from "cookies-next";

const UserNav = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const menu = useRef(null);
    const nav = useRef(null);
    const router = useRouter();

    const checkMenuState = (e) => {
        if (menu.current && !menu.current.contains(e.target)) setShowMenu(false);
        if (nav.current && nav.current.contains(e.target)) {
            if (menu.current && !menu.current.contains(e.target)) setShowMenu(false);
            else if (!menu.current) setShowMenu(true);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", checkMenuState);
        return () => {
            document.removeEventListener("mousedown", checkMenuState);
        };
    }, []);

    return (
        <div className="userNavContainer">
            <div className="userNav" ref={nav}>
                <img className={styles.userAvatar} src={`${props.auth.userAvatarURL}`} alt="User Avatar" />
                <div className={styles.userText}>
                    <div className={styles.userName}>{props.auth.userName}</div>
                    <div className={styles.userRating}>rating: {props.auth.userRating}</div>
                </div>
            </div>

            {showMenu ? (
                <div className="userMenu" ref={menu}>
                    <Link href={`/users/${props.auth.userId}`}>
                        <div
                            className="option"
                            onClick={() => {
                                if (showMenu) setShowMenu(false);
                            }}
                        >
                            my profile
                        </div>
                    </Link>
                    <div
                        className="option warning"
                        onClick={() => {
                            if (showMenu) setShowMenu(false);

                            // updateAuth({});
                            setCookie("authData", "{}");

                            router.reload("/");
                        }}
                    >
                        log out
                    </div>
                </div>
            ) : (
                ""
            )}

            <style jsx>{`
                .userNavContainer {
                    position: absolute;
                    right: 0;
                    bottom: 10px;

                    width: 150px;
                    height: 50px;
                }

                .userNav {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    padding: 10px;

                    display: flex;
                    gap: 9px;
                    align-items: center;

                    background-image: linear-gradient(0deg, rgb(0 0 0 /0.8), rgba(0 0 0 /0.8)), url(${props.auth.userCoverURL});
                    background-size: cover;
                    border-radius: 10px;

                    user-select: none;
                }

                .userNav:hover {
                    background-image: linear-gradient(90deg, rgb(0 0 0) 30%, rgba(0 0 0 /0.5)), url(${props.auth.userCoverURL});
                    outline: solid 2px white;
                }

                .userMenu {
                    position: absolute;
                    top: calc(100% + ${props.scrolled ? 15 : 5}px);
                    left: 0px;

                    width: 100%;

                    padding: 10px;
                    background-color: #151515;
                    border-radius: 10px;

                    transition: ease-in-out 200ms;
                }

                .option {
                    font-size: 13px;
                    padding: 5px 10px;
                    margin: 5px 0px;

                    font-weight: 500;

                    user-select: none;
                    border-radius: 5px;
                }

                .option:hover {
                    background-color: #404040;
                }

                .warning:hover {
                    background-color: #dd4352;
                    color: #151515;
                    font-weight: 700;
                }
            `}</style>
        </div>
    );
};

const Header = (props) => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        // console.log(scrollPos);
        const onScroll = (e) => {
            // setScrollPos(e.target.documentElement.scrollTop);
            setScrollPos(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollPos]);

    return (
        <div className="headerWrapper">
            <div className="headerBackground"></div>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}></div>
                <div className={styles.headerNav}>
                    <Link href="/" className={styles.navSelection}>
                        home
                    </Link>
                    <Link href="/forum" className={styles.navSelection}>
                        forum
                    </Link>
                    {JSON.stringify(props.authData) !== "{}" ? (
                        <Link href="/settings" className={styles.navSelection}>
                            settings
                        </Link>
                    ) : (
                        ""
                    )}

                    {/* <div className="searchIcon">
                        <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/search--v1.png" />
                    </div> */}
                </div>
                {JSON.stringify(props.authData) !== "{}" ? (
                    <UserNav scrolled={scrollPos} auth={props.authData}/>
                ) : (
                    <Link href="/login">
                        <div className={styles.loginText}>login</div>
                    </Link>
                )}
            </div>
            <style jsx>
                {`
                    .headerWrapper {
                        position: fixed;
                        width: 100%;
                        height: 70px;

                        z-index: 999;
                    }

                    .headerBackground {
                        position: fixed;
                        width: 100%;
                        height: 70px;

                        opacity: ${Math.min(scrollPos / 35, 1)};
                        /* background: linear-gradient(0deg, rgb(0 0 0 /0.4), rgba(0 0 0 /0.4)), url("/static/default.png");*/
                        background-color: #151515;
                        box-shadow: 0 2px 5px rgb(0 0 0 / ${Math.min(scrollPos / 35, 0.5)});

                        transition: ease-in-out 200ms;
                    }
                    .searchIcon {
                        position: relative;
                        padding: 10px 0px;
                        user-select: none;
                    }
                    .searchIcon img {
                        width: 20px;
                    }

                    .searchIcon::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;

                        margin-inline: auto;

                        width: 0%;
                        height: 3px;

                        background-color: white;
                        border-radius: 3px;
                        transition: ease-in-out 100ms;
                    }

                    .searchIcon:hover::after {
                        width: 100%;
                    }
                `}
            </style>
        </div>
    );
};

export default Header;
