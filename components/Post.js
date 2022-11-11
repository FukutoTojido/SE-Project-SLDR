import React from "react";
import styles from "../styles/Post.module.css";

const Post = (props) => {
    const dateConv = (unix) => {
        const timestamp = new Date(unix * 1000);
        const dayParse = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return `${dayParse[timestamp.getDay()]}, ${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
    };

    return (
        <div className={styles.post}>
            <div className={styles.postImg}>
                <div className={styles.date}>{dateConv(props.postInfo.postDate)}</div>
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
                `}
            </style>
        </div>
    );
};

export default Post;
