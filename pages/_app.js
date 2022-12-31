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
import { LoadingAnimation } from "../components/BasicComponent";
import { getCookie, setCookie } from "cookies-next";

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
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 10/2029",
        postAuthor: "Try-Z",
        postDate: 1886312256,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 9/2029",
        postAuthor: "Try-Z",
        postDate: 1883720256,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
    {
        postTitle: "Sl::dr Update 8/2029",
        postAuthor: "Try-Z",
        postDate: 1881041856,
        postVote: "+200",
        postBannerURL: "/static/default.png",
    },
];

const rawAuthCookie = getCookie("authData");

function MyApp({ Component, pageProps }) {
    if (getCookie("authData") === undefined) setCookie("authData", "{}");

    const router = useRouter();
    const [pageData, setPageData] = useState(undefined);
    const [authData, setAuthData] = useState({});

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
        if (!rawAuthCookie) return;
        setAuthData(JSON.parse(rawAuthCookie));
    }, []);

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
                if (pageData !== undefined && pageData.dataType === "charts" && pageData.mapId === parseInt(router.query.s_id)) {
                    setPageData({ ...pageData, difficulty: router.query.difficulty });
                    break;
                }
                getChartData(router.query.s_id);
                break;
            }
            case "login": {
                if (rawAuthCookie !== undefined && rawAuthCookie !== "{}") router.push("/");
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
                <Background data={pageData} authData={authData} />
                <Header authData={authData} />
                <div className="AppContainer">
                    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                        {pageData !== undefined ? <Component {...pageProps} data={pageData} authData={authData} /> : ""}
                    </AnimatePresence>
                    <Footer />
                </div>
            </AuthProvider>
        </>
    );
}

export default MyApp;
export { variants, postsLists };
