import React, { Component, useState, useEffect } from "react";

class Label extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="label">
                {this.props.label}
                <style jsx>
                    {`
                        .label {
                            position: relative;
                            width: 100%;
                            height: 14px;

                            font-size: 16px;
                            font-weight: 500;
                            line-height: 14px;

                            padding-left: 14px;

                            display: flex;
                            align-items: center;
                        }

                        .label::before {
                            position: absolute;
                            content: "";

                            width: 4px;
                            height: 14px;

                            background-color: white;
                            border-radius: 2px;

                            transform: translateX(-10px);
                        }
                    `}
                </style>
            </div>
        );
    }
}

const LoadingAnimation = () => {
    return (
        <div className="App">
            <div className="loading">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="90px" height="90px">
                    <circle cx="45" cy="45" r="30" strokeLinecap="round" />
                </svg>
                <style jsx>
                    {`
                        @keyframes spin {
                            0% {
                                scale: 1 1;
                                stroke-dashoffset: 200;
                                transform: none;
                            }
                            50% {
                                scale: 1 1;
                                stroke-dashoffset: 0;
                                transform: none;
                            }
                            50.0001% {
                                scale: 1 -1;
                                transform: translateY(-90px);
                            }
                            99.9999% {
                                scale: 1 -1;
                                stroke-dashoffset: 200;
                                transform: translateY(-90px);
                            }
                            100% {
                                scale: 1 1;
                                transform: none;
                            }
                        }

                        @keyframes osuSpinnerKurwa {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(360deg);
                            }
                        }

                        .loading {
                            width: 100%;

                            padding: 50px;

                            background-color: #151515;
                            border-radius: 20px;

                            display: flex;
                            justify-content: center;
                        }

                        circle {
                            fill: none;
                            stroke: white;
                            stroke-width: 10px;
                            stroke-dasharray: 200;
                            stroke-dashoffset: 150;

                            animation: spin 2s infinite;
                        }

                        svg {
                            animation: linear osuSpinnerKurwa 2s infinite;
                        }
                    `}
                </style>
            </div>
        </div>
    );
};

export { Label, LoadingAnimation };
