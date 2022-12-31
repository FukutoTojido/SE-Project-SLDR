import { useState, useRef, useEffect } from "react";
import styles from "../styles/Settings.module.css";

const ChangeEmail = () => {
    return (
        <div className={styles.changeInformationField}>
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>current password</label>
                <input type="password" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>current email</label>
                <input type="text" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>new email</label>
                <input type="text" />
            </div>
            <button className={styles.updateButton}>
                <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/save--v1.png" />
                update
            </button>
        </div>
    );
};

export function ShowChangeEmailField() {
    const [showSendOTP, setShowSendOTP] = useState(true);
    const [showInsertOTP, setShowInsertOTP] = useState(false);

    return (
        <div>
            {showSendOTP ? <SendOTPField /> : null}
            {showInsertOTP ? <InsertOTPField /> : null}
        </div>
    );

    function SendOTPField() {
        return (
            <div className={styles.changeInformationField}>
                <img className={styles.OTPimg} src="https://www.microcosm.com/images/smartsign/email.png" alt="Error" />
                <h2>OTP Verification</h2>
                <h3>
                    We will send an <b>One Time Password</b> to your registered email
                </h3>
                <button className={styles.OTPButton} onClick={SendOTPButtonOnCLick}>
                    Send
                </button>
            </div>
        );
    }

    function SendOTPButtonOnCLick() {
        setShowSendOTP(false);
        setShowInsertOTP(true);
    }

    function InsertOTPField() {
        return (
            <div className={styles.changeInformationField}>
                <img
                    className={styles.OTPimg}
                    src="https://ds9xi3hub5xxi.cloudfront.net/cdn/farfuture/otEn1mSO8Tk3mLVPFxYMCMwRn-qtie_ueonsviYMy0w/mtime:1608563955/sites/default/files/nodeicon/plugins_email-verification-plugin.png"
                    alt="Error"
                />
                <h2>OTP Verification</h2>
                <h3>We sent an OTP to your registered email. Enter the OTP to continue</h3>
                <div className={styles.InsertOTP}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <button className={styles.OTPButton}>Verify</button>
            </div>
        );
    }
}

export function ShowChangePasswordField() {
    return (
        <div className={styles.changeInformationField}>
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>current password</label>
                <input type="password" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>new password</label>
                <input type="password" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>confirm password</label>
                <input type="password" />
            </div>
            <button className={styles.updateButton}>
                <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/save--v1.png" />
                update
            </button>
        </div>
    );
}

const GameplayPreferences = () => {
    const speedRef = useRef(null);
    const judgementARef = useRef(null);
    const judgementBRef = useRef(null);
    const volumeRef = useRef(null);

    const speedInputRef = useRef(null);
    const judgementAInputRef = useRef(null);
    const judgementBInputRef = useRef(null);
    const volumeInputRef = useRef(null);

    const [speedState, setSpeed] = useState(0.0);
    const [judgementAState, setJudgementA] = useState(0.0);
    const [judgementBState, setJudgementB] = useState(0.0);
    const [volumeState, setVolume] = useState(100);

    const handleChange = (ref, stateChanger, depsRef) => {
        ref.current.value = [...ref.current.value].filter((s) => s === "." || (s >= "0" && s <= "9")).join("");

        if (ref.current.value.split(".")[1] && ref.current.value.split(".")[1].length > 1) {
            ref.current.value = ref.current.value.split(".")[0] + "." + ref.current.value.split(".")[1].at(0);
        }

        stateChanger(ref.current.value);
        depsRef.current.value = ref.current.value;
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) e.target.blur();
    };

    useEffect(() => {
        setSpeed(speedRef.current.value);
        setJudgementA(judgementARef.current.value);
        setJudgementB(judgementBRef.current.value);
        setVolume(volumeRef.current.value);

        speedInputRef.current.value = speedRef.current.value;
        judgementAInputRef.current.value = judgementARef.current.value;
        judgementBInputRef.current.value = judgementBRef.current.value;
        volumeInputRef.current.value = volumeRef.current.value;
    }, []);

    return (
        <div className="gameplayPreferences">
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>speed</label>
                <input
                    type="range"
                    step="0.5"
                    min="0.0"
                    max="10.0"
                    defaultValue="6.5"
                    ref={speedRef}
                    onChange={() => handleChange(speedRef, setSpeed, speedInputRef)}
                />
                <input type="text" ref={speedInputRef} onChange={() => handleChange(speedInputRef, setSpeed, speedRef)} onKeyUp={handleEnter} />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>judgement A</label>
                <input
                    type="range"
                    step="0.1"
                    min="-5"
                    max="5"
                    defaultValue="0"
                    ref={judgementARef}
                    onChange={() => handleChange(judgementARef, setJudgementA, judgementAInputRef)}
                />
                <input
                    type="text"
                    ref={judgementAInputRef}
                    onChange={() => handleChange(judgementAInputRef, setJudgementA, judgementARef)}
                    onKeyUp={handleEnter}
                />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>judgement B</label>
                <input
                    type="range"
                    step="0.1"
                    min="-5"
                    max="5"
                    defaultValue="0"
                    ref={judgementBRef}
                    onChange={() => handleChange(judgementBRef, setJudgementB, judgementBInputRef)}
                />
                <input
                    type="text"
                    ref={judgementBInputRef}
                    onChange={() => handleChange(judgementBInputRef, setJudgementB, judgementBRef)}
                    onKeyUp={handleEnter}
                />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>volume</label>
                <input
                    type="range"
                    step="10"
                    min="0"
                    max="100"
                    defaultValue="50"
                    ref={volumeRef}
                    onChange={() => handleChange(volumeRef, setVolume, volumeInputRef)}
                />
                <input type="text" ref={volumeInputRef} onChange={() => handleChange(volumeInputRef, setVolume, volumeRef)} onKeyUp={handleEnter} />%
            </div>
            <style jsx>{`
                .gameplayPreferences {
                    width: 100%;

                    padding: 10px;
                    padding-left: 50px;

                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;

                    gap: 10px;
                }

                input[type="range"] {
                    height: 27px;
                    -webkit-appearance: none;
                    margin: 10px 0;
                    width: 400px;

                    background: none;
                }
                input[type="range"]:focus {
                    outline: none;
                }
                input[type="range"]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 10px;
                    cursor: pointer;
                    animate: 0.2s;
                    box-shadow: 0px 0px 0px #000000;
                    background: #242424;
                    border-radius: 50px;
                    border: 0px solid #000000;
                }
                input[type="range"]::-webkit-slider-thumb {
                    box-shadow: 0px 0px 0px #000000;
                    height: 20px;
                    width: 20px;
                    border-radius: 50px;
                    background: #696969;
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -5.5px;
                }
                input[type="range"]:focus::-webkit-slider-runnable-track {
                    background: #242424;
                }
                input[type="range"]::-moz-range-track {
                    width: 100%;
                    height: 10px;
                    cursor: pointer;
                    animate: 0.2s;
                    box-shadow: 0px 0px 0px #000000;
                    background: #3071a9;
                    border-radius: 50px;
                    border: 0px solid #000000;
                }
                input[type="range"]::-moz-range-thumb {
                    box-shadow: 0px 0px 0px #000000;
                    border: 1px solid #000000;
                    height: 20px;
                    width: 20px;
                    border-radius: 50px;
                    background: #363636;
                    cursor: pointer;
                }
                input[type="range"]::-ms-track {
                    width: 100%;
                    height: 10px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: transparent;
                    border-color: transparent;
                    color: transparent;
                }
                input[type="range"]::-ms-fill-lower {
                    background: #3071a9;
                    border: 0px solid #000000;
                    border-radius: 100px;
                    box-shadow: 0px 0px 0px #000000;
                }
                input[type="range"]::-ms-fill-upper {
                    background: #3071a9;
                    border: 0px solid #000000;
                    border-radius: 100px;
                    box-shadow: 0px 0px 0px #000000;
                }
                input[type="range"]::-ms-thumb {
                    margin-top: 1px;
                    box-shadow: 0px 0px 0px #000000;
                    border: 1px solid #000000;
                    height: 20px;
                    width: 20px;
                    border-radius: 50px;
                    background: #363636;
                    cursor: pointer;
                }
                input[type="range"]:focus::-ms-fill-lower {
                    background: #3071a9;
                }
                input[type="range"]:focus::-ms-fill-upper {
                    background: #3071a9;
                }

                .gameplayPreferences input[type="text"] {
                    width: 50px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export { ChangeEmail, GameplayPreferences };
