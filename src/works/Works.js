import React from "react";
import styles from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import TodoIMG from '../assets/pictures/todo.jpg'
import SocNetIMG from '../assets/pictures/social.png'

export const Works = () => {


    const myWorks = [
        {
            id: 101,
            name: 'Social Network',
            description: 'This is my first work',
            link: '',
            ico: {
                backgroundImage: `url(${SocNetIMG})`,
            }
        },

        {
            id: 102,
            name: 'Todolist',
            description: 'This is my last work and it is not end',
            link: '',
            ico: {
                backgroundImage: `url(${TodoIMG})`,
            }
        }
    ]

    return (
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container} ${styles.worksContainer}`}>
                <Title nameBlock={'My Works'}/>
                <div className={styles.works}>
                    {myWorks.map(work => {
                        return <Work
                            style={work.ico}
                            key={work.id}
                            name={work.name}
                            // backgroundImage={work.backgroundImage}
                            description={work.description}
                            link={work.link}
                        />
                    })}

                </div>

            </div>

        </div>
    )
}