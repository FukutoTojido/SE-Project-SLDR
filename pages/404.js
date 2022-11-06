// Inside the "pages/404.js" file
import { motion } from "framer-motion";
import { variants } from "./_app";

export default function Custom404() {
    return (
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
            <div className="container">
                <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/error--v1.png" />
                <div className="title">YOU SHOULDN'T BE HERE</div>
                404 - Site not found.
                <style jsx>{`
                    .container {
                        width: 1000px;
                        // height: 600px;

                        padding: 30px;
                        margin-bottom: 20px;

                        background-color: #151515;
                        border-radius: 20px;

                        text-align: center;
                    }
                    .title {
                        font-size: 2em;
                        font-weight: 700;
                    }
                `}</style>
            </div>
        </motion.main>
    );
}
