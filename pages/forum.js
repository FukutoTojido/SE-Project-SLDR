import React, { Component } from "react";
import styles from "../styles/Forum.module.css";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

class Forum extends Component {
    constructor(props) {
        super(props);
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
                    <div className="App"></div>
                </motion.main>
            </>
        );
    }
}

export default Forum;
