import React from "react";
import styles from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {

    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title nameBlock={'Contacts'}/>
                <form className={styles.contacts}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                    <button type={'submit'} className={styles.but}>Send</button>
                </form>
            </div>

        </div>
    )
}