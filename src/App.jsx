import { useState,useRef, useEffect,  } from 'react'
import Button from "./components/forms/buttons/Buttons.jsx";
import TextField from './components/forms/inputs/TextField.jsx';
import { render } from 'react-dom';

function App() {
  const headingRif = useRef(0) // either 0 or null
  const priorityRef = useRef(0) // either 0 or null
  const taskRef = useRef(0) // either 0 or null
  const statusRef = useRef(0) // either 0 or null
  const [list, setList] = useState([])

  // useEffect(useCallback, dependencies)
  useEffect(()=>{
    console.log("list update" , list);
    taskRef.current.value = []
  },[list])
  
  

  // function handleChange(e) {
  //   setTask(e.target.value)
  // }
  function addTask() {
    const data = taskRef.current.getChildData()
    console.log("data" , data);
    // let newList = [...list ,`task : ${taskRef.current.value}  Priority: ${taskRef.current.priority}  status: ${taskRef.current.status}`]
    // newList.push(task)
    // setList(newList)
    
    // headingRif.current.style.color = "purple"
    // headingRif.current.style.backgroundColor = "yellow"
    // console.log( headingRif.current, "headingRif");
  }
// useReff is used to to  regerencing the value, manapulating teh DOM  with ref , Avoiding recreating the ref contents
console.log("render");

  return (
    <>
      <h1 ref={headingRif}>Todo App</h1>


      <TextField placeholder= "your Task" ref= {taskRef}/>      
      <TextField placeholder= "Priority" ref= {priorityRef}/>      
      <TextField placeholder= "Status" ref= {statusRef}/>      
      <Button title="ADD" handler={addTask} />

      <ul>
        {
          list.map((task, index) => {
            return <li key={index}>
              {task}
              <Button title="delete" />
            </li>
          })
        }
      </ul>
    </>
  )
}


export default App;