import React, { useRef, useState } from 'react';
import { useAuth } from '../context/auth';
import { useRouter } from 'next/router'
import axios from 'axios';
import styles from '../styles/LoginForm.module.css'

const LoginForm = () => {
    const router = useRouter()
    const [err, setErr] = useState("")
    const {auth, updateAuth} = useAuth()
    const userRef = useRef()
    const passRef = useRef()

    async function handleLogin(e) {
        e.preventDefault()
        if(userRef.current.value && passRef.current.value) {
            const res = await axios.post('api/v1/auth', {
                username: userRef.current.value,
                password: passRef.current.value
            })
            if(Object.entries(res.data).length) {
                updateAuth(res.data)
                router.push('/')
                setErr("")
            } else{
                setErr('User not exist!')
            }
        } else{
            setErr('Password and name must not be blank')
        }
    }

    return (
        <div className={ styles.formBackground }>
            <form className={ styles.loginForm }>
                {/*
                <button className={ styles.exitBtn} onClick={() => setIsOpen(false)}>
                    <CloseRoundedIcon />
                </button>
                 */}
                <h1 className={styles.h1}>Login</h1>

                <div>
                    <input className={styles.input}  ref={userRef} placeholder='Username...'/>
                </div>
                    {err && <p className={styles.err}>{err}</p>}
                <div>
                    <input className={styles.input} type='password'  ref={passRef} placeholder='Password...'/> 
                </div>
                    {err && <p className={styles.err}>{err}</p>}
                <p className={styles.p}>Forgot password?</p>
                <button 
                    className={styles.loginBtn} 
                    onClick={(e) => {
                        handleLogin(e)
                    }}
                >
                    Login
                </button>
                <p className={styles.p}>Not a member? 
                    <span className={styles.span}> Sign up now</span>
                </p>
            </form>

        </div>
    )
};

export default LoginForm