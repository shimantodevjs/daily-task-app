import { useState } from 'react'
import textData from './assets/textData'
import TaskText from './assets/taskText'
import TaskBox from './assets/taskBox'

function App() {
  const [tasks,setTasks] = useState(textData)

  function toggleBoxColor(id){
    setTasks(prevTask=>{
      return prevTask.map(task=>{
        return task.id===id?{...task,on:!task.on} : task
      })
    })
  }
  
  const taskComponent= tasks.map(task=>{

    return(
      <div className="task__components">
      <TaskText
      key={task.id}
      text={task.text}
      />
      <TaskBox
      on={task.on}
      key={task.id}
      handleClick={()=>toggleBoxColor(task.id)} 
      />
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
