import React from 'react'
import styles from '../styles/Header.module.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const LoginButton = ({openForm}) => {

  return (
    <button className={styles.loginBtn} onClick={openForm}>
        <AccountCircleRoundedIcon />
        <p>Login</p>
    </button>
  )
}

export default LoginButton