import React from "react"
import { useStore } from "../common/StoreContext";
import { Task } from "../task/Task";
import styles from './TaskWrapper.module.scss'

interface Props {
    title: string
    content: Array<Object>
    onEdit : Function
}

const titleClasses = {
    'To Do' : 'title-todo',
    'In progress' : 'title-progress',
    'Done' : 'title-done'
}


export const TaskWrapper: React.FC<Props> = ({title, content, onEdit}) => {
    const objEntries = Object.entries(titleClasses);
    const store = useStore();
    
    return(
        <div className={styles.wrapper}>
            <div className={styles[Object.fromEntries(objEntries)[title]]}>
                <h1>
                    {title}
                </h1>
            </div>
            <div className={styles.content}>
                {content.map((item: any)=> {
                    return(
                        <div key={item.id} onClick={() => {store.edit = item;onEdit()}}>
                        <Task id={item.id} title={item.title} description={item.description} assignee={item.assignee} status={item.status}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

