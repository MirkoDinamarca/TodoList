import Task from "../Task/Task";

const List = ({
  filterTasks,
  cantTasks,
  onClickHandlerDelete,
  onClickHandlerCheck,
}) => {
  return (
    <div>
      {/* Si aca usan un ul, deberian usar un li dentro de Task o como wrapper de Task */}
      <ul>
        {filterTasks.length > 0 ? (
          <p>
            Tenes en total {filterTasks.length} tareas | {cantTasks} pendientes
            que resolver
          </p>
        ) : (
          <p>No tenes tareas</p>
        )}
        {filterTasks.map((t) => {
          return (
            <Task
              key={t.id}
              task={t}
              onClickHandlerDelete={onClickHandlerDelete}
              onClickHandlerCheck={onClickHandlerCheck}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
