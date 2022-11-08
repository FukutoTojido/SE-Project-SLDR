import React, { Component } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { mapsList, usersList } from "../pages/_app";

const Background = () => {
    const router = useRouter();
    const [backgroundURL, setBackgroundURL] = useState("");

    useEffect(() => {
        if (!router.isReady) return;
        // if (router.pathname.includes("users")) console.log(router.query.id);
        // else console.log(router.query.s_id);

        setBackgroundURL(
            router.pathname.includes("users")
                ? Object.keys(usersList).includes(router.query.id)
                    ? `${usersList[router.query.id].userInfo.userCoverURL}`
                    : ""
                : Object.keys(mapsList).includes(router.query.s_id)
                ? `${mapsList[router.query.s_id].mapCoverURL}`
                : ""
        );
    }, [router.isReady, router.pathname]);

    return (
        <div className="background">
            <style jsx>
                {`
                    .background {
                        position: fixed;
                        width: 100vw;
                        height: 100vh;

                        background: linear-gradient(0deg, rgb(0 0 0 /0.6), rgb(0 0 0 /0.6)),
                            linear-gradient(
                                to bottom,
                                hsl(0, 0%, 0%) 0%,
                                hsla(0, 0%, 0%, 0.836) 2.7px,
                                hsla(0, 0%, 0%, 0.69) 9.9px,
                                hsla(0, 0%, 0%, 0.562) 21.6px,
                                hsla(0, 0%, 0%, 0.45) 37.2px,
                                hsla(0, 0%, 0%, 0.354) 55.8px,
                                hsla(0, 0%, 0%, 0.272) 77.1px,
                                hsla(0, 0%, 0%, 0.203) 100.5px,
                                hsla(0, 0%, 0%, 0.147) 125.7px,
                                hsla(0, 0%, 0%, 0.101) 151.5px,
                                hsla(0, 0%, 0%, 0.066) 178.2px,
                                hsla(0, 0%, 0%, 0.039) 204.9px,
                                hsla(0, 0%, 0%, 0.02) 230.7px,
                                hsla(0, 0%, 0%, 0.008) 255.6px,
                                hsla(0, 0%, 0%, 0.002) 279px,
                                hsla(0, 0%, 0%, 0) 300px
                            ),
                            url("${backgroundURL}");

                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        background-size: cover;

                        filter: blur(${router.pathname.includes("users") ? "2px" : "10px"});
                        z-index: 0;
                    }
                `}
            </style>
        </div>
    );
};

// class Background extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userId: 8266808,
//         };
//     }
//     render() {
//         const backgroundURL = this.state.userId ? `url("/static/users/${this.state.userId}.png")` : "url()";
//         return (
//             <div className="background">
//                 <style jsx>
//                     {`
//                         .background {
//                             position: fixed;
//                             width: 100vw;
//                             height: 100vh;

//                             background: linear-gradient(0deg, rgb(0 0 0 /0.6), rgb(0 0 0 /0.6)),
//                                 linear-gradient(
//                                     to bottom,
//                                     hsl(0, 0%, 0%) 0%,
//                                     hsla(0, 0%, 0%, 0.836) 2.7px,
//                                     hsla(0, 0%, 0%, 0.69) 9.9px,
//                                     hsla(0, 0%, 0%, 0.562) 21.6px,
//                                     hsla(0, 0%, 0%, 0.45) 37.2px,
//                                     hsla(0, 0%, 0%, 0.354) 55.8px,
//                                     hsla(0, 0%, 0%, 0.272) 77.1px,
//                                     hsla(0, 0%, 0%, 0.203) 100.5px,
//                                     hsla(0, 0%, 0%, 0.147) 125.7px,
//                                     hsla(0, 0%, 0%, 0.101) 151.5px,
//                                     hsla(0, 0%, 0%, 0.066) 178.2px,
//                                     hsla(0, 0%, 0%, 0.039) 204.9px,
//                                     hsla(0, 0%, 0%, 0.02) 230.7px,
//                                     hsla(0, 0%, 0%, 0.008) 255.6px,
//                                     hsla(0, 0%, 0%, 0.002) 279px,
//                                     hsla(0, 0%, 0%, 0) 300px
//                                 ),
//                                 ${backgroundURL};

//                             background-repeat: no-repeat;
//                             background-attachment: fixed;
//                             background-size: cover;

//                             filter: blur(2px);
//                             z-index: 0;
//                         }
//                     `}
//                 </style>
//             </div>
//         );
//     }
// }

export default Background;
