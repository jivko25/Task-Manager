import { useState } from "react";
import { Button } from "../button/Button";
import { Modal } from "../modal/Modal";
import styles from './NewTaskModal.module.scss'


interface Props{
    onAddTask : Function,
    onClose : Function,
    users : Array<string>
}

export const NewTaskModal : React.FC<Props> = ({onAddTask, onClose, users}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');

    const content = 
    <div className={styles['content-wrapper']}>
        <div className={styles['content-row']}>
            <h3>Title:</h3>
            <input type="text" onChange={(e) => {
                setTitle(e.target.value);
            }}/>
        </div>
        <div className={styles['content-row']}>
            <h3>Description:</h3>
            <textarea onChange={(e) => {
                setDescription(e.target.value);
                
            }}/>
        </div>
        <div className={styles['content-row']}>
            <h3>Assignee:</h3>
            <select onChange={(e) => {
                setAssignee(e.target.value)
            }}>
                {users.map(user => {
                    return(
                        <option value={user} key={user}>{user}</option>
                    )
                })}
            </select>
        </div>
    </div>;

    const actions = <div className={styles.buttons}>
        <Button onAction={() => {onClose()}} title={'Close'}/>
        <Button onAction={() => {onAddTask()}} title={'Add'}/>
    </div>
    return(
        <div>
            <Modal title='New task' content={content} actions={actions}/>
        </div>
    )
}