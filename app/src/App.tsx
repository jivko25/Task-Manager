import { useState } from 'react';
import styles from './App.module.scss'
// import { Modal } from './components/modal/Modal';
import { Button } from './components/button/Button';
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';

function App() {
  const [onOpenCreate, setOnOpenCreate] = useState(false);
  const test = <h1>testove</h1>
  const actions = <Button onNewTask={() => {setOnOpenCreate(false);}} title={'Add task'}/>
  return (
    <div>
      <div className={!onOpenCreate ? styles.wrapper : styles['wrapper-blur']}>
          <TaskWrapper title={"To Do"} content={{'test' : 1}}/>
          <TaskWrapper title={"In progress"} content={{'test' : 1}}/>
          <TaskWrapper title={"Done"} content={{'test' : 1}}/>
          <Button onNewTask={() => {setOnOpenCreate(true);}} title={'New task'}/>
      </div>
      <div className={styles.modal}>
        {/* {onOpenCreate &&
          // <Modal title="test" content={test} actions={actions} isOpen={true}/>
        } */}

      </div>
    </div>
  );
}

export default App;
