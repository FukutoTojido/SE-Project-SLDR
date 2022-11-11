import React, { Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "../../_app";
import { ChartDetail, Leaderboard, ReportPopup } from "../../../components/ChartComponent";
import Head from "next/head";
import { LoadingAnimation } from "../../../components/BasicComponent";

const ChartPage = (props) => {
    const [showReportPopup, setShowReportPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [setData, setSetData] = useState(undefined);

    useEffect(() => {
        if (props.data.dataType === "charts") setSetData(props.data);
    });

    if (setData !== undefined) {
        if (setData.mapId !== undefined && ["easy", "advanced", "expert", "master"].includes(setData.difficulty))
            return (
                <>
                    <Head>
                        <title>{`${setData.mapArtist} - ${setData.mapTitle} • Sl::dr Profile`}</title>
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
                            <ChartDetail
                                setData={setData}
                                mapDifficulty={setData.mapDifficulties[setData.difficulty]}
                                showReportPopup={showReportPopup}
                                showDeletePopup={showDeletePopup}
                                setShowReporPopup={setShowReportPopup}
                                setShowDeletePopup={setShowDeletePopup}
                            />
                            <Leaderboard leaderboardList={setData.mapLeaderboard} />
                            <style jsx>
                                {`
                                    .App {
                                        display: flex;
                                        flex-wrap: wrap;
                                        align-content: flex-start;

                                        gap: 20px 10px;
                                    }
                                `}
                            </style>
                        </div>
                        {showReportPopup ? <ReportPopup setShowReportPopup={setShowReportPopup} /> : ""}
                    </motion.main>
                </>
            );
        else {
            return (
                <div className="App">
                    <div className="notFound">
                        <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/error--v1.png" />
                        <div className="header">Chart not found!</div>
                        The Chart ID or Difficulty simply does not exist in the database. <br></br>
                        Ensure that you have input the correct URL.
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
        }
    } else {
        return <LoadingAnimation />;
    }
};

export default ChartPage;
