import "../styles/globals.css";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Background />
            <Header />
            <div className="AppContainer">
            <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <Component {...pageProps} />
            </AnimatePresence>
            <Footer />
            </div>
        </>
    );
}

export default MyApp;
