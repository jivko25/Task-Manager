import { useState } from "react";
import { Button } from "../button/Button";
import { Modal } from "../modal/Modal";
import styles from './NewTaskModal.module.scss'


interface Props{
    onAddTask : Function,
    onClose : Function,
    onError : Function,
    users : Array<string>
}

export const NewTaskModal : React.FC<Props> = ({onError, onAddTask, onClose, users}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');

    const onSubmit = () => {
        if (title.trim() !== '' && description.trim() !== '' && assignee.trim() !== ''){
            onAddTask(title, description, assignee);
            onClose();
        }
        else{
            onError('All fields are required!');
            onClose();
        }
    }

    const content = 
    <div className={styles['content-wrapper']}>
        <div className={styles['content-row']}>
            <h3>Title:</h3>
            <input type="text" value={title} onChange={(e) => {
                setTitle(e.target.value);
            }}/>
        </div>
        <div className={styles['content-row']}>
            <h3>Description:</h3>
            <textarea value={description} onChange={(e) => {
                setDescription(e.target.value);
                
            }}/>
        </div>
        <div className={styles['content-row']}>
            <h3>Assignee:</h3>
            <select onChange={(e) => {
                setAssignee(e.target.value)
                console.log(assignee);
                
            }}>
                <option value={''} key={'nothing'}></option>
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
        <Button onAction={() => {onSubmit()}} title={'Add'}/>
    </div>
    return(
        <div>
            <Modal title='New task' content={content} actions={actions}/>
        </div>
    )
}