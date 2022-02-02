import React from "react";
import styles from './MainBlock.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import avatar from '../assets/pictures/ava.jpg'

export const MainBlock = () => {

    let ava = {
        backgroundImage: `url(${avatar})`
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <h4 className={styles.position}>Frontend-Developer</h4>
                    <h1><span>Hi, I'm </span>Denis Khvesenya</h1>
                    <p className={styles.aboutMe}>In future this field will write about my best achievements. Now this field is empty. You can place an ad for 2$ </p>

                </div>
                <div className={styles.photo} style={ava}>
                </div>
            </div>
        </div>
    )
}