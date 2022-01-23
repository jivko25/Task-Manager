import { useState } from 'react';
import styles from './App.module.scss'
import { Modal } from './components/modal/Modal';
import { NewTaskButton } from './components/new-task-button/NewTaskButton';
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';

function App() {
  const [onOpenCreate, setOnOpenCreate] = useState(false);
  const test = <h1>testove</h1>
  const actions = <button>action</button>
  return (
    <div>
      <div className={styles.wrapper}>
          <TaskWrapper title={"To Do"} content={{'test' : 1}}/>
          <TaskWrapper title={"In progress"} content={{'test' : 1}}/>
          <TaskWrapper title={"Done"} content={{'test' : 1}}/>
          <NewTaskButton onNewTask={() => {setOnOpenCreate(true);
          }}/>
      </div>
      <div className={styles.modal}>
          <Modal title="test" content={test} actions={actions} isOpen={true}/>

      </div>
    </div>
  );
}

export default App;
