import React from "react";
import styles from './Link.module.scss'


export const Link = (props) => {
    return (
        <div className={styles.link}>
            <div className={styles.icon}></div>
            <a href={''} className={styles.networkName}>
                {props.name}
            </a>

        </div>
    )
}