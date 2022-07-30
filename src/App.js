import Header from "./components/Header";
import Tasks from "./components/Tasks";
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

  return (
    <div className="container">
      <Header title={ title } />
      <Tasks taskList={ tasks }/>
    </div>
  );
}

export default App;
