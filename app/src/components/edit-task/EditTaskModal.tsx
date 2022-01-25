import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { useStore } from "../common/StoreContext";
import { Modal } from "../modal/Modal";
import styles from './EditTaskModal.module.scss'


interface Props{
    onAddTask : Function,
    onEdit : Function,
    onClose : Function,
    users : Array<string>,
    titleValue : string,
    descriptionValue : string,
    assigneeValue : string
}


export const EditTaskModal : React.FC<Props> = ({onEdit, onClose, users, titleValue, descriptionValue, assigneeValue}) => {    
    
    const [title, setTitle] = useState(titleValue);
    const [description, setDescription] = useState(descriptionValue);
    const [assignee, setAssignee] = useState(assigneeValue);

    const store = useStore();

    const task = JSON.parse(JSON.stringify(store.findTaskByTitle(titleValue)));
    
    let newTask = {};
    useEffect(() => {
        newTask = {
            id : task[0].id,
            title : title,
            description : description,
            assignee : assignee,
            status : task[0].status,
        }
    }, [title, description, assignee])

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
            }} value={assignee}>
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
        <Button onAction={() => {store.editTask(task[0], newTask);console.log(store.tasks);onClose()}} title={'Edit'}/>
    </div>
    return(
        <div>
            <Modal title='Edit task' content={content} actions={actions}/>
        </div>
    )
}