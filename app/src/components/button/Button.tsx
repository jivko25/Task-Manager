import React from "react";
import styles from './Button.module.scss'


interface Props {
    onAction : Function
    title : string
}

export const Button: React.FC<Props> = ({onAction, title}) => {
    
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={() => {onAction()}}>{title}</button>
        </div>
    )
}