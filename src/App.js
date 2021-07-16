import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Jul 15th at 14:45',
        reminder: true,
    },
    {
        id: 2,
        text: 'Car repair',
        day: 'Jul 19th at 11:15',
        reminder: true,
    },
    {
        id: 3,
        text: 'Gym training',
        day: 'Jul 15th at 18:00',
        reminder: true,
    },
])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task)
      )
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 +1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
      (!showAddTask)}/>
     { showAddTask  &&  <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks  onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show' }
    </div>
  );
}

export default App;
