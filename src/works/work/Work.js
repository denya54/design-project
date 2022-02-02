import React from "react";
import styles from './Work.module.scss'


export const Work = (props) => {

    return (
        <div className={styles.work}>
            <div className={styles.icon} style={props.style}>
                {/*<a className={styles.btnView}>View</a>*/}
                <button className={styles.btnView} onClick={()=>{alert('click')}}>View</button>
            </div>
            <div className={styles.workInfo}>
                <h3 className={styles.workTitle}>{props.name}</h3>
                <span className={styles.description}> {props.description}</span>
            </div>


        </div>
    )
}