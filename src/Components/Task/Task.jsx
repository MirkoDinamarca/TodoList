import React from 'react'
import Button from '../Button/Button'
import style from './Task.module.css'

const Task = ({task, onClickHandlerDelete}) => {
  const {id, nombre, descripcion, estado} = task

  return (
    <li className={style.task}>
        <input type="checkbox" />
        <p>{nombre}</p>
        <Button text={'Eliminar Tarea'} onClick={() => onClickHandlerDelete(task.id)}/>
    </li>
)
}

export default Task