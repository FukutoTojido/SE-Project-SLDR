import React, {Component} from "react";
import styles from "../styles/Post.module.css"
import { useRouter } from "next/router";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import Image from "next/image"
import avatar from "../public/image/avatar/avatar.jpg"
import picture from "../public/image/picture.jpg"


//const router = useRouter();
//const data = router.query;

let CommentData = [
    {
        comment:"Yahhhhhhh..."
    },
    {
        comment:"Hello, My Name is Huy :3"
    },
    {
        comment:"Oh, Damn, Awesome"
    },
    {
        comment:"How can it be Possible!!!"
    },
    {
        comment:"Yahhhhhhh..."
    },
    {
        comment:"Ulatr, Fantastic"
    },


];

const PostTitle = () => {
    return (
        <>
            <div className={styles.post_container}>
                <div className={styles.post_title_context}>
                    <div>
                        <h1>Topic</h1>
                        <p>Post by Author</p>
                    </div>
                    <div className={styles.post_title_container_bookmarks}>
                        <BsFillBookmarkStarFill className={styles.post_bookmark} />
                    </div>
                </div>
                
            </div>
        </>
    )
};

const PostContent = () => {
    return (
        <>
            <div className={styles.content_container}>
                <div className={styles.content_box}>
                    <div className={styles.content_box_title}>
                        <h2><i>Checkout the New</i></h2>
                    </div>
                    <div className={styles.content_box_context}>
                        <p>The Context that we want...</p> 
                    </div>
                </div>
            </div>
        </>
    )
};
const PictureContainer = () => {
    return(
        <>
            <div className={styles.picture_container}>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: 'center',
                    marginTop: "10px",
                }}>
                    <Image
                        src={picture}
                        style={{
                            width: "600px",
                            height: "350px",
                            borderRadius: "20px",
                            opacity: "0.8"

                        }}
                    />
                </div>
            </div>
        </>
    )
}
const Vote = () => {
    return (
        <>
            <div className={styles.topicvote}>
                <AiFillLike className={styles.vote_like} />
                <AiFillDislike className={styles.vote_like} />
            </div>
        </>
    )
}
const CommentBox = ({comment}) => {
    return (
        <>
            <div className={styles.commentBox_container}>
                <div className ={styles.avatar_comment}>
                    <Image src={avatar} width={40} height={40} style={{ borderRadius: "20px",}} />
                </div>
                <p><i>{comment}</i></p>
            </div>
        </>
    )
};

const CommentEnter = () => {
    return (
    <>
            <form action="/database" method="POST">
                    <input
                    style={{
                        marginTop: '25px',
                        width: '600px',
                        height: '40px',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        color: "white",
                        borderRadius: '20px',
                        padding:'20px',
                        
                    }}
                    type="text"
                    id="roll"
                    name="roll"
                    required 
                    placeholder="Comment..."
                />
            </form>
      
    </>
    )
}

const CommentContainer = () => {
    return (
        <>
            <div className={styles.comment_all}>
                <div className={styles.comment_container}>
                    <h2>{<BsEmojiHeartEyes />} Comment Here {<BsEmojiHeartEyes />}</h2>        
                </div>      
            </div>
            <div className={styles.comment_box}>
                {CommentData.map(p => <CommentBox comment={p.comment}/> )}  
            </div>
           <CommentEnter/>
        </>
    )
}





const Post = () => {
    
    return (
        <>
            <div className={styles.container}>
                <PostTitle />
                <PostContent />  
                <PictureContainer />
                <Vote />
            </div>
            <div className={styles.container_comment}>
                <CommentContainer />
                
            </div>
        </>
    )

}
export default Post 