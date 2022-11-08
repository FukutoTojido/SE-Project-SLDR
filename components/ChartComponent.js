import React, { Component, useState, useEffect } from "react";
import { Label } from "./BasicComponent";

const ChartDetail = (props) => {
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        console.log(props);
        setMapData(props.setData);
    });

    if (mapData !== {})
        return (
            <div className="container">
                <Label label="Chart Detail"></Label>
                <div className="ChartDetailContainer"></div>
                <style jsx>
                    {`
                        .container {
                            width: 100%;

                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                        }

                        .ChartDetailContainer {
                            position: relative;

                            width: 100%;
                            height: 250px;

                            background: linear-gradient(
                                    -90deg,
                                    rgba(0, 0, 0, 0) 60%,
                                    rgba(17, 17, 17, 0.865983893557423) 90%,
                                    rgba(21, 21, 21, 1) 100%
                                ),
                                url("${mapData.mapCoverURL}");
                            background-size: cover;
                            background-position: center;

                            border-radius: 20px;
                        }
                    `}
                </style>
            </div>
        );
};

export { ChartDetail };
