import { useState } from 'react';
import styles from './App.module.scss'
import { Modal } from './components/modal/Modal';
import { Button } from './components/button/Button';
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';
import { NewTaskModal } from './components/new-task/NewTaskModal';
import { EditTaskModal } from './components/edit-task/EditTaskModal';

function App() {
  const [onOpenCreate, setOnOpenCreate] = useState(false);
  const [onOpenEdit, setOnOpenEdit] = useState(false);
  const test = <h1>testove</h1>
  // const actions = <Button onNewTask={() => {setOnOpenCreate(false);}} title={'Add task'}/>
  const users = ['Ivan', 'Georgi', 'Peter']
  return (
    <div>
      <div className={!onOpenCreate && !onOpenEdit ? styles.wrapper : styles['wrapper-blur']}>
          <TaskWrapper title={"To Do"} content={{'test' : 1}}/>
          <TaskWrapper title={"In progress"} content={{'test' : 1}}/>
          <TaskWrapper title={"Done"} content={{'test' : 1}}/>
          <Button onAction={() => {setOnOpenCreate(true);}} title={'New task'}/>
      </div>
      <div className={styles.modal}>
        {onOpenCreate &&
          <NewTaskModal onAddTask={() => {console.log('add');}}
          onClose={() => {setOnOpenCreate(false)}}
          users={users}
          />
        }
        {onOpenEdit &&
        <EditTaskModal onAddTask={() => {console.log('add');}}
          onClose={() => {setOnOpenEdit(false)}}
          users={users}
          titleValue={'Header'}
          descriptionValue={'description'}
          />
        }
      </div>
    </div>
  );
}

export default App;
