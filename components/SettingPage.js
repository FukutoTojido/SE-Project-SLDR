import React, { useState } from "react";
import { ShowChangeEmailField, ShowChangePasswordField, ChangeEmail } from "./SettingPageComponent";
import styles from "../styles/Settings.module.css";
import { Label } from "./BasicComponent";

export function SettingPage() {
    return (
        <main className={styles.main}>
            <Label label="password" />
            <ShowChangePasswordField />
            <Label label="email" />
            {/* <ShowChangeEmailField /> */}
            <ChangeEmail />
            <Label label="gameplay preferences" />
        </main>
    );
}
