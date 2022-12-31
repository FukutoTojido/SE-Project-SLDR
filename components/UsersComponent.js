import React, { Component } from "react";
import bbobHTML from "@bbob/html";
import { Label } from "./BasicComponent";
import presetHTML5 from "@bbob/preset-html5";
import Link from "next/link";
import { useAuth } from "../context/auth";

const UserInfo = (props) => {
    console.log(props.authData, props.authData !== undefined && JSON.stringify(props.authData) !== "{}" && props.authData.userId !== props.playerInfo.userId)
    return (
        <div className="container">
            <Label label="User Info" />
            <div className="userInfoContainer">
                <div className="userInfo">
                    <div className="userAvatar"></div>
                    <div className="userDetails">
                        <div className="userName">{props.playerInfo.userName}</div>
                        <div className="userTitle">{props.playerInfo.userTitle}</div>
                        <div className="userRating">
                            <div className="ratingWrapper">
                                <div className="ratingLabel">SKILL RATING</div>
                                <div className="rating">{props.playerInfo.userRating}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {props.authData !== undefined && JSON.stringify(props.authData) !== "{}" && props.authData.userId !== props.playerInfo.userId ? (
                    <div className="userInteraction">
                        <div className="button">
                            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/add-user-group-man-man.png" />
                        </div>
                        <div className="button">
                            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/messages-mac.png" />
                        </div>
                        <div className="button">
                            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/remove-user-male.png" />
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <style jsx>
                {`
                    .container {
                        width: 100%;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .userInfoContainer {
                        width: 100%;
                        height: 400px;

                        background: url("${props.playerInfo.userCoverURL}");
                        background-size: cover;
                        background-position: ${props.authData !== undefined &&
                        JSON.stringify(props.authData) !== "{}" &&
                        props.authData.userId !== props.playerInfo.userId
                            ? "0 -90px"
                            : "0 -55px"};
                        background-repeat: no-repeat;

                        border-radius: 20px;

                        display: flex;
                        flex-wrap: wrap;
                        align-content: flex-end;
                    }

                    .userInfo {
                        margin-top: auto;
                        width: 100%;
                        height: 170px;

                        background-image: linear-gradient(0deg, #242424, #242424);
                        background-size: cover;
                        background-position: 0 60px;
                        background-repeat: no-repeat;

                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 10px;

                        border-radius: ${props.authData !== undefined &&
                        JSON.stringify(props.authData) !== "{}" &&
                        props.authData.userId !== props.playerInfo.userId
                            ? 0
                            : "0 0 20px 20px"};
                    }

                    .userAvatar {
                        width: 150px;
                        height: 150px;

                        background-image: url("${props.playerInfo.userAvatarURL}");
                        background-size: cover;
                        background-color: #15151577;

                        border-radius: 20px;

                        box-shadow: 0 2px 5px rgb(0 0 0 /0.4);

                        backdrop-filter: blur(5px);
                    }

                    .userDetails {
                        width: 240px;
                        height: 150px;

                        display: flex;
                        flex-wrap: wrap;

                        display: flex;
                        align-content: flex-end;
                        align-items: flex-end;
                    }

                    .userName {
                        width: 100%;
                        font-size: 24px;
                        font-weight: 500;
                    }

                    .userTitle {
                        width: 100%;
                        font-weight: 500;
                        font-size: 11px;

                        background: linear-gradient(90deg, #ff5353, #7f61d6);
                        background-clip: text;
                        color: transparent;
                    }

                    .userRating {
                        margin: 5px 0;
                        width: 74px;
                        height: 28px;

                        background: linear-gradient(90deg, #fec600, #ff8ec2, #907dfe, #4aa9fd, #06dbfe);
                        border-radius: 0 10px 10px 10px;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .ratingWrapper {
                        width: 70px;
                        height: 24px;

                        background-color: #242424;
                        border-radius: 0 8px 8px 8px;

                        padding: 3px;

                        display: flex;
                        flex-wrap: wrap;
                    }

                    .ratingLabel {
                        width: 100%;
                        font-size: 5px;
                        font-weight: 500;

                        background: linear-gradient(90deg, #ff5353, #7f61d6);
                        background-clip: text;
                        color: transparent;
                    }

                    .rating {
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 10px;
                    }

                    .userInteraction {
                        width: 100%;
                        height: 70px;

                        background-color: #151515;
                        border-radius: 0 0 20px 20px;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 30px;
                    }

                    .button {
                        width: 80px;
                        height: 40px;

                        border-radius: 20px;
                        background-color: #242424;

                        transition: ease-in-out 100ms;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .button img {
                        width: 20px;
                        height: 20px;
                    }

                    .button:hover {
                        background-color: #323232;
                    }
                `}
            </style>
        </div>
    );
};

const StatisticDetail = (props) => {
    return (
        <div className="container">
            <Label label="Statistic Detail" />
            <div className="statisticDetail">
                <div className="stats">
                    <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/time-machine--v1.png" />
                    Play Count: <span>{props.statisticDetail.playCount}</span>
                </div>
                <div className="stats">
                    <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/accuracy--v1.png" />
                    Avg. Accuracy: <span>{props.statisticDetail.avgAcc}</span>
                </div>
                <div className="stats">
                    <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/calendar-11.png" />
                    Join Date:{" "}
                    <span>
                        {new Date(props.statisticDetail.joinDate * 1000)
                            .toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })
                            .replaceAll(" ", "-")}
                    </span>
                </div>
            </div>
            <style jsx>
                {`
                    .container {
                        width: 300px;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .statisticDetail {
                        width: 100%;
                        height: 100px;

                        padding: 20px;
                        background-color: #151515;
                        border-radius: 20px;

                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                    }

                    .stats {
                        width: 100%;
                        font-size: 12px;
                        font-weight: 500;

                        display: flex;
                        align-items: center;
                        gap: 5px;
                    }

                    .stats span {
                        font-weight: 500;
                    }

                    .stats img {
                        width: 20px;
                        height: 20px;
                    }
                `}
            </style>
        </div>
    );
};

const PinnedPlay = (props) => {
    return (
        <div className="container">
            <Label label="Pinned Play" />
            <div className="pinnedPlay">
                <div className="mapInfo">
                    <div className="mapMetadata">
                        <div className="mapArtist">{props.pinnedPlay.mapInfo.mapArtist}</div>
                        <div className="mapTitle">{props.pinnedPlay.mapInfo.mapTitle}</div>
                    </div>
                    <div className={`mapDiff ${props.pinnedPlay.mapInfo.mapCategory}`}>
                        <div className="mapCategory">{props.pinnedPlay.mapInfo.mapCategory}</div>
                        <div className="mapDifficultyInNumber">
                            {!props.pinnedPlay.mapInfo.mapDifficulty.includes("+") ? (
                                props.pinnedPlay.mapInfo.mapDifficulty
                            ) : (
                                <>
                                    {props.pinnedPlay.mapInfo.mapDifficulty.replace("+", "")}
                                    <span>+</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="playInfo">
                    <div className="rankContainer">
                        <div className="pinnedLabel">rank</div>
                        <div className={`rank ${props.pinnedPlay.playInfo.rank}`}>{props.pinnedPlay.playInfo.rank}</div>
                    </div>
                    <div className="rightContainer">
                        <div className="accuracyContainer">
                            <div className="pinnedLabel">accuracy</div>
                            <div className={`accuracy ${props.pinnedPlay.playInfo.rank}`}>{props.pinnedPlay.playInfo.accuracy}</div>
                        </div>
                        <div className={`bonus ${props.pinnedPlay.playInfo.isAllChain ? "allChain" : ""}`}>AC</div>
                        <div className={`bonus ${props.pinnedPlay.playInfo.isFullFuse ? "fullFuse" : ""}`}>FF</div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .container {
                        width: 300px;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .pinnedPlay {
                        width: 300px;
                        height: 150px;

                        background-color: #151515;
                        border-radius: 20px;

                        padding: 20px;

                        display: flex;
                        flex-wrap: wrap;

                        align-items: space-around;
                    }

                    .mapInfo {
                        width: 100%;
                        height: 50px;

                        background: linear-gradient(0deg, rgb(0 0 0 /0.7), rgb(0 0 0 /0.7)), url("${props.pinnedPlay.mapInfo.mapCoverURL}");
                        background-size: cover;
                        background-position: center;

                        border-radius: 10px;
                        border: solid 2px #d08770;

                        padding: 13px 10px;

                        font-weight: 500;

                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .mapMetadata {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                    }

                    .mapArtist {
                        width: 100%;
                        font-size: 8px;
                    }

                    .mapTitle {
                        width: 100%;
                        font-size: 16px;
                    }

                    .mapDiff {
                        width: 30px;

                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }

                    .mapCategory {
                        width: 100%;
                        font-size: 7px;
                    }

                    .mapDifficultyInNumber {
                        font-size: 24px;
                        line-height: 20px;
                    }

                    .mapDifficultyInNumber span {
                        font-size: 11px;
                    }

                    .MASTER {
                        color: #d08770;
                        text-shadow: 0 0 5px #d08770;
                    }

                    .playInfo {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 50px;
                        align-items: flex-end;

                        font-weight: 500;
                    }

                    .pinnedLabel {
                        font-size: 7px;
                        color: #969696;
                    }

                    .rankContainer {
                        width: 100px;
                    }

                    .rank {
                        padding-top: 2px;
                        padding-bottom: 8px;
                        font-size: 56px;
                        line-height: 30px;
                        font-weight: 700;
                    }

                    .rank.SSS {
                        background: linear-gradient(90deg, #ebcb8b, #bf616a, #81a1c1);
                        background-clip: text;
                        color: rgb(255 255 255 /0.1);
                    }

                    .rightContainer {
                        width: 64px;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 5px 10px;
                    }

                    .accuracyContainer {
                        width: 100%;
                    }

                    .accuracy {
                        font-size: 13px;
                    }

                    .accuracy.SSS {
                        color: #efbe60;
                        text-shadow: 0 0 5px #efbe60;
                    }

                    .bonus {
                        width: 20px;
                        height: 20px;

                        font-size: 8px;
                        text-align: center;
                        color: #242424;

                        border-radius: 15px;
                        border: solid 2px #242424;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .allChain {
                        border: solid 2px #6dd46b;
                        color: #6dd46b;
                        text-shadow: 0 0 5px #6dd46b;
                        box-shadow: 0 0 5px #6dd46b;
                    }
                `}
            </style>
        </div>
    );
};

const AboutMe = (props) => {
    const processed = bbobHTML(`${props.aboutMe.rawBBCode}`, presetHTML5());
    // console.log(processed);
    return (
        <div className="container">
            <Label label="About me" />
            <div className="aboutMeContainer">
                <div
                    className="wrapper"
                    dangerouslySetInnerHTML={{
                        __html: processed
                            .replaceAll("<img", "<img style='max-width: 100%; border-radius: 10px;'")
                            .replaceAll(
                                "<notice>",
                                `<div 
                            style='
                                background-color: #242424;
                                padding: 20px;
                                border: solid 2px #696969;
                                border-radius: 10px;
                                margin: 2px 0;
                            '
                            >`
                            )
                            .replaceAll("</notice>", "</div>")
                            .replaceAll("<centre>", "<div style='text-align: center'>")
                            .replaceAll("</centre>", "</div>")
                            .replaceAll(
                                `<size 150="150">`,
                                `
                                <div style="font-size: 20px">
                            `
                            )
                            .replaceAll(`</size>`, `</div>`),
                    }}
                ></div>
            </div>
            <style jsx>
                {`
                    .container {
                        width: 690px;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .aboutMeContainer {
                        width: 100%;
                        height: 300px;

                        padding: 20px;

                        background-color: #151515;
                        border-radius: 20px;

                        font-size: 13px;
                        font-weight: 300;
                    }

                    .aboutMeContainer img {
                        width: 260px;
                    }

                    .wrapper {
                        width: 100%;
                        height: 100%;

                        overflow: scroll;
                        overflow-x: hidden;

                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    );
};

const PlayContainer = (props) => {
    return (
        <Link
            href={`/charts/${props.playData.mapInfo.mapId}/${props.playData.mapInfo.mapCategory.toLowerCase()}`}
            style={{ width: "100%", margin: "10px" }}
        >
            <div className={`playContainer ${props.playData.mapInfo.mapCategory}`}>
                <div className="playDate">
                    Play date:
                    <span>
                        {new Date(props.playData.playInfo.playDate * 1000)
                            .toLocaleTimeString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })
                            .replaceAll(", ", " - ")}
                    </span>
                </div>
                <div
                    className={`playDifficulty ${props.playData.mapInfo.mapCategory}`}
                >{`${props.playData.mapInfo.mapCategory} ${props.playData.mapInfo.mapDifficulty}`}</div>
                <div className="playArtist">{props.playData.mapInfo.mapArtist}</div>
                <div className="playTitle">{props.playData.mapInfo.mapTitle}</div>
                <div className="statContainer">
                    <div className="rankContainer">
                        <div className="pinnedLabel">rank</div>
                        <div className={`rank ${props.playData.playInfo.rank}`}>{props.playData.playInfo.rank}</div>
                    </div>
                    <div className="accuracyHitContainer">
                        <div className="accuracyContainer">
                            <div className="pinnedLabel">accuracy</div>
                            <div className={`accuracy ${props.playData.playInfo.rank}`}>{props.playData.playInfo.accuracy}</div>
                        </div>
                        <div className="hitDetailsContainer">
                            <div className="pinnedLabel">hit details</div>
                            <div className="hitDetails">
                                <span className="hCrit">{props.playData.playInfo.hitDetail.crit_perfect}</span>/
                                <span className="hPerf">{props.playData.playInfo.hitDetail.perfect}</span>/
                                <span className="hGreat">{props.playData.playInfo.hitDetail.great}</span>/
                                <span className="hOk">{props.playData.playInfo.hitDetail.ok}</span>/
                                <span className="hNo">{props.playData.playInfo.hitDetail.no}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bonusContainer">
                        <div className={`bonus ${props.playData.playInfo.isAllChain ? "allChain" : ""}`}>AC</div>
                        <div className={`bonus ${props.playData.playInfo.isFullFuse ? "fullFuse" : ""}`}>FF</div>
                    </div>
                </div>
                <style jsx>
                    {`
                        .playContainer {
                            position: relative;
                            width: 100%;
                            height: 200px;

                            border-radius: 20px;
                            background-image: linear-gradient(
                                    90deg,
                                    rgba(0, 0, 0, 0.2) 0%,
                                    rgba(17, 17, 17, 0.865983893557423) 70%,
                                    rgba(21, 21, 21, 1) 100%
                                ),
                                url("${props.playData.mapInfo.mapCoverURL}");
                            background-size: cover;
                            background-position: center;
                        }

                        .playContainer.MASTER:hover {
                            outline: solid 3px #d08770;
                        }

                        .playDate {
                            position: absolute;

                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                            font-size: 11px;
                            font-weight: 300;

                            padding: 0 15px;
                            margin: 10px;

                            background-color: #151515;
                            border-radius: 15px;

                            box-shadow: 0 2px 2px rgb(0 0 0 /0.25);
                        }

                        .playDate span {
                            font-weight: 500;
                            margin-left: 5px;
                        }
                        .playDifficulty {
                            position: absolute;
                            top: 30px;
                            right: 50px;

                            font-size: 11px;
                            font-weight: 700;
                            color: #151515;
                            line-height: 20px;

                            height: 20px;
                            padding: 0 15px;

                            border-radius: 10px;
                        }

                        .playDifficulty.MASTER {
                            background-color: #d08770;
                            box-shadow: 0 0 5px #d08770;
                        }

                        .playArtist {
                            position: absolute;
                            top: 70px;
                            right: 50px;

                            text-align: right;
                            font-size: 15px;
                            color: white;
                        }

                        .playTitle {
                            position: absolute;
                            top: 80px;
                            right: 50px;

                            text-align: right;
                            font-size: 36px;
                            font-weight: 700;
                            color: white;
                        }

                        .statContainer {
                            position: absolute;
                            right: 50px;
                            top: 130px;

                            display: flex;
                            justify-content: flex-end;
                            gap: 30px;
                        }

                        .pinnedLabel {
                            font-size: 7px;
                            color: white;
                        }

                        .rankContainer {
                            width: 100px;
                        }

                        .rank {
                            width: 100px;

                            padding-top: 2px;
                            padding-bottom: 8px;
                            font-size: 56px;
                            line-height: 40px;
                            font-weight: 700;
                        }

                        .rank.SSS {
                            background: linear-gradient(90deg, #ebcb8b, #bf616a, #81a1c1);
                            background-clip: text;
                            color: rgb(255 255 255 /0.1);
                        }

                        .accuracyHitContainer {
                            width: 120px;
                            display: flex;
                            flex-wrap: wrap;

                            gap: 5px;

                            height: 50px;
                        }

                        .accuracyContainer {
                            width: 100%;
                        }

                        .accuracy {
                            font-size: 13px;
                            font-weight: 500;
                        }

                        .accuracy.SSS {
                            color: #efbe60;
                            text-shadow: 0 0 5px #efbe60;
                        }

                        .hitDetails {
                            font-weight: 500;
                            font-size: 13px;
                        }

                        .hitDetails span {
                            margin-right: 2px;
                        }

                        .hitDetails span:not(:first-child) {
                            margin: 2px;
                        }

                        .hCrit {
                            color: #efbe60;
                            text-shadow: 0 0 5px #efbe60;
                        }

                        .hPerf {
                            color: #ef8260;
                            text-shadow: 0 0 5px #ef8260;
                        }

                        .hGreat {
                            color: #ba5e8a;
                            text-shadow: 0 0 5px #ba5e8a;
                        }

                        .hOk {
                            color: #5dc273;
                            text-shadow: 0 0 5px #5dc273;
                        }

                        .hNo {
                            color: #ec5050;
                            text-shadow: 0 0 5px #ec5050;
                        }

                        .bonusContainer {
                            display: flex;
                            gap: 20px;

                            height: 50px;
                            align-items: center;
                        }

                        .bonus {
                            width: 30px;
                            height: 30px;

                            font-size: 13px;
                            font-weight: 700;
                            text-align: center;
                            color: #242424;

                            border-radius: 15px;
                            border: solid 2px #242424;

                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .allChain {
                            border: solid 2px #6dd46b;
                            color: #6dd46b;
                            text-shadow: 0 0 5px #6dd46b;
                            box-shadow: 0 0 5px #6dd46b;
                        }

                        .fullFuse {
                            border: solid 2px #dc883b;
                            color: #dc883b;
                            text-shadow: 0 0 5px #dc883b;
                            box-shadow: 0 0 5px #dc883b;
                        }
                    `}
                </style>
            </div>
        </Link>
    );
};

class PlayHistory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Label label="Play History" />
                <div className="playHistoryContainer">
                    <div className="wrapper">
                        {this.props.playHistory.map((p, idx) => {
                            return <PlayContainer playData={p} key={`play_${idx}`} />;
                        })}
                    </div>
                </div>
                <style jsx>{`
                    .container {
                        width: 100%;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .playHistoryContainer {
                        width: 100%;
                        height: 900px;

                        background-color: #151515;
                        border-radius: 20px;

                        padding: 30px;
                    }

                    .wrapper {
                        width: 100%;
                        height: 100%;

                        display: flex;
                        align-content: flex-start;
                        flex-wrap: wrap;
                        gap: 10px;

                        overflow-y: scroll;
                        border-radius: 20px;
                    }
                `}</style>
            </div>
        );
    }
}

export { UserInfo, StatisticDetail, PinnedPlay, AboutMe, PlayHistory };
