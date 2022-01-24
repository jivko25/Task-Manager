import { Button } from "../button/Button";
import { Modal } from "../modal/Modal";
import styles from './NewTaskModal.module.scss'


interface Props{
    onAddTask : Function,
    onClose : Function,
    users : Array<string>
}

export const NewTaskModal : React.FC<Props> = ({onAddTask, onClose, users}) => {
    const content = 
    <div className={styles['content-wrapper']}>
        <div className={styles['content-row']}>
            <h3>Title:</h3>
            <input type="text"/>
        </div>
        <div className={styles['content-row']}>
            <h3>Description:</h3>
            <textarea/>
        </div>
        <div className={styles['content-row']}>
            <h3>Assignee:</h3>
            <select>
                {users.map(user => {
                    return(
                        <option value={user}>{user}</option>
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