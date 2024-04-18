import React, { useState } from 'react'
import Button from '../../Components/Button/Button'
import List from '../../Components/List/List'
import Title from '../../Components/Title/Title'
import style from './Home.module.css'
// import { db } from '../../data/db'

const Home = () => {
  // Lista de las tareas
  const tasks = [
    {
      id: Math.random().toString(5).substring(2),
      nombre: 'Juntarme con los chicos a codear',
      estado: false
    },
    {
      id: Math.random().toString(5).substring(2),
      nombre: 'Cocinar',
      estado: false
    },
    {
      id: Math.random().toString(5).substring(2),
      nombre: 'Hacer lo de análisis',
      estado: false
    },
    {
      id: Math.random().toString(5).substring(2),
      nombre: 'Ir a inglés',
      estado: false
    },
  ]
  const [listTasks, setListTasks] = useState(tasks);
  const [filterTasks, setFilterTasks] = useState(tasks);
  const [valueInput1, setValueInput1] = useState('');
  const [cantTasks, setCantTasks] = useState(checkStateCant);

  /**
   * Cuenta el total de las tareas que vienen desde "BD" de aquellas que tengan el estado en false 
   */
  function checkStateCant() {
    let aux = 0;
    filterTasks.forEach(t => {
      if (!t.estado) {
        aux++
      }
    });
    return aux;
  }

  /**
   * Agrega una nueva tarea a lo que es la lista de tareas
   */
  const onClickHandlerAddTask = () => {
    if (valueInput1 != '') {
      let tarea = {
        id: Math.random().toString(5).substring(2),
        nombre: valueInput1,
        estado: false
      }

      /* CONSULTAR! Por qué al hacer esto funciona bien el asignar la tarea a la lista? */
      setListTasks([...filterTasks, tarea])
      setFilterTasks([...filterTasks, tarea])

      /* Pero al hacerlo de esta manera no funciona (También el console.log me sigue figurando que tengo las mismas tareas) */
      // setListTasks([...listTasks, tarea])
      // setFilterTasks(listTasks)
    }

    setValueInput1('')
  };

  /**
    * Elimina la tarea y filtra por todas las tareas que queda 
    */
  const onClickHandlerDelete = (tarea_id) => {
    let tasksFilter = filterTasks.filter(t => t.id !== tarea_id);
    setFilterTasks(tasksFilter)
    // setCantTasks(filterTasks.length - 1)
  };

  /**
   * Funcion que cambia el estado de las tareas segun se tilda la checkbox
   * findIndex()  busca el indice de la tarea
   */
  const onClickHandlerCheck = (tarea) => {
    const taskExist = filterTasks.findIndex((task) => tarea.id == task.id);

    if (taskExist >= 0) {
      const updateTask = [...filterTasks]

      if (updateTask[taskExist].estado) {
        updateTask[taskExist].estado = false
      } else {
        updateTask[taskExist].estado = true
      }
      setFilterTasks(updateTask)
    }

    let aux = 0;
    filterTasks.forEach(t => {
      if (!t.estado) {
        aux++
      }
    });
    setCantTasks(aux);
  }

  /**
   * Busca lo que el usuario tipee en la barra y filtra las tareas
   */
  const onChangeSearch = (param) => {
    if (!param.target.value) {
      setFilterTasks(listTasks)
    } else {
      let tasksFilter = listTasks.filter(t => (t.nombre).toLowerCase().includes((param.target.value).toLowerCase()));
      setFilterTasks(tasksFilter)
    }
  };

  return (
    <div className={style.home}>
      <Title />
      {/* Formulario para agregar una tarea */}
      <section>
        <input className={style.inputStyle} type="text" value={valueInput1} placeholder='Ingrese el nombre' onChange={e => setValueInput1(e.target.value)} />
        <br />
        <Button text="Agregar tarea" onClick={onClickHandlerAddTask} classStyle={'btn_add_task'}/>
      </section>

      {/* Input para buscar las tareas */}
      <input className={style.inputStyle} type="text" placeholder='Buscar...' onChange={onChangeSearch} />

      {/* Lista de tareas */}
      <List filterTasks={filterTasks} cantTasks={cantTasks} onClickHandlerDelete={onClickHandlerDelete} onClickHandlerCheck={onClickHandlerCheck} />
    </div>
  )
}

export default Home