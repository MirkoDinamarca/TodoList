import Task from '../Task/Task'
import Input from '../Input/Input'

const List = ({listTasks, onClickHandlerDelete}) => {

    return (
        <div>
            {/* <Input value={search} onChangeHandler={onChangeHandler} /> */}
            <ul>
                {listTasks.length > 0 ? <p>Tenes tareas {listTasks.length} tareas pendientes que resolver</p> : <p>No tenes tareas</p>}
                {listTasks.map(t => {
                    return <Task key={t.id} task={t} onClickHandlerDelete={onClickHandlerDelete} />
                })}
            </ul>
        </div>

    )
}

export default List