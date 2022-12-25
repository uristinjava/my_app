import React from "react";
import '../styles/MessegesList.css'
import styles from './messagesList.module.css'

const MessegesList = ({ messeges }) => {
    return (
        <div className={styles.messages}>

            <h1>MessegesList</h1>

            {messeges.map((msg, index) => (
                <div key={index} >{msg.text}</div>
            ))}

        </div >
    )
};

export default MessegesList