import React from "react";
import styles from './Footer.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Link} from "./link/Link";

export const Footer = () => {

    const myLinks = [
        {id: 1001, name: 'Instagram', ico: ''},
        {id: 1002, name: 'Facebook', ico: ''},
        {id: 1003, name: 'LinkedIn', ico: ''},
        {id: 1004, name: 'VK', ico: ''}
    ]

    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h3 className={styles.title}>Denis Khvesenya</h3>
                <div className={styles.footer}>
                    {myLinks.map(lk => {
                        return <Link
                            name={lk.name}
                            key={lk.id}
                            ico={lk.ico}
                        />
                    })}

                </div>
                <span className={styles.description}>©2022 All rights not reserved</span>
            </div>

        </div>
    )
}