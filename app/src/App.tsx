import './App.scss'
import { TaskWrapper } from './components/task-wrapper/TaskWrapper';

function App() {
  return (
    <div className='wrapper'>
        <TaskWrapper title={"To Do"} content={{'test' : 1}}/>
        <TaskWrapper title={"In progress"} content={{'test' : 1}}/>
        <TaskWrapper title={"Done"} content={{'test' : 1}}/>
    </div>
  );
}

export default App;
