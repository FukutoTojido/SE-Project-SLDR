import { useRouter } from "next/router";
import React, { Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "../../_app";
import { ChartDetail, Leaderboard, ReportPopup } from "../../../components/ChartComponent";
import Head from "next/head";
import { mapsList } from "../../_app";

const ChartPage = () => {
    const router = useRouter();
    const [setId, setSetId] = useState(0);
    const [mapDifficulty, setMapDifficulty] = useState("");
    const [showReportPopup, setShowReportPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    useEffect(() => {
        if (!router.isReady) return;
        setSetId(router.query.s_id);
        setMapDifficulty(router.query.difficulty);
    });

    if (setId !== 0 && mapDifficulty !== "") {
        if (Object.keys(mapsList).includes(setId) && ["easy", "advanced", "expert", "master"].includes(mapDifficulty))
            return (
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
                            setData={mapsList[setId]}
                            mapDifficulty={mapsList[setId].mapDifficulties[mapDifficulty]}
                            showReportPopup={showReportPopup}
                            showDeletePopup={showDeletePopup}
                            setShowReporPopup={setShowReportPopup}
                            setShowDeletePopup={setShowDeletePopup}
                        />
                        <Leaderboard leaderboardList={mapsList[setId].mapLeaderboard} />
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
                    {showReportPopup ? <ReportPopup setShowReportPopup={setShowReportPopup}/> : ""}
                </motion.main>
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
    }
};

export default ChartPage;
