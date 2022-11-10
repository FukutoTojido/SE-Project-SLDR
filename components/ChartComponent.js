import React, { Component, useState, useEffect, useRef } from "react";
import { Label } from "./BasicComponent";
import Link from "next/link";

const ReportPopup = (props) => {
    const clickRef = useRef(null);

    const checkMenuState = (e) => {
        if (clickRef.current && !clickRef.current.contains(e.target)) props.setShowReportPopup(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", checkMenuState);
        return () => {
            document.removeEventListener("mousedown", checkMenuState);
        };
    }, []);

    return (
        <div className="reportContainer">
            <div className="popupContainer" ref={clickRef}></div>
            <style jsx>
                {`
                    .reportContainer {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background-color: #00000040;
                        backdrop-filter: blur(2px);

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .popupContainer {
                        width: 500px;
                        height: 600px;

                        background-color: #151515;
                        border-radius: 20px;

                        box-shadow: 0 5px 5px #151515;
                    }
                `}
            </style>
        </div>
    );
};

const Menu = (props) => {
    return (
        <div className="menuContainer" ref={props.mref}>
            <div
                className="option"
                onClick={() => {
                    props.setShowReportPopup(!props.showReportPopup);
                    props.setShowMenu(false);
                }}
            >
                report problem
            </div>
            <div
                className="option warning"
                onClick={() => {
                    props.setShowMenu(false);
                }}
            >
                DELETE CHARTSET
            </div>
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

    const menuRef = useRef(null);
    const toggleRef = useRef(null);

    const checkMenuState = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) setShowMenu(false);
        if (toggleRef.current && toggleRef.current.contains(e.target)) {
            if (menuRef.current && !menuRef.current.contains(e.target)) setShowMenu(false);
            else if (!menuRef.current) setShowMenu(true);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", checkMenuState);
        return () => {
            document.removeEventListener("mousedown", checkMenuState);
        };
    }, []);

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
                        <div className="menuIcon" ref={toggleRef}>
                            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/more.png" />
                        </div>
                        {showMenu ? (
                            <Menu
                                setShowMenu={setShowMenu}
                                showReportPopup={props.showReportPopup}
                                setShowReportPopup={props.setShowReporPopup}
                                mref={menuRef}
                            />
                        ) : (
                            ""
                        )}
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
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setLeaderboardList(props.leaderboardList);
    }, [props.leaderboardList]);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    }, []);

    const getTimestamp = (unixTime) => {
        const timestamp = new Date(unixTime * 1000);
        const monthParse = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        if (currentTime.getFullYear() - timestamp.getFullYear() > 0) return `${currentTime.getFullYear() - timestamp.getFullYear()}y`;
        else if (currentTime.getMonth() - timestamp.getMonth() !== 0) return `${currentTime.getMonth() - timestamp.getMonth()}mo.`;
        else if (currentTime.getDate() - timestamp.getDate() !== 0) return `${currentTime.getDate() - timestamp.getDate()}d`;
        else if (currentTime.getHours() - timestamp.getHours() !== 0) return `${currentTime.getHours() - timestamp.getHours()}hrs.`;
        else if (currentTime.getMinutes() - timestamp.getMinutes() !== 0) return `${currentTime.getMinutes() - timestamp.getMinutes()}min`;
        else if (currentTime.getSeconds() - timestamp.getSeconds() !== 0) return `${currentTime.getSeconds() - timestamp.getSeconds()}s`;
    };

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
                            <th>accuracy</th>
                            <th>max chain</th>
                            <th>max fuse</th>
                            <th>crit.</th>
                            <th>perf.</th>
                            <th>great</th>
                            <th>ok</th>
                            <th>no</th>
                            <th>play time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardList.map((play, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>#{play.position}</td>
                                    <td className={play.rank}>{play.rank}</td>
                                    <td>
                                        <Link href={`/users/${play.playerId}`}>
                                            <span>{play.playerName}</span>
                                        </Link>
                                    </td>
                                    <td className={play.rank}>{play.accuracy}</td>
                                    <td>{play.maxChain}x</td>
                                    <td>{play.maxFuse}</td>
                                    <td>{play.crit}</td>
                                    <td>{play.perfect}</td>
                                    <td>{play.great}</td>
                                    <td>{play.ok}</td>
                                    <td>{play.no}</td>
                                    <td>{getTimestamp(play.playDate)}</td>
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

                        font-weight: 500;
                    }

                    table {
                        width: 100%;
                        border-spacing: 0;
                    }

                    th {
                        font-size: 12px;
                        color: #909090;
                        font-weight: 500;
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

                    td:nth-child(3) span:hover {
                        color: #d4a018;
                    }

                    td:nth-child(2).SSS {
                        background: linear-gradient(90deg, #ebcb8b, #bf616a, #81a1c1);
                        background-size: 50%;
                        background-clip: text;
                        color: rgb(255 255 255 /0);
                    }

                    td:nth-child(4).SSS,
                    td:nth-child(4).SS,
                    td:nth-child(4).S {
                        text-shadow: 0 0 2px #efbe60;
                        color: #efbe60;
                    }

                    td:nth-child(7),
                    td:nth-child(8),
                    td:nth-child(9),
                    td:nth-child(10),
                    td:nth-child(11) {
                        width: 60px;
                    }

                    td:nth-child(7) {
                        text-shadow: 0 0 2px #efbe60;
                        color: #efbe60;
                    }
                    td:nth-child(8) {
                        text-shadow: 0 0 2px #ef8260;
                        color: #ef8260;
                    }
                    td:nth-child(9) {
                        text-shadow: 0 0 2px #ba5e8a;
                        color: #ba5e8a;
                    }
                    td:nth-child(10) {
                        text-shadow: 0 0 2px #5dc273;
                        color: #5dc273;
                    }
                    td:nth-child(11) {
                        text-shadow: 0 0 2px #ec5050;
                        color: #ec5050;
                    }
                `}
            </style>
        </div>
    );
};
export { ChartDetail, Leaderboard, ReportPopup };
