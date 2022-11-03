import React, { Component } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

class UserNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 8266808,
            userName: "skill issue",
            userRating: 0,
        };
    }

    render() {
        const backgroundURL = `url('./users/${this.state.userId}.jpg')`
        const avatarURL = `https://a.ppy.sh/${this.state.userId}`;
        return (
            <div className="userNav">
                <img className={styles.userAvatar} src={avatarURL} alt="User Avatar" />
                <div className={styles.userText}>
                    <div className={styles.userName}>{this.state.userName}</div>
                    <div className={styles.userRating}>rating: {this.state.userRating}</div>
                </div>
                <style jsx>{`
                    .userNav {
                        position: absolute;
                        right: 0;
                        bottom: 25px;

                        width: 150px;
                        height: 50px;
                        padding: 10px;

                        display: flex;
                        gap: 9px;
                        align-items: center;

                        background-image: linear-gradient(0deg, rgb(0 0 0 /.8), rgba(0 0 0 /.8)), ${backgroundURL};
                        background-size: cover;
                        border-radius: 10px;

                        transition: ease-in-out 100ms;
                    }

                    .userNav:hover {
                        background-image: linear-gradient(0deg, rgb(0 0 0 /.5), rgba(0 0 0 /.5)), ${backgroundURL};
                        outline: solid 3px white;
                    }
                `}</style>
            </div>
        );
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorizedStatus: {
                isAuthorized: true,
                userId: 8266808,
            },
        };
    }

    render() {
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
                {this.state.authorizedStatus.isAuthorized ? (
                    <Link href="/users">
                        <UserNav />
                    </Link>
                ) : (
                    <Link href="/settings" className={styles.loginText}>
                        login
                    </Link>
                )}
            </div>
        );
    }
}

export default Header;
