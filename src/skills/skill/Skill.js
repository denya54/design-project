import React from "react";
import styles from './Skill.module.scss'


export const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon} style={props.style}></div>
            <div className={styles.skillInfo}>
                <h3 className={styles.skillTitle}>{props.name}</h3>
                <span className={styles.description}> {props.description}</span>

            </div>

        </div>
    )
}