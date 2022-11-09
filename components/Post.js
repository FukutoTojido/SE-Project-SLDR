import React from 'react'
import styles from '../styles/Post.module.css'

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.postImg}>
        <div className={styles.date}>
          <p>Date</p>
        </div>
      </div>
      <div>
        <h4>Title</h4>
        <h4>By author</h4>
      </div>
    </div>
  )
}

export default Post