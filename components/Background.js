import React, { Component } from "react";
import { useState, useEffect } from "react";
import { authorizedStatus } from "../pages/_app";

const Background = (props) => {
    const [backgroundURL, setBackgroundURL] = useState("");

    useEffect(() => {
        if (props.data !== undefined) {
            // console.log(props.data);
            switch (props.data.dataType) {
                case "users": {
                    if (props.data.userInfo !== undefined) setBackgroundURL(props.data.userInfo.userCoverURL);
                    else if (authorizedStatus.isAuthorized) setBackgroundURL(authorizedStatus.authorizationInfo.userCoverURL);
                    else setBackgroundURL("/static/default.png");
                    break;
                }
                case "charts": {
                    if (props.data.mapId !== undefined) setBackgroundURL(props.data.mapCoverURL);
                    else if (authorizedStatus.isAuthorized) setBackgroundURL(authorizedStatus.authorizationInfo.userCoverURL);
                    else setBackgroundURL("/static/default.png");
                    break;
                }
                default: {
                    if (authorizedStatus.isAuthorized) setBackgroundURL(authorizedStatus.authorizationInfo.userCoverURL);
                    else setBackgroundURL("/static/default.png");
                }
            }
        } else {
            setBackgroundURL("/static/default.png");
        }

        // if (authorizedStatus.isAuthorized) {
        //     if (router.pathname.includes("users"))
        //         setBackgroundURL(
        //             Object.keys(usersList).includes(router.query.id)
        //                 ? usersList[router.query.id].userInfo.userCoverURL
        //                 : usersList[authorizedStatus.authorizationInfo.userId].userInfo.userCoverURL
        //         );
        //     else if (router.pathname.includes("charts"))
        //         setBackgroundURL(
        //             Object.keys(mapsList).includes(router.query.s_id)
        //                 ? mapsList[router.query.s_id].mapCoverURL
        //                 : usersList[authorizedStatus.authorizationInfo.userId].userInfo.userCoverURL
        //         );
        //     else setBackgroundURL(usersList[authorizedStatus.authorizationInfo.userId].userInfo.userCoverURL);
        // } else setBackgroundURL("/static/default.png");
    });

    return (
        <div className="background">
            <style jsx>
                {`
                    .background {
                        position: fixed;
                        width: 100vw;
                        height: 100vh;

                        background: linear-gradient(0deg, rgb(0 0 0 /0.6), rgb(0 0 0 /0.6)), url("${backgroundURL}");

                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        background-size: cover;

                        filter: blur(${authorizedStatus.isAuthorized ? "10px" : "0px"});
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
