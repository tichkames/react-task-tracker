import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className="task" >
      <h3>{ task.text } <FaTimes style={ style } /> </h3>
      <p>{ task.day }</p>
    </div>
  )
}

const style = {
  color: 'red', cursor:'pointer'
}

export default Task