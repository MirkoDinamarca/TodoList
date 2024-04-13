import React, { useState } from 'react'
import Title from '../../Components/Title/Title'
import List from '../../Components/List/List'
import Button from '../../Components/Button/Button'
// import { db } from '../../data/db'


const Home = () => {
  // Lista de las tareas
  const tasks = [
    {
      id: 1,
      nombre: 'Juntarme con los chicos a codear',
      descripcion: 'Hay que terminar la tarea',
      estado: false
    },
    {
      id: 2,
      nombre: 'Cocinar',
      descripcion: 'Tengo q comer',
      estado: false
    },
    {
      id: 3,
      nombre: 'Hacer lo de análisis',
      descripcion: 'Hacer lo de caso de usos',
      estado: false
    },
    {
      id: 4,
      nombre: 'Ir a inglés',
      descripcion: '',
      estado: false
    },
  ]
  const [listTasks, setListTasks] = useState(tasks);


  // const guardarTarea = () => {
  //   const newTask = {
  //       nombre: ValueInput1,
  //       descripcion: ValueInput2,
  //       estado: false
  //   };
  //   setListTasks([...listTasks, newTask]);
  // };

  const [newTask, setNewTask] = useState({})

  /**
   * Agrega una nueva tarea a lo que es la lista de tareas
   */
  const onClickHandlerAddTask = () => {
    let tarea = {
      id: 5,
      nombre: 'Nueva tarea',
      descripcion: 'Hay que terminar la tarea',
      estado: false
    }
  };

   /**
     * Elimina la tarea y filtra por todas las tareas que queda 
     */
   const onClickHandlerDelete = (tarea_id) => {
    let tasksFilter = listTasks.filter(t => t.id !== tarea_id);
    setListTasks(tasksFilter)
};


  return (
    <div>
      <Title />
      {/* <p>Hay {tasks} disponibles</p> */}
      <Button text="Agregar tarea" onClick={onClickHandlerAddTask} />
      <List listTasks={listTasks} onClickHandlerDelete={onClickHandlerDelete} />
    </div>
  )
}

export default Home