import styles from "../styles/Forum.module.css";
import { BsSuitHeartFill, BsFileEarmarkPost } from "react-icons/bs";
import Link from "next/link";
import { Label } from "./BasicComponent";
import { postsLists } from "../pages/_app";

const ForumTitle = () => {
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title_container_partup}>
                    <div className={styles.title_context}>
                        <h1>Forum</h1>
                        <p>
                            <i>The Sl::dr is you</i>
                        </p>
                    </div>
                </div>
                <div className={styles.title_subcontext}>
                    <div className={styles.title_text}>
                        <p>
                            <i>Wanna Know? Just Ask and Answer</i>
                        </p>
                    </div>
                    <BsSuitHeartFill className={styles.title_hearts} />
                </div>
            </div>
        </>
    );
};
const ForumTopic = (props) => {
    return (
        <>
            <div className={styles.forum_detail_text}>
                <div className={styles.forum_name_topic}>
                    <div className="topicName">{props.postData.postTitle}</div>
                    <div className="topicAuthor">
                        Posted by <span>{props.postData.postAuthor}</span>
                    </div>
                </div>
            </div>
            <div className={styles.forum_vote}>
                <div className={styles.form_quantity_vote}>{props.postData.postVote}</div>
                <div className="voteButtonContainer">
                    <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/expand-arrow--v1.png" />
                    <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/expand-arrow--v1.png" />
                </div>
            </div>

            <style jsx>
                {`
                    .voteButtonContainer {
                        width: 20px;

                        display: flex;
                        flex-wrap: wrap;
                    }
                    .voteButtonContainer img {
                        width: 20px;
                    }

                    .voteButtonContainer img:first-child {
                        rotate: 180deg;
                    }

                    .topicName {
                        font-size: 20px;
                        font-weight: 500;
                    }

                    .topicAuthor {
                        font-weight: 200;
                        font-size: 14px;
                    }

                    .topicAuthor span {
                        font-weight: 500;
                    }
                `}
            </style>
        </>
    );
};

const ForumContainTopic = () => {
    return (
        <>
            <div className={styles.topic_container}>
                {postsLists.map((p, idx) => (
                    <Link href="/post" style={{ width: "100%" }} key={idx}>
                        <div className="postContainer">
                            <ForumTopic postData={p} />
                        </div>

                        <style jsx>
                            {`
                                .postContainer {
                                    position: relative;
                                    width: 100%;
                                    height: 80px;

                                    padding: 20px;
                                    border-radius: 10px;
                                    /* background-color: #242424; */
                                    background: linear-gradient(0deg, rgba(0 0 0 /0.5), rgba(0 0 0 /0.5)), url("${p.postBannerURL}");

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    flex-wrap: wrap;
                                }

                                .postContainer:hover {
                                    outline: solid 2px white;
                                }
                            `}
                        </style>
                    </Link>
                ))}
            </div>
        </>
    );
};
const ForumFooter = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.forumfooter}>
                    {/* <div className={styles.imageforumFooter}>
                        <h2>
                            <i>See ya Soon!!! {<ImHeadphones />}</i>
                        </h2>
                    </div> */}
                    <div className={styles.newPost}>
                        <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/edit--v1.png" />
                        <span>New post</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export const ForumContainer = () => {
    return (
        <div className="forumWrapper">
            <Label label="Forum" />
            <div className={styles.container}>
                <ForumContainTopic />
                <ForumFooter />
            </div>

            <style jsx>{`
                .forumWrapper {
                    display: flex;
                    flex-wrap: wrap;
                    align-content: flex-start;

                    gap: 10px;
                }
            `}</style>
        </div>
    );
};
