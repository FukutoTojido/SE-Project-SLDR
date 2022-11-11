import React from "react";
import styles from "../styles/Post.module.css";

const Post = (props) => {
    const dateConv = (unix) => {
        const timestamp = new Date(unix * 1000);
        const dayParse = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return `${dayParse[timestamp.getDay()]}, ${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
    };

    return (
        <div className="post">
            <div className="postImg">
                <div className="date">{dateConv(props.postInfo.postDate)}</div>
            </div>
            <div className="postInfo">
                <div className="postTitle">{props.postInfo.postTitle}</div>
                <div className="postAuthor">by {props.postInfo.postAuthor}</div>
            </div>

            <style jsx>
                {`
                    .postInfo {
                        width: 100%;
                        height: 150px;

                        margin-top: auto;
                        padding: 15px;

                        display: flex;
                        align-content: flex-end;
                        flex-wrap: wrap;
                    }

                    .postTitle {
                        width: 100%;
                        font-size: 20px;
                        font-weight: 500;
                    }

                    .postAuthor {
                        width: 100%;
                        font-size: 12px;
                    }

                    .post {
                        /* background-color: black; */
                        position: relative;
                        height: 150px;
                        border-radius: 20px;
                        /* overflow: hidden; */

                        background-image: linear-gradient(180deg, transparent, #000), url("/static/posts/default.png");
                        background-position: center;
                        background-size: cover;

                        display: flex;
                    }

                    /* a:first-child .post:first-child {
                        height: 250px;
                    } */

                    .post:hover {
                        outline: solid 3px white;
                    }

                    .date {
                        position: absolute;
                        top: 0;
                        right: 0;

                        margin: 15px;
                        background-color: #151515;
                        padding: 10px 15px;
                        border-radius: 20px;

                        font-size: 10px;
                        font-weight: 400;

                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    );
};

export default Post;
