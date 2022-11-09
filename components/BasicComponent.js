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

export { Label };
