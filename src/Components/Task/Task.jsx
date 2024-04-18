import React from 'react'
import Button from '../Button/Button'
import style from './Task.module.css'

const Task = ({ task, onClickHandlerDelete, onClickHandlerCheck }) => {
  const { nombre, estado } = task

  return (
    <label htmlFor={'task_check_' + task.id} className={`${style.task} ${estado ? style.task_checked : ''}`}>
      <label className={style.custom_checkbox}>
          <input id={'task_check_' + task.id} type="checkbox" onChange={() => onClickHandlerCheck(task)}/>
          <span className={style.checkmark}></span>
      </label>
      <div className={style.checked_div}>
      <p>{nombre}</p>
      </div>
      <Button text={'Eliminar Tarea'} onClick={() => onClickHandlerDelete(task.id)} classStyle={'btn_delete'} />
    </label>
  )
}

export default Task