import React from "react";
import './App.module.scss';
import {Header} from "./header/Header";
import {MainBlock} from "./mainBlock/MainBlock";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <MainBlock/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
