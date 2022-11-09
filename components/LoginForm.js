import React, { useState, forwardRef, useImperativeHandle } from 'react'
import styles from '../styles/LoginForm.module.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const LoginForm = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
        openForm() {
            setIsOpen(true)
        }
    }));

    return (
        <div className={ styles.formBackground } style={ isOpen ? {display: "flex"} : {display: "none"}}>
            {isOpen &&
            <form className={ styles.loginForm }>
                <button className={ styles.exitBtn} onClick={() => setIsOpen(false)}>
                    <CloseRoundedIcon />
                </button>
                <h1 className={styles.h1}>Login</h1>
                <div>
                    <input className={styles.input} placeholder='Username...'/>
                </div>
                <div>
                    <input className={styles.input} placeholder='Password...'/> 
                </div>
                <p className={styles.p}>Forgot password?</p>
                <button className={styles.loginBtn}>Login</button>
                <p className={styles.p}>Not a member? 
                    <span className={styles.span}> Sign up now</span>
                </p>
            </form>
            }

        </div>
    )
});

export default LoginForm