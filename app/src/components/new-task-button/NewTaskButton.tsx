import React from "react";
import styles from './NewTaskButton.module.scss'


interface Props {
    onNewTask : Function
}

export const NewTaskButton: React.FC<Props> = ({onNewTask}) => {
    
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={() => {onNewTask()}}>New task</button>
        </div>
    )
}