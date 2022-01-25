import { useEffect, useState } from 'react';
import styles from './App.module.scss'
import { Modal } from './components/modal/Modal';
import { Button } from './components/button/Button';
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';
import { NewTaskModal } from './components/new-task/NewTaskModal';
import { EditTaskModal } from './components/edit-task/EditTaskModal';
import { useStore } from './components/common/StoreContext';
import { Error } from './components/error/Error';
import { Filter } from './components/filter/Filter';

function App() {
  const [onOpenCreate, setOnOpenCreate] = useState(false);
  const [onOpenEdit, setOnOpenEdit] = useState(false);

  const [onOpenError, setOnOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [toDos, setToDos] = useState([] as Array<Object>);
  const [inProgress, setInProgress] = useState([] as Array<Object>);
  const [done, setDone] = useState([] as Array<Object>);

  const [users, setUsers] = useState([] as Array<string>);
  const [userFilterValue, setUserFilterValue] = useState('');


  const store = useStore();

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(store.tasks));
    
      const content = userFilterValue !== '' ? data.filter((item : any) => item.assignee === userFilterValue) : data;
    console.log(content);
    const toDo = content.filter((item: any) => item.status === 'To Do');
    const progress = content.filter((item: any) => item.status === 'In Progress');
    const done = content.filter((item: any) => item.status === 'Done');
    
    setUsers(JSON.parse(JSON.stringify(store.users)))
    setToDos(toDo);
    setInProgress(progress);
    setDone(done);
    
  }, [onOpenCreate, onOpenEdit, userFilterValue])

  const handleError = (message : string) => {
    setOnOpenError(true);
    setErrorMessage(message);
    setTimeout(() => {
      setOnOpenError(false);
    }, 3000);
  }

  return (
    <div>
      <div className={!onOpenCreate && !onOpenEdit ? styles.wrapper : styles['wrapper-blur']}>
          <TaskWrapper title={"To Do"} content={toDos} onEdit={() => {setOnOpenEdit(true)}}/>
          <TaskWrapper title={"In progress"} content={inProgress} onEdit={() => {setOnOpenEdit(true)}}/>
          <TaskWrapper title={"Done"} content={done} onEdit={() => {setOnOpenEdit(true)}}/>
          <div className={styles.buttons}>
            <Button onAction={() => {setOnOpenCreate(true)}} title={'New task'}/>
            <Filter values={users} setValue={(value : string) => {setUserFilterValue(value)}}/>
          </div>
      </div>
      <div className={styles.modal}>
        {onOpenCreate &&
          <NewTaskModal onAddTask={(title : string, description : string, assignee : string ) => {store.addTask(title, description, assignee)}}
          onClose={() => {setOnOpenCreate(false)}}
          users={users}
          onError={(message : string) => {handleError(message)}}
          />
        }
        {onOpenEdit &&
        <EditTaskModal
          onClose={() => {setOnOpenEdit(false)}}
          users={users}
          titleValue={store.edit.title}
          id={store.edit.id}
          descriptionValue={store.edit.description}
          assigneeValue={store.edit.assignee}
          statusValue={store.edit.status}
          onError={(message : string) => {handleError(message)}}
          />
        }
        {onOpenError && 
        <Error message={errorMessage}></Error>
        }
      </div>
    </div>
  );
}

export default App;
