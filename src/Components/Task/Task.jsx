import React from 'react'
import Button from '../Button/Button'
import style from './Task.module.css'

const Task = ({task, onClickHandlerDelete, onClickHandlerCheck}) => {
  const {id, nombre, estado} = task

  return (
    <li className={style.task}>
        <input type="checkbox" onChange={() => onClickHandlerCheck(task)} />
        <p>{nombre}</p>
        <Button text={'Eliminar Tarea'} onClick={() => onClickHandlerDelete(task.id)}/>
    </li>
)
}

export default Task