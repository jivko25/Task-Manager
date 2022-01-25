import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { useStore } from "../common/StoreContext";
import { Modal } from "../modal/Modal";
import styles from './EditTaskModal.module.scss'


interface Props{
    id : string
    onClose : Function,
    onError : Function,
    users : Array<string>,
    titleValue : string,
    descriptionValue : string,
    assigneeValue : string,
    statusValue : string
}


export const EditTaskModal : React.FC<Props> = ({id, onClose, onError, users, titleValue, descriptionValue, assigneeValue, statusValue}) => {    
    
    const [title, setTitle] = useState(titleValue);
    const [description, setDescription] = useState(descriptionValue);
    const [assignee, setAssignee] = useState(assigneeValue);
    const [status, setStatus] = useState(statusValue)

    const store = useStore();

    const task = JSON.parse(JSON.stringify(store.findTaskById(id)));
    
    let newTask = task[0];
    useEffect(() => {
            newTask = {
                id : task[0].id,
                title : title.trim(),
                description : description.trim(),
                assignee : assignee,
                status : status
            }
    }, [title, description, assignee, status])

    const onSubmit = () => {
        if (Object.values(newTask).indexOf('') === -1){
            store.editTask(task[0], newTask);
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
            }} value={assignee}>
                {users.map(user => {
                    return(
                        <option value={user} key={user}>{user}</option>
                    )
                })}
            </select>
        </div>
        <div className={styles['content-row']}>
            <h3>Status:</h3>
            <select onChange={(e) => {
                setStatus(e.target.value)
            }} value={status}>
                <option value={'To Do'} key={'To Do'} disabled={statusValue == 'Done'}>{'To Do'}</option>
                <option value={'In Progress'} key={'In Progress'} disabled={statusValue == 'Done'}>{'In Progress'}</option>
                <option value={'Done'} key={'Done'} disabled={statusValue == 'To Do'}>{'Done'}</option>
            </select>
        </div>
    </div>;

    const actions = <div className={styles.buttons}>
        <Button onAction={() => {onClose()}} title={'Close'}/>
        <Button onAction={() => {onSubmit()}} title={'Edit'}/>
    </div>
    return(
        <div>
            <Modal title='Edit task' content={content} actions={actions}/>
        </div>
    )
}