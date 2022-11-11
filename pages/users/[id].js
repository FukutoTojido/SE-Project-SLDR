import React, { Component, useState, useEffect } from "react";
import { UserInfo, StatisticDetail, PinnedPlay, AboutMe, PlayHistory } from "../../components/UsersComponent";
import { motion } from "framer-motion";
import { variants } from "../_app";
import Head from "next/head";
import { LoadingAnimation } from "../../components/BasicComponent";

const UserpageContent = (props) => {
    const [userData, setUserData] = useState(props.userData);

    useEffect(() => {
        setUserData(props.userData);
    });

    if (userData !== undefined)
        return (
            <>
                <Head>
                    <title>{`${userData.userInfo.userName} • Sl::dr Profile`}</title>
                </Head>
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
                        <UserInfo playerInfo={userData.userInfo} />
                        <div className="leftSection">
                            <StatisticDetail statisticDetail={userData.statisticDetail} />
                            <PinnedPlay pinnedPlay={userData.pinnedPlay} />
                        </div>
                        <AboutMe aboutMe={userData.aboutMe} />
                        <PlayHistory playHistory={userData.playHistory} />
                        <style jsx>
                            {`
                                .App {
                                    display: flex;
                                    flex-wrap: wrap;
                                    align-content: flex-start;

                                    gap: 20px 10px;
                                }

                                .leftSection {
                                    width: 300px;

                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 20px;
                                }
                            `}
                        </style>
                    </div>
                </motion.main>
            </>
        );
};

const Userpage = (props) => {
    const [userData, setUserData] = useState(undefined);

    useEffect(() => {
        if (props.data.dataType === "users") setUserData(props.data);
    });

    if (userData !== undefined) {
        if (userData.userInfo !== undefined) return <UserpageContent userData={userData} />;
        else
            return (
                <div className="App">
                    <div className="notFound">
                        <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/user-not-found.png" />
                        <div className="header">User not found!</div>
                        The user might not exist or have been restricted and cannot be displayed. <br></br>
                        Imagine being banned lol get rekt.
                        <style jsx>
                            {`
                                .notFound {
                                    width: 100%;

                                    padding: 30px;

                                    background-color: #151515;
                                    border-radius: 20px;

                                    text-align: center;
                                }
                                .header {
                                    font-size: 2em;
                                    font-weight: 700;
                                }
                            `}
                        </style>
                    </div>
                </div>
            );
    } else {
        return <LoadingAnimation />;
    }
};

export default Userpage;
