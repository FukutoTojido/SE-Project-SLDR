import { useRouter } from "next/router";
import React, { Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "../_app";
import { ChartDetail } from "../../components/ChartComponent";
import Head from "next/head";

const mapsList = {
    1: {
        mapId: 1,
        mapArtist: "Chaos City Niigata",
        mapTitle: "Ebicha no Shashin-ki",
        mapCoverURL: "/static/maps/1.png",
        mapDifficulties: [
            {
                mapCategory: "MASTER",
                mapDifficulty: "13+",
                noteCounts: 0,
                holdCounts: 0,
                bpm: 132,
            },
        ],
    },
};

const ChartPage = () => {
    const router = useRouter();
    const [setId, setSetId] = useState(0);

    useEffect(() => {
        if (!router.isReady) return;
        setSetId(router.query.s_id);
    });

    if (setId !== 0)
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
                    <ChartDetail setData={mapsList[setId]} />
                </div>
            </motion.main>
        );
};

export default ChartPage;
