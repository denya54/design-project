import React from "react";
import styles from './Title.module.scss'

export const Title = (props) => {

    return (
                <div className={styles.title}>
                    <h2>{props.nameBlock}</h2>
                </div>
    )
}