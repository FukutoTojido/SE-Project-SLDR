import React, { Component } from "react";
import { Label } from "../pages/users";
import bbobHTML from "@bbob/html";
import presetHTML5 from "@bbob/preset-html5";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.playerInfo;
    }

    render() {
        const backgroundURL = `url('./users/${this.state.userId}.png')`;
        return (
            <div className="container">
                <Label label="User Info" />
                <div className="userInfoContainer">
                    <div className="userInfo">
                        <div className="userAvatar"></div>
                        <div className="userDetails">
                            <div className="userName">{this.state.userName}</div>
                            <div className="userTitle">{this.state.userTitle}</div>
                            <div className="userRating">
                                <div className="ratingWrapper">
                                    <div className="ratingLabel">SKILL RATING</div>
                                    <div className="rating">{this.state.userRating}</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            height: 480px;

                            background: ${backgroundURL};
                            background-size: cover;
                            background-position: 0 -170px;
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
                        }

                        .userAvatar {
                            width: 150px;
                            height: 150px;

                            background-image: url("https://a.ppy.sh/${this.state.userId}");
                            background-size: cover;
                            background-color: #15151577;

                            border-radius: 20px;

                            box-shadow: 0 2px 5px rgb(0 0 0 /0.4);

                            backdrop-filter: blur(5px);
                        }

                        .userDetails {
                            width: 220px;
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
    }
}

class StatisticDetail extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.statisticDetail;
    }

    render() {
        return (
            <div className="container">
                <Label label="Statistic Detail" />
                <div className="statisticDetail">
                    <div className="stats">
                        <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/time-machine--v1.png" />
                        Play Count: <span>{this.state.playCount}</span>
                    </div>
                    <div className="stats">
                        <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/accuracy--v1.png" />
                        Avg. Accuracy: <span>{this.state.avgAcc}</span>
                    </div>
                    <div className="stats">
                        <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/calendar-11.png" />
                        Join Date:{" "}
                        <span>
                            {new Date(this.state.joinDate * 1000)
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
    }
}

class PinnedPlay extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.pinnedPlay;
    }

    render() {
        return (
            <div className="container">
                <Label label="Pinned Play" />
                <div className="pinnedPlay">
                    <div className="mapInfo">
                        <div className="mapMetadata">
                            <div className="mapArtist">{this.state.mapInfo.mapArtist}</div>
                            <div className="mapTitle">{this.state.mapInfo.mapTitle}</div>
                        </div>
                        <div className={`mapDiff ${this.state.mapInfo.mapCategory}`}>
                            <div className="mapCategory">{this.state.mapInfo.mapCategory}</div>
                            <div className="mapDifficultyInNumber">
                                {!this.state.mapInfo.mapDifficulty.includes("+") ? (
                                    this.state.mapInfo.mapDifficulty
                                ) : (
                                    <>
                                        {this.state.mapInfo.mapDifficulty.replace("+", "")}
                                        <span>+</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="playInfo">
                        <div className="rankContainer">
                            <div className="pinnedLabel">rank</div>
                            <div className={`rank ${this.state.playInfo.rank}`}>{this.state.playInfo.rank}</div>
                        </div>
                        <div className="rightContainer">
                            <div className="accuracyContainer">
                                <div className="pinnedLabel">accuracy</div>
                                <div className={`accuracy ${this.state.playInfo.rank}`}>{this.state.playInfo.accuracy}</div>
                            </div>
                            <div className={`bonus ${this.state.playInfo.isAllChain ? "allChain" : ""}`}>AC</div>
                            <div className={`bonus ${this.state.playInfo.isFullFuse ? "fullFuse" : ""}`}>FF</div>
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

                            background: linear-gradient(0deg, rgb(0 0 0 /0.7), rgb(0 0 0 /0.7)), url("./maps/${this.state.mapInfo.mapId}.jpg");
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
    }
}

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.aboutMe;
    }

    render() {
        const processed = bbobHTML(`${this.state.rawBBCode}`, presetHTML5());
        // console.log(processed);
        return (
            <div className="container">
                <Label label="About me" />
                <div
                    className="aboutMeContainer"
                    dangerouslySetInnerHTML={{
                        __html: processed
                            .replaceAll("<img", "<img style='width: 100%; border-radius: 10px;'")
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

                            overflow: overlay;
                            overflow-x: hidden;

                            font-size: 13px;
                            font-weight: 300;
                        }

                        .aboutMeContainer img {
                            width: 260px;
                        }
                    `}
                </style>
            </div>
        );
    }
}

class PlayHistory extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.playHistory;
    }

    render() {
        return (
            <div className="container">
                <Label label="Play History" />
                <div className="playHistoryContainer"></div>
                <style jsx>{`
                    .container {
                        width: 100%;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .playHistoryContainer {
                        width: 100%;
                        min-height: 1000px;

                        background-color: #151515;
                        border-radius: 20px;

                        padding: 30px;
                    }
                `}</style>
            </div>
        );
    }
}

export { UserInfo, StatisticDetail, PinnedPlay, AboutMe, PlayHistory };
