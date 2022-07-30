import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState, useEffect } from "react"

function App() {
  const title = 'Task Tracker'
  const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      // console.log('tasksFromServer', tasksFromServer)
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log('toggle', id)
    setTasks(
      tasks.map(
      (task) => task.id === id ?
      { ...task, reminder: !task.reminder } :
      task
      )
    )
  }

  const addTask = (task) => {
    console.log('add task', task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {...task, id: id}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header
      title={ title }
      onToggleForm={ () => setShowAddTask(!showAddTask) }
      showForm={ showAddTask }
      />
      {
      showAddTask && <AddTask onAddTask={ addTask }/>
      }
      {
        tasks.length > 0 ?
        <Tasks taskList={ tasks } onDelete={ deleteTask } onToggle={ toggleReminder }/> :
        'No Tasks To Show'
      }
    </div>
  );
}

export default App;
