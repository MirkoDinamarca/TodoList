import Task from '../Task/Task'

const List = ({filterTasks, cantTasks, onClickHandlerDelete, onClickHandlerCheck}) => {

    return (
        <div>
            <ul>
                {filterTasks.length > 0 ? <p>Tenes en total {filterTasks.length} tareas | {cantTasks} pendientes que resolver</p> : <p>No tenes tareas</p>}
                {filterTasks.map(t => {
                    return <Task key={t.id} task={t} onClickHandlerDelete={onClickHandlerDelete} onClickHandlerCheck={onClickHandlerCheck} />
                })}
            </ul>
        </div>

    )
}

export default List