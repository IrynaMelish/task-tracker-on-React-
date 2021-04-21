import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const[showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'Arztbesuch',
            day:' 24 July um 12 Uhr',
            reminder: true,
        },
        {
            id:2,
            text:'Hausarbeit',
            day:'25 July um 10 Uhr',
            reminder: true,
        },
        {
            id:3,
            text:'Lebensmittel kaufen',
            day:'26 July um 17 Uhr',
            reminder: false,
        }
    ]
);
//Add Task
const addTask=(task)=>{
 const id = Math.floor(Math.random()*10000)+1

  const newTask={id, ...task}
 setTasks([...tasks,newTask])
 }

// Delete Task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
//Toggle Reminder
const toggleReminder = (id)=>{
setTasks(
  tasks.map((task)=>
  task.id===id?{...task,reminder:
    !task.reminder} : task
    )
    )
}
  return (
    <div className="container">
      <Header onAdd={()=>
        setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Es sind keine Aufgaben verfügbar'
}
    
    </div>

  );
}

export default App;
