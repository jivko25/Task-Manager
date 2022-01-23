import React from 'react';
import styles from './Modal.module.scss';


interface Props{
    title : string
    content : React.ReactNode
    actions : React.ReactNode
    isOpen: boolean
}

export const Modal : React.FC<Props> = ({title, content, actions, isOpen}) => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>{title}</h1>
        </div>
        <div className={styles.content}>
            {content} 
        </div>
        <div className={styles.actions}>
            {actions}
        </div>
    </div>
    )
}