// src/components/TaskList.jsx
import React, { useState } from 'react';
const TaskList = () => {

const [tasks, setTasks] = useState([]);
// Simulación de carga de datos desde una API con useEffect
React.useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => setTasks(data))
.catch((error) => console.error('Error fetching tasks:', error));
}, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

return (
<section className="container mt-5">
<h2>Lista de Tareas</h2>
<ul class="list-group">
{tasks.map((task) => (

<li class="list-group-item d-flex justify-content-between align-items-center" key={task.id}>{task.title}
</li>

))}
</ul>
</section>
);};

export default TaskList;