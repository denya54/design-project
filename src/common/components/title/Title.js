import React from "react";
import styles from './Title.module.css'

export const Title = (props) => {

    return (
                <div className={styles.title}>
                    <h2>{props.nameBlock}</h2>
                </div>
    )
}