import React, { Component } from "react";
import styles from "../styles/Post.module.css";
import presetHTML5 from "@bbob/preset-html5";
import { useRouter } from "next/router";

//const router = useRouter();
//const data = router.query;

const topicData = {
    topicTitle: "Sl:dr Update 12/2029",
    topicStarter: "skill issue",
    postList: [
        {
            postAuthor: "skill issue",
            postAuthorAvatarURL: "/static/avatars/8266808.png",
            postVotes: "+280",
            postDate: "28/12/2029",
            postContent: "Test #1",
        },
        {
            postAuthor: "Trole",
            postAuthorAvatarURL: "https://a.ppy.sh/10274874",
            postVotes: "+280",
            postDate: "28/12/2029",
            postContent: "Test #2, longer than test #1. For font testing purpose.\nLooks so-so tbh",
        },
    ],
};

const TopicTitle = () => {
    return (
        <div className={styles.topicHeader}>
            <div className={styles.topicTitle}>Sl::dr Update 12/2022</div>
            <div className={styles.topicAuthor}>started by </div>
        </div>
    );
};

const UserPost = (props) => {
    console.log(props);
    return (
        <div
            className={styles.postContainer}
            style={{
                backgroundColor: props.postIdx === 0 ? "#282828" : "",
            }}
        >
            <div className="postUserVote">
                <div className="postUser">
                    <div className="userAvatar" style={{ backgroundImage: `url('${props.data.postAuthorAvatarURL}')` }}></div>
                    <div className="userName">{props.data.postAuthor}</div>
                </div>
                <div className="postVote">
                    <div className="upvoteButton"></div>
                    <div className="votesBalance">{props.data.postVotes}</div>
                    <div className="downvoteButton"></div>
                </div>
            </div>
            <div className={`postDateContent`}>
                <div className="postDate">posted on {props.data.postDate}</div>
                <div className="postContent">{props.data.postContent}</div>
            </div>
            <style jsx>{`
                .postUserVote {
                    width: 150px;

                    background-color: #363636;

                    display: flex;
                    flex-wrap: wrap;
                    align-content: flex-start;

                    box-shadow: 2px 0 10px -2px rgba(0 0 0 /0.4);
                }

                .postUser {
                    width: 100%;

                    padding: 20px;

                    display: flex;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    justify-content: center;
                    gap: 10px;
                }

                .userAvatar {
                    width: 100px;
                    height: 100px;

                    background-image: url("https://a.ppy.sh/8266808");
                    background-size: cover;

                    border-radius: 20px;
                }

                .userName {
                    width: 100%;

                    text-align: center;
                    font-size: 14px;
                    font-weight: 500;
                }

                .postVote {
                    width: 100%;

                    padding: 0 20px;

                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }

                .upvoteButton {
                    width: 20px;
                    height: 20px;

                    background: url("https://img.icons8.com/ios-glyphs/30/999999/sort-up.png");
                    background-size: cover;
                }

                .downvoteButton {
                    width: 20px;
                    height: 20px;

                    background: url("https://img.icons8.com/ios-glyphs/30/999999/sort-up.png");
                    background-size: cover;

                    transform: rotate(180deg);
                }

                .postDateContent {
                    width: calc(100% - 150px);
                    height: 100%;

                    padding: 20px;

                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .postDate {
                    width: 100%;

                    font-size: 13px;
                    color: #aaa;
                    font-weight: 500;
                }

                .postContent {
                    font-family: sans-serif;
                    font-size: 15px;

                    line-spacing: 1.5rem;
                }
            `}</style>
        </div>
    );
};

const Post = () => {
    return (
        <div className={styles.topicContainer}>
            <TopicTitle />
            {topicData.postList.map((p, idx) => (
                <UserPost key={idx} data={p} postIdx={idx} />
            ))}
        </div>
    );
};
export default Post;
