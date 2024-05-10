import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import TaskList from './TaskList.jsx';
import ComponenteAPI from './ComponenteAPI.jsx';
import Formulario from './Formulario.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <TaskList />
    {/* <ComponenteAPI /> */}
    {/* <Formulario /> */}
  </React.StrictMode>,
)
