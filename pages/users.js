import React, { Component } from "react";
import styles from "../styles/Userpage.module.css";
import { UserInfo, StatisticDetail, PinnedPlay, AboutMe, PlayHistory } from "../components/UsersComponent";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

class Label extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="label">
                {this.props.label}
                <style jsx>
                    {`
                        .label {
                            position: relative;
                            width: 100%;
                            height: 14px;

                            font-size: 16px;
                            font-weight: 500;
                            line-height: 14px;

                            padding-left: 14px;

                            display: flex;
                            align-items: center;
                        }

                        .label::before {
                            position: absolute;
                            content: "";

                            width: 4px;
                            height: 14px;

                            background-color: white;
                            border-radius: 2px;

                            transform: translateX(-10px);
                        }
                    `}
                </style>
            </div>
        );
    }
}

class Userpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                userId: 8266808,
                userName: "skill issue",
                userTitle: "Sl:dr World Cup 2029 Champion",
                userRating: 19920,
            },
            statisticDetail: {
                playCount: 1240,
                avgAcc: "98.7270%",
                joinDate: 1881479028,
            },
            pinnedPlay: {
                mapInfo: {
                    mapId: 99283,
                    mapArtist: "xi (from DiverseSystem)",
                    mapTitle: "Mjölnir",
                    mapCategory: "MASTER",
                    mapDifficulty: "14+",
                },
                playInfo: {
                    rank: "SSS",
                    accuracy: "100.0120%",
                    isAllChain: true,
                    isFullFuse: false,
                },
            },
            aboutMe: {
                rawBBCode: `
                [centre]
                [img]https://i.imgur.com/dOXiNlS.png[/img]
                [notice]
                Awawawa Higuchi Madoca
                [/notice]
                [/centre]
                [centre][img]https://trigonoculus.github.io/assets/graphics/cpmc/CPMC-Staff_Try-Z.png[/img][/centre]
                [notice]
                [size=150][b]2022 GOAL[/b][/size]
                [list]
                [*]Have fun
                [*] Nah I can no longer having fun tbh. I'm sad.
                [/list]
                [/notice]
                [notice]
                [b][size=150]TOURNAMENT[/size][/b]
                [box=I'm not quitting]
                [/box]
                [box=Completed]
                [list]
                [*][b][color=#ff6984]osu! World Cup 2020[/color][/b] - VN Team - [b][color=#5c5c5c]DNQ (42/48)[/color][/b]
                [*][b][color=#516c9c]osu! World League[/color][/b] - VN Team A - [b][color=#ffc524]Final (Abandoned Tournament by Host)[/color][/b]
                [*][b][color=#ff6984]osu! World Cup 2021[/color][/b] - VN Team - [b][color=#5c5c5c]DNQ (39/48)[/color][/b]
                [*][b][color=#fc4952]Reimu's Disgusting Draft Cup[/color][/b] - TryZ Supremacy - [b][color=#ffc524]Final (#5-6)[/color][/b]
                [*][b][color=#ffc247]4 digit World Cup[/color][/b] - VN Team - [b][color=#5c5c5c]DNQ (39/52)[/color][/b]
                [*][b][color=#47ff72]Broccoli Cup 2[/color][/b] - 6 Shades of Skadi - [b][color=#91d5ff]RO16[/color][/b]
                [*][b]Hippo Cup 5[/b] - Folontilo - [b][color=#5c5c5c]Group Stage[/color][/b]
                [*][b][color=#ff5978]The Perrenial 2022[/color][/b] - khum - [b][color=#5c5c5c]DNQ[/color][/b]
                [*][b]World Blitz osu! Championship[/b] - GiaiPhongMienNam - [b][color=#91d5ff]RO16[/color][/b]
                [*][b][color=#eb372a]Corsace OPEN 2022[/color][/b] - u la troi - [b][color=#5c5c5c]DNQ (48/99)[/color][/b]
                [*][b][color=#71b9f5]Giga Woopers Kup[/color][/b] - adu cung ghe - [b][color=#71f5a1]Quarter-Final[/color][/b]
                [*][b][color=#71f5a1]Tam Huyet Tournament 3[/color][/b] - PANADOL XXXTRA - [b][color=#71f5a1]Quarter-Final[/color][/b]
                [/list]
                [/box]
                [/notice]
                `,
            },
            playHistory: [
                {

                },
                {
                    
                }
            ]
        };
    }

    render() {
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
                        <UserInfo playerInfo={this.state.userInfo} />
                        <div className="leftSection">
                            <StatisticDetail statisticDetail={this.state.statisticDetail} />
                            <PinnedPlay pinnedPlay={this.state.pinnedPlay} />
                        </div>
                        <AboutMe aboutMe={this.state.aboutMe} />
                        <PlayHistory playHistory={this.state.playHistory} />
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
    }
}

export default Userpage;
export { Label };
