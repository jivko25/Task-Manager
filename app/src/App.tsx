import { useState } from 'react';
import styles from './App.module.scss'
import { Modal } from './components/modal/Modal';
import { Button } from './components/button/Button';
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';
import { NewTaskModal } from './components/new-task/NewTaskModal';
import { EditTaskModal } from './components/edit-task/EditTaskModal';
import { useStore } from './components/common/StoreContext';

function App() {
  const [onOpenCreate, setOnOpenCreate] = useState(false);
  const [onOpenEdit, setOnOpenEdit] = useState(false);
  const store = useStore();
  // store.addTask('title', 'description', 'test')
  // store.addTask('title2', 'description2', 'test2')
  console.log(store.tasks.forEach((element: any) => {
    let item = JSON.parse(JSON.stringify(element))
    console.log(item);
    
  }));
  
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
          <NewTaskModal onAddTask={(title : string, description : string, assignee : string ) => {store.addTask(title, description, assignee)}}
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
