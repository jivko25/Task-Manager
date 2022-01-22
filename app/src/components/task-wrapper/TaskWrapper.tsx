import React from "react"
import styles from './TaskWrapper.module.scss'

interface Props {
    title: string
    content: object
}

const titleClasses = {
    'To Do' : 'title-todo',
    'In progress' : 'title-progress',
    'Done' : 'title-done'
}


export const TaskWrapper: React.FC<Props> = ({title, content}) => {
    const objEntries = Object.entries(titleClasses);
    return(
        <div className={styles.wrapper}>
            <div className={styles[Object.fromEntries(objEntries)[title]]}>
                <h1>
                    {title}
                </h1>
            </div>
            <div className={styles.content}>
            </div>
        </div>
    )
}

