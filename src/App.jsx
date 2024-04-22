import React, { useState } from "react"


function App() {
//  const lista = []
const [tasks, setTasks] = useState([]); //en principio mi lista esta vacia siendo un []
const[newTask, setNewTask] = useState('');

const handleInputChange = (event) => {
  setNewTask(event.target.value);
};

const handleAddTask = () => {
  if (newTask.trim() !== '') {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }
};

const handleDeleteTask = (index) => {
  const updatedTasks = [...tasks];//haceme una copia de todas las tareas y guardalas acá
  updatedTasks.splice(index, 1);//splice va a ubicar el elemento segun index y borrara 1 elemento. 
  setTasks(updatedTasks);
};

  return(
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Agregar tarea"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task, index) => (
       
          <li key={index}>
        
            {task} 
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App
