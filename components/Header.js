import React, { Component, useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { authorizedStatus } from "../pages/_app";

const UserNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menu = useRef(null);
    const nav = useRef(null);

    const checkMenuState = (e) => {
        if (menu.current && !menu.current.contains(e.target)) setShowMenu(false);
        if (nav.current && nav.current.contains(e.target)) {
            if (menu.current && !menu.current.contains(e.target)) setShowMenu(false);
            else if (!menu.current) setShowMenu(true);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", checkMenuState);
    }, []);

    return (
        <div className="userNavContainer">
            <div className="userNav" ref={nav}>
                <img className={styles.userAvatar} src={`${authorizedStatus.authorizationInfo.userAvatarURL}`} alt="User Avatar" />
                <div className={styles.userText}>
                    <div className={styles.userName}>{authorizedStatus.authorizationInfo.userName}</div>
                    <div className={styles.userRating}>rating: {authorizedStatus.authorizationInfo.userRating}</div>
                </div>
            </div>

            {showMenu ? (
                <div className="userMenu" ref={menu}>
                    <Link href={`/users/${authorizedStatus.authorizationInfo.userId}`}>
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
                    bottom: 25px;

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

                    background-image: linear-gradient(0deg, rgb(0 0 0 /0.8), rgba(0 0 0 /0.8)),
                        url(${authorizedStatus.authorizationInfo.userCoverURL});
                    background-size: cover;
                    border-radius: 10px;

                    user-select: none;
                }

                .userNav:hover {
                    background-image: linear-gradient(90deg, rgb(0 0 0) 30%, rgba(0 0 0 /0.5)),
                        url(${authorizedStatus.authorizationInfo.userCoverURL});
                    outline: solid 2px white;
                }

                .userMenu {
                    position: absolute;
                    top: calc(100% + 5px);
                    left: 0px;

                    width: 100%;

                    padding: 10px;
                    background-color: #151515;
                    border-radius: 10px;
                }

                .option {
                    font-size: 13px;
                    padding: 5px 10px;
                    margin: 5px 0px;

                    user-select: none;
                    border-radius: 5px;
                }

                .option:hover {
                    background-color: #363636;
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

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogo}></div>
            <div className={styles.headerNav}>
                <Link href="/" className={styles.navSelection}>
                    home
                </Link>
                <Link href="/forum" className={styles.navSelection}>
                    forum
                </Link>
                <Link href="/settings" className={styles.navSelection}>
                    settings
                </Link>
            </div>
            {authorizedStatus.isAuthorized ? <UserNav /> : <div className={styles.loginText}>login</div>}
        </div>
    );
};

export default Header;
