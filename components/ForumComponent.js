import { useState } from "react";
import { MotionContext } from "framer-motion";
import styles from "../styles/Forum.module.css"
import { TfiInstagram } from "react-icons/tfi";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";
import { BsSuitHeartFill, BsFileEarmarkPost } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import Link from "next/link";


var List_of_Topic = [
    {
        title: "How Can I win this map? Damn Hard",
        author: "BlueShadow",
        vote: 200,
    },
    {
        title: "The Beat so AweSome :3",
        author: "BrightHuy11",
        vote: 200,
    },
    {
        title: "How can I achieve 1st",
        author: "KhoiNguyen9",
        vote: 200,
    },
    {
        title: "The Art is a MasterPiece",
        author: "DangKhoa12",
        vote: 200,
    },
    {
        title: "The Story is mystery",
        author: "Duy9012444",
        vote: 200,
    },
     {
        title: "Whole Marverlous Show",
        author: "AnhKhoa20002",
        vote: 200,
    },
     {
        title: "Fantastic Show",
        author: "Fukiko2000",
        vote: 200,
    },

]


const ForumTitle = () => {
    return (
        <> 
            <div className={styles.title_container}>
                <div className={styles.title_container_partup}>
                    <div className={styles.title_context}>
                        <h1>Forum</h1>
                        <p><i>The Sl::dr is you</i></p>
                    </div>  
                </div>
                <div className={styles.title_subcontext}>
                    <div className={styles.title_text}>
                        <p><i>Wanna Know? Just Ask and Answer</i></p>
                    </div>
                    <BsSuitHeartFill className={styles.title_hearts} />
                </div>
            </div>
        </>
    )

};
const ForumTopic = ({topic, author, vote}) => {
    return (
        <>
            <Link href="/post"  className={styles.forum_form}>
                <div className={styles.forum_detail}>
                    <div className= {styles.forum_detail_text}>
                        <div className={styles.forum_images}>
                            <TfiInstagram className={styles.forum_Fc} />
                        </div>  
                        <div className={styles.forum_name_topic}>
                            <h3>{topic}</h3>
                            <p>Posted by {author}</p>
                        </div>
                    </div>
                    <div className={styles.forum_vote}>
                        <div className={styles.form_quantity_vote}>
                            <h3>{vote}</h3>
                        </div>
                        <div>
                            <AiFillLike className={styles.forum_like} />
                        </div>
                    </div>     
                </div>
            </Link>
            
        </>
    )
}

const ForumContainTopic = () => {
    return (
        <>
            <div className={styles.topic_container}>
                <div className={styles.forum_container}>
                    {List_of_Topic.map(p => <ForumTopic key={Math.random()} topic={p.title} author={p.author} vote={p.vote} />)}
                    
                </div>
            </div>
        </>
    )
}
const ForumFooter = () => {
    return (
        <>
            <div className={styles.footer}>
            <div className={styles.forumfooter}>
                <div className={styles.imageforumFooter}>
                        <h2><i>See ya Soon!!! {<ImHeadphones/>}</i></h2>
                </div>
                <div className={styles.newPost}>
                    <BsFileEarmarkPost className={styles.forum_post}/>
                </div>

                </div>
                </div>
        </>
    )
}


export const ForumContainer = () => {
    return (
        <>
            <div className={styles.container}>
                <ForumTitle />
                <ForumContainTopic />
                <ForumFooter />
            </div>

        </>
    )

}
