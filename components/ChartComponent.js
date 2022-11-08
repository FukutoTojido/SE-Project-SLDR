import React, { Component, useState, useEffect } from "react";
import { Label } from "./BasicComponent";
import Link from "next/link";

const Menu = () => {
    return (
        <div className="menuContainer">
            <div className="option">report problem</div>
            <div className="option warning">DELETE CHARTSET</div>
            <style jsx>{`
                .menuContainer {
                    width: 140px;
                    padding: 10px;
                    background-color: #151515;
                    border-radius: 10px;

                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                }

                .option {
                    width: 100%;
                    font-size: 12px;
                    font-weight: 500;

                    user-select: none;

                    padding: 5px;
                    border-radius: 5px;
                }

                .warning {
                    color: #dd4352;
                }

                .option:hover {
                    background-color: #404040;
                }

                .warning:hover {
                    color: #151515;
                    background-color: #dd4352;

                    font-weight: 700;
                }
            `}</style>
        </div>
    );
};

const ChartDetail = (props) => {
    const [mapData, setMapData] = useState({});
    const [difficulty, setDifficulty] = useState({});
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setMapData(props.setData);
        setDifficulty(props.mapDifficulty);
        setShowMenu(false);
    }, [props.mapDifficulty.mapCategory]);

    if (mapData !== {} && difficulty !== {})
        return (
            <div className="container">
                <Label label="Chart Detail"></Label>
                <div className={`chartDetailContainer ${difficulty.mapCategory}`}>
                    <div className="chartMetadata">
                        <div className="chartArtist">{mapData.mapArtist}</div>
                        <div className="chartTitle">{mapData.mapTitle}</div>
                        <div className={`chartDifficulty ${difficulty.mapCategory}`}>LEVEL {difficulty.mapDifficulty}</div>
                    </div>
                    <div className="difficultyNav">
                        {["EASY", "ADVANCED", "EXPERT", "MASTER"].map((d) => {
                            return (
                                <Link href={`/charts/${mapData.mapId}/${d.toLowerCase()}`} key={d}>
                                    <div className={`difficultyIcon ${difficulty.mapCategory === d ? "selected " + d : ""}`}>
                                        <img src={`/static/difficulties/${d.toLowerCase()}.svg`} />
                                        <span>{d.toLowerCase()}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mapStatistic">
                        {["bpm", "notesCount", "holdsCount"].map((s) => {
                            return (
                                <div className="statContainer" key={s}>
                                    <img src={`/static/statistic/${s}.png`} />
                                    <span>{difficulty[s]}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="menu">
                        <div
                            className="menuIcon"
                            onClick={() => {
                                showMenu ? setShowMenu(false) : setShowMenu(true);
                            }}
                        >
                            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/more.png" />
                        </div>
                        {showMenu ? <Menu /> : ""}
                    </div>
                </div>
                <style jsx>
                    {`
                        .container {
                            width: 100%;

                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                        }

                        .chartDetailContainer {
                            position: relative;

                            width: 100%;
                            height: 250px;

                            background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 20%, rgba(17, 17, 17, 0.5) 40%, rgba(21, 21, 21, 0.9) 100%),
                                url("${mapData.mapCoverURL}");
                            background-size: cover;
                            background-position: center;

                            border-radius: 20px;

                            display: flex;
                            align-items: center;
                        }

                        .chartDetailContainer:before {
                            content: "";
                            position: absolute;
                            left: -2px;

                            width: 4px;
                            height: 200px;

                            border-radius: 2px;
                        }

                        .chartDetailContainer.MASTER:before {
                            background-color: #d08770;
                            box-shadow: 0 0 5px #d08770;
                        }
                        .chartDetailContainer.EXPERT:before {
                            background-color: #bf616a;
                            box-shadow: 0 0 5px #bf616a;
                        }
                        .chartDetailContainer.ADVANCED:before {
                            background-color: #ebcb8b;
                            box-shadow: 0 0 5px #ebcb8b;
                        }
                        .chartDetailContainer.EASY:before {
                            background-color: #a3be8c;
                            box-shadow: 0 0 5px #a3be8c;
                        }

                        .chartMetadata {
                            margin: 30px;
                            font-weight: 400;
                            font-size: 24px;
                        }

                        .chartTitle {
                            font-weight: 700;
                            font-size: 36px;
                        }

                        .chartDifficulty {
                            font-weight: 500;
                        }

                        .chartDifficulty.MASTER {
                            color: #d08770;
                        }
                        .chartDifficulty.EXPERT {
                            color: #bf616a;
                        }
                        .chartDifficulty.ADVANCED {
                            color: #ebcb8b;
                        }
                        .chartDifficulty.EASY {
                            color: #a3be8c;
                        }

                        .difficultyNav {
                            position: absolute;
                            top: 0;
                            right: 0;

                            margin: 10px;
                            padding: 10px;

                            background-color: #151515;
                            border-radius: 15px;

                            display: flex;
                            justify-content: flex-end;
                            gap: 5px;
                        }

                        .difficultyIcon {
                            padding: 5px;

                            max-width: 30px;
                            height: 30px;

                            display: flex;
                            align-items: center;
                            overflow: hidden;

                            font-weight: 400;
                            font-size: 0px;
                            color: #151515;

                            border-radius: 8px;
                            transition: ease-in-out 200ms 200ms;
                        }

                        .difficultyIcon:hover {
                            background-color: #363636;
                            transition: ease-in-out 200ms;
                        }

                        .difficultyIcon img {
                            width: 20px;
                            height: 20px;
                        }

                        .difficultyIcon.selected {
                            max-width: 200px;
                            line-height: 30px;

                            font-size: 12px;

                            transition: ease-in-out 200ms;
                        }

                        .difficultyIcon span {
                            color: #151515;
                            font-weight: 500;
                            margin-inline: 15px;
                        }

                        .difficultyIcon.selected.MASTER {
                            background-color: #d08770;
                        }
                        .difficultyIcon.selected.EXPERT {
                            background-color: #bf616a;
                        }
                        .difficultyIcon.selected.ADVANCED {
                            background-color: #ebcb8b;
                        }
                        .difficultyIcon.selected.EASY {
                            background-color: #a3be8c;
                        }

                        .mapStatistic {
                            position: absolute;
                            top: 60px;
                            right: 0;

                            padding: 10px;
                            margin: 5px 10px;

                            display: flex;
                            justify-content: flex-end;
                            gap: 20px;

                            font-size: 12px;
                            font-weight: 500;

                            background-color: #151515;
                            border-radius: 10px;
                        }

                        .mapStatistic img {
                            width: 14px;
                        }

                        .statContainer {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                        }

                        .menu {
                            position: absolute;
                            right: 0;
                            bottom: 0;

                            margin: 10px;

                            display: flex;
                            flex-direction: row-reverse;
                            align-items: flex-end;
                            gap: 5px;
                        }

                        .menuIcon {
                            width: 30px;
                            height: 30px;

                            background-color: #151515;
                            border-radius: 10px;

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-wrap: wrap;

                            user-select: none;
                        }

                        .menuIcon img {
                            width: 12px;
                        }

                        .menuIcon:hover {
                            background-color: #363636;
                        }
                    `}
                </style>
            </div>
        );
};

const Leaderboard = (props) => {
    const [leaderboardList, setLeaderboardList] = useState([]);

    useEffect(() => {
        setLeaderboardList(props.leaderboardList);
    }, [props.leaderboardList]);

    return (
        <div className="container">
            <Label label="Leaderboard" />
            <div className="leaderboardContainer">
                <table>
                    <thead>
                        <tr>
                            <th>pos.</th>
                            <th>rank</th>
                            <th>player name</th>
                            <th>score</th>
                            <th>max chain</th>
                            <th>max fuse</th>
                            <th>great</th>
                            <th>ok</th>
                            <th>no</th>
                            <th>play date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardList.map((play, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>#{play.position}</td>
                                    <td className={play.rank}>{play.rank}</td>
                                    <td>
                                        <Link href={`/users/${play.playerId}`}>{play.playerName}</Link>
                                    </td>
                                    <td>{play.score.toLocaleString("en-US")}</td>
                                    <td>{play.maxChain}</td>
                                    <td>{play.maxFuse}</td>
                                    <td>{play.great}</td>
                                    <td>{play.ok}</td>
                                    <td>{play.no}</td>
                                    <td>
                                        {new Date(play.playDate * 1000)
                                            .toLocaleTimeString("en-GB", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })
                                            .replaceAll(", ", " - ")}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <style jsx>
                {`
                    .container {
                        width: 100%;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .leaderboardContainer {
                        width: 100%;

                        background-color: #151515;
                        border-radius: 20px;

                        padding: 30px;
                        padding-top: 10px;
                    }

                    table {
                        width: 100%;
                        border-spacing: 0;
                    }

                    th {
                        font-size: 12px;
                        color: #696969;
                    }

                    td {
                        font-size: 14px;
                    }

                    th,
                    td {
                        text-align: left;
                        padding: 10px;
                        user-select: none;
                    }

                    th:first-child,
                    th:last-child,
                    td:first-child,
                    td:last-child {
                        text-align: right;
                    }

                    tr td:first-child {
                        border-radius: 10px 0 0 10px;
                    }

                    tr td:last-child {
                        width: 200px;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }

                    td:first-child {
                        width: 30px;
                    }

                    td:nth-child(2),
                    td:nth-child(3) {
                        font-weight: 500;
                    }

                    tbody tr:nth-child(2n + 1) {
                        background-color: #242424;
                    }

                    td:nth-child(2) {
                        font-weight: 700;
                    }

                    td:nth-child(3):hover {
                        color: #d4a018;
                    }

                    td.SSS {
                        background: linear-gradient(90deg, #ebcb8b, #bf616a, #81a1c1);
                        background-size: 60%;
                        background-clip: text;
                        color: rgb(255 255 255 /0);
                    }
                `}
            </style>
        </div>
    );
};
export { ChartDetail, Leaderboard };
