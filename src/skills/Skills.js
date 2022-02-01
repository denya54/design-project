import React from "react";
import styles from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {

    const mySkills = [
        {id: 1, name: 'React', ico: '', description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components'},
        {id: 2, name: 'JS', ico: '', description: 'JavaScript  is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS'},
        {id: 3, name: 'CSS', ico: '', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML'}
    ]



    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title nameBlock={'My Skills'}/>
                <div className={styles.skills}>
                    {mySkills.map(sk => {
                        return <Skill
                            key={sk.id}
                            name={sk.name}
                            ico={sk.ico}
                            description={sk.description}
                        />
                    })}

                </div>

            </div>

        </div>
    )
}