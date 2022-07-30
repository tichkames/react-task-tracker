import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react"

function App() {
  const title = 'Task Tracker'
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Biking',
      day: 'March 10th at 6:30pm',
      reminder: true,
    }
  ])

  const [showAddTask, setShowAddTask] = useState(false)

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
