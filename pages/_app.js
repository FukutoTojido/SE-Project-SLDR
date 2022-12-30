import "../styles/globals.css";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthProvider from "../context/auth";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const postsLists = [
    {
        postTitle: "Sl::dr Update 11/2029",
        postAuthor: "Try-Z",
        postDate: 1888990656,
    },
    {
        postTitle: "Sl::dr Update 10/2029",
        postAuthor: "Try-Z",
        postDate: 1886312256,
    },
    {
        postTitle: "Sl::dr Update 9/2029",
        postAuthor: "Try-Z",
        postDate: 1883720256,
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
    },
];
const authorizedStatus = {
    isAuthorized: true,
    authorizationInfo: {
        userId: 8266808,
        userName: "skill issue",
        userTitle: "Sl:dr World Cup 2029 Champion",
        userRating: 19920,
        userCoverURL: "/static/users/8266808.jpg",
        userAvatarURL: "/static/avatars/8266808.png",
    },
};

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [pageData, setPageData] = useState(undefined);

    const getUserData = async (userId) => {
        if (userId === undefined) return;

        const data = await axios.get(`/api/v1/users/${userId}`);

        if (data.data.length === 0) {
            setPageData({ dataType: "users" });
            return;
        }

        setPageData({ ...data.data[0], dataType: "users" });
    };

    const getChartData = async (setId) => {
        if (setId === undefined) return;

        const data = await axios.get(`/api/v1/charts/${setId}`);

        if (data.data.length === 0) {
            setPageData({ dataType: "charts" });
            return;
        }

        setPageData({ ...data.data[0], dataType: "charts", difficulty: router.query.difficulty });
    };

    useEffect(() => {
        if (!router.isReady) return;

        const siteType = router.asPath.split("/")[1];
        // console.log(router.asPath);

        switch (siteType) {
            case "users": {
                getUserData(router.query.id);
                break;
            }
            case "charts": {
                getChartData(router.query.s_id);
                break;
            }
            default: {
                setPageData({ dataType: "others" });
            }
        }
    }, [router.asPath]);

    return (
        <>
            <AuthProvider>
                <Head>
                    <title>Sl::dr website</title>
                </Head>
                <Background data={pageData} />
                <Header />
                <div className="AppContainer">
                    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                        {pageData !== undefined ? <Component {...pageProps} data={pageData} /> : ""}
                    </AnimatePresence>
                    <Footer />
                </div>
            </AuthProvider>
        </>
    );
}

export default MyApp;
export { variants, postsLists, authorizedStatus };
