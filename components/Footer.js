import React, { Component } from "react";
import styles from "../styles/Footer.module.css";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className={styles.footer}>Sl::dr powered 2022 - 2022</div>
        )
    }
}

export default Footer;