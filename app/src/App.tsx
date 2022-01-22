import { useState } from 'react';
import './App.scss'
import { NewTaskButton } from './components/new-task-button/NewTaskButton';
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';

function App() {
  const [onOpenCreate, setOnOpenCreate] = useState(false);
  return (
    <div className='wrapper'>
        <TaskWrapper title={"To Do"} content={{'test' : 1}}/>
        <TaskWrapper title={"In progress"} content={{'test' : 1}}/>
        <TaskWrapper title={"Done"} content={{'test' : 1}}/>
        <NewTaskButton onNewTask={() => {setOnOpenCreate(true);
        }}/>
    </div>
  );
}

export default App;
