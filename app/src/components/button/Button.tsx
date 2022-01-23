import React from "react";
import styles from './Button.module.scss'


interface Props {
    onNewTask : Function
    title : string
}

export const Button: React.FC<Props> = ({onNewTask, title}) => {
    
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={() => {onNewTask()}}>{title}</button>
        </div>
    )
}