import "../styles/globals.css";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Background />
            <Header />
            <div className="AppContainer">
                <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                    <Component {...pageProps} />
                </AnimatePresence>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
export { variants };
