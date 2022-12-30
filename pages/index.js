import React, { Component, useState, useEffect } from "react";
import Button from "../components/Button";
import Post from "../components/HomeComponent";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { variants } from "./_app.js";
import { Label } from "../components/BasicComponent";
import { postsLists } from "./_app.js";

const Home = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [startUpLogo, setStartUpLogo] = useState(false);
    const [startUpText, setStartUpText] = useState(false);

    useEffect(() => {
        // console.log(scrollPos);
        const onScroll = (e) => {
            // setScrollPos(e.target.documentElement.scrollTop);
            setScrollPos(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollPos]);

    useEffect(() => {
        setStartUpLogo(true);
        setStartUpText(true);
    }, []);

    return (
        <>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "linear" }}
                className="
                flex flex-col items-start w-full pt-10
                px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                pt-24 h-full
            "
            >
                <div className="App">
                    <div className={styles.home}>
                        {/* <div className={styles.hero}>
                            <Button text="Download now" style={{ fontWeight: "bold", backgroundColor: "violet" }} />
                        </div> */}
                        <div className="introSection">
                            <img src="/static/Logo.svg" />
                            <div className="welcomeText">A popular arcade rhythm game</div>
                        </div>
                        <div className="postContainer">
                            <Label label="Changelogs" />
                            <div className="postWrapper">
                                <div className={styles.postGrid}>
                                    {postsLists.slice(0, 4).map((p, idx) => {
                                        return (
                                            <Link href="/forum" key={idx}>
                                                <Post postInfo={p} />
                                            </Link>
                                        );
                                    })}
                                </div>
                                <Link href="/forum">
                                    <div className="readMore">read more</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        .App {
                            width: 1000px;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;

                            gap: 20px;
                        }

                        .introSection {
                            width: calc(100vw - 20px);
                            height: calc(100vh - 90px);

                            padding: 100px;

                            border-radius: 30px;
                            background: linear-gradient(90deg, rgba(0 0 0 /0.4), #000 90%), url("./static/default.png") center/cover;

                            backdrop-filter: blur(20px);
                            box-shadow: 0 2px 5px rgba(0 0 0 /0.5);

                            display: flex;
                            flex-wrap: wrap;
                            align-content: center;
                            justify-content: flex-end;

                            overflow: hidden;
                        }

                        .welcomeText {
                            width: 100%;
                            font-size: 50px;
                            font-weight: 500;

                            text-align: right;

                            opacity: ${startUpText ? "1" : "0"};
                            transform: translateX(${startUpText ? "0" : "1000px"});

                            transition: cubic-bezier(0.03, 0.16, 0.25, 1) 800ms 300ms;
                        }

                        .introSection img {
                            width: 700px;

                            opacity: ${startUpText ? "1" : "0"};
                            transform: translateX(${startUpLogo ? "0" : "1000px"});

                            transition: cubic-bezier(0.03, 0.16, 0.25, 1) 600ms 500ms;
                        }

                        .postContainer {
                            width: 100%;

                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                        }

                        .readMore {
                            padding: 10px 20px;

                            font-size: 14px;
                            font-family: Torus;
                            font-weight: 400;

                            background-color: #242424;
                            border-radius: 20px;
                        }

                        .readMore:hover {
                            background-color: #363636;
                        }

                        .postWrapper {
                            width: 100%;

                            display: flex;
                            justify-content: center;
                            flex-wrap: wrap;
                            gap: 20px;

                            background-color: #151515;
                            padding: 30px;

                            border-radius: 20px;
                        }
                    `}</style>
                </div>
            </motion.main>
        </>
    );
};

export default Home;
