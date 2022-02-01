import React from "react";
import styles from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Link} from "./link/Link";

export const Footer = () => {

    const myLinks = [
        {id: 1001, name: '', ico: ''},
        {id: 1002, name: '', ico: ''},
        {id: 1003, name: '', ico: ''},
        {id: 1004, name: '', ico: ''}
    ]

    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h3 className={styles.title}>Denis Khvesenya</h3>
                <div className={styles.footer}>
                    {myLinks.map(lk => {
                        return <Link
                        key={lk.id}
                        ico={lk.ico}
                        />
                    })}

                </div>
                <span>©2022 All rights reserved</span>
            </div>

        </div>
    )
}