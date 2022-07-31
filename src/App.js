import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState, useEffect } from "react"

function App() {
  const title = 'Task Tracker'
  const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const tasksFromServer = await fetchTasks()
    console.log('tasksFromServer', tasksFromServer)
    setTasks(tasksFromServer)
  }

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  async function deleteTask(id) {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  const toggleReminder = async (id) => {
    console.log('toggle', id)

    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ?
      { ...task, reminder: data.reminder } : task)
    )
  }

  const addTask = async (newTask) => {
    console.log('add task', newTask)
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {...task, id: id}

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })

    const data = await res.json()
    setTasks([...tasks, data])
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
