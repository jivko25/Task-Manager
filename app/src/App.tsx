import { useEffect, useState } from 'react';
import styles from './App.module.scss'
import { Modal } from './components/modal/Modal';
import { Button } from './components/button/Button';
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';
import { NewTaskModal } from './components/new-task/NewTaskModal';
import { EditTaskModal } from './components/edit-task/EditTaskModal';
import { useStore } from './components/common/StoreContext';
import { Task } from './components/task/Task';

function App() {
  const [onOpenCreate, setOnOpenCreate] = useState(false);
  const [onOpenEdit, setOnOpenEdit] = useState(false);

  const [toDos, setToDos] = useState([] as Array<Object>);
  const [inProgress, setInProgress] = useState([] as Array<Object>);
  const [done, setDone] = useState([] as Array<Object>);
  
  const [taskForEdit, setTaskForEdit] = useState(null as any)

  const store = useStore();

  useEffect(() => {
    const content = JSON.parse(JSON.stringify(store.tasks));
    const toDo = content.filter((item: any) => item.status === 'To Do');
    const progress = content.filter((item: any) => item.status === 'In Progress');
    const done = content.filter((item: any) => item.status === 'Done');
    
    
    setToDos(toDo);
    setInProgress(progress);
    setDone(done);
    
  }, [onOpenCreate, onOpenEdit])


  
  const users = ['Ivan', 'Georgi', 'Peter']
  return (
    <div>
      <div className={!onOpenCreate && !onOpenEdit ? styles.wrapper : styles['wrapper-blur']}>
          <TaskWrapper title={"To Do"} content={toDos} onEdit={() => {setOnOpenEdit(true)}}/>
          <TaskWrapper title={"In progress"} content={inProgress} onEdit={() => {setOnOpenEdit(true)}}/>
          <TaskWrapper title={"Done"} content={done} onEdit={() => {setOnOpenEdit(true)}}/>
          <Button onAction={() => {setOnOpenCreate(true);}} title={'New task'}/>
      </div>
      <div className={styles.modal}>
        {onOpenCreate &&
          <NewTaskModal onAddTask={(title : string, description : string, assignee : string ) => {store.addTask(title, description, assignee)}}
          onClose={() => {setOnOpenCreate(false)}}
          users={users}
          />
        }
        {onOpenEdit &&
        <EditTaskModal onAddTask={() => {console.log('add');}}
          onClose={() => {setOnOpenEdit(false)}}
          onEdit={(newTask : any) => {store.editTask(taskForEdit, newTask);setOnOpenEdit(false)}}
          users={users}
          titleValue={store.edit.title}
          descriptionValue={store.edit.description}
          assigneeValue={store.edit.assignee}
          />
        }
      </div>
    </div>
  );
}

export default App;
