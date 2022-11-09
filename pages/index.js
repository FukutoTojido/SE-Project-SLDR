import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Post from '../components/Post'
import Button from '../components/Button'
import Link from 'next/link'

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};



const Home = () => {
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
                <div className={styles.home}>
                <div className={styles.hero}>
                    <Button text="Download now" style={{fontWeight: "bold", backgroundColor: "violet"}} />
                </div>
                <div className={styles.postGrid}>
                    <Post className="span-post" />
                    <Post />
                    <Post />
                    <Post />    
                </div> 
                <Link href='/forum'>
                    <Button text={"SEE MORE NEWS"} style={{fontWeight: "bold", marginTop: "1rem"}} /> 
                </Link> 
                </div>
            </div>
        </motion.main>



    </>
  )
}

export default Home

