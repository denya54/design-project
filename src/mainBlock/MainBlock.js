import React from "react";
import styles from './MainBlock.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const MainBlock = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi</span>
                    <h1>My name is Denis Khvesenya</h1>
                    <p>Frontend-Developer</p>

                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}