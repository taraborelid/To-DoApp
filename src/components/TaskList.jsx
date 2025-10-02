import './TaskList.css';
import { TaskItem } from './TaskItem';

export function TaskList({ tasks, changeState, deleteTask }) {
  return (
    <div className="task-list">
      <ul className="task-list-items">
        {tasks.length === 0 ? (
          <p className='no-tasks'>No tienes tareas pendientes 🎉.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              changeState={changeState}
              deleteTask={deleteTask}
            />
          ))
        )}
      </ul>
    </div>
  );
}
