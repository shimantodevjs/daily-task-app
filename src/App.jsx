import { useState } from 'react'
import textData from './assets/textData'
import TaskText from './assets/taskText'
import TaskBox from './assets/taskBox'

function App() {
  const [tasks,setTasks] = useState(textData)
  
  const taskComponent= tasks.map(task=>{

    return(
      <div className="task__components">
      <div className="task__text">
      <TaskText
      key={task.id}
      text={task.text}
      />
      </div>
      <div className="task__box">
      <TaskBox 
      />
      </div>
      </div>
    )
  })

  return (
        <main>
          {taskComponent}
        </main> 
  )
}

export default App
