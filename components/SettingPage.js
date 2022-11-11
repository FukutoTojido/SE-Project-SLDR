import  ReactDOM  from "react-dom/client"
import React,{useState} from "react"
import { ShowChangeEmailField,ShowChangePasswordField } from "./SettingPageComponent"
import styles from "../styles/Settings.module.css";
export function SettingPage() {
    const[showChangeEmail,setShowChangeEmail]=useState(false)
    const[show,setShow]=useState(false)

    return (
        <main className={styles.main}>
           
            <div className={styles.manageAccount}>
                <img className={styles.settingImg} src="https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/setting.png" alt="Error"/>
                <h1 className={styles.manageAccountTitle}>Account Setting</h1>
            </div>

            <div className={styles.changeAccountInformation}>
                <img className={styles.changeAccountImg} src="https://cdn-icons-png.flaticon.com/512/6146/6146587.png" alt="Error"/>
                <div className={styles.changeAccountText}>
                    <p className={styles.changeAccountText1}>Change Password</p>
                    <p className={styles.changeAccountText2}>Your password should include uppercase, letters, numbers and symbols</p>
                </div>
                    <button className={styles.editButton} onClick={()=>setShow(!show)}>Edit</button>
                </div>

            <div>
                 {show? <ShowChangePasswordField/>:null}
            </div>
              
        

            <div className={styles.changeAccountInformation}>
                <img className={styles.changeAccountImg} src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png" alt="Error"/>
                <div className={styles.changeAccountText}>
                    <h1 className={styles.changeAccountText1}>Change Email</h1>
                    <h2 className={styles.changeAccountText2}>This email will be used to verify your account</h2>
                </div>
                <button className={styles.editButton} onClick={()=>setShowChangeEmail(!showChangeEmail)}>Edit</button>
            </div>
          
            <div>
                {showChangeEmail? <ShowChangeEmailField/>:null}
            </div>

             <div className={styles.childfooter}></div>   

        </main>
    )


}
