import './TaskItem.css';

export function TaskItem({ task, changeState, deleteTask }) {
  const completed = task.state === 'completada';

  return (
    <li className={`task-item task-item--${task.state}`}>
      <div className="task-item-content">
        {/* Checkbox clickeable (siempre visible, cambia estado) */}
        <button
          type="button"
          className="task-checkbox-toggle"
          role="checkbox"
          aria-checked={completed}
          aria-label="Cambiar estado de la tarea"
          onClick={() => changeState(task.id)}
        />
        <h3 className="task-item-title">{task.title}</h3>
      </div>

      <div className="task-item-actions">
        {/* Botón "Completar" solo visible cuando está pendiente */}
        {!completed && (
          <button
            type="button"
            onClick={() => changeState(task.id)}
            className="task-button"
          >
            Completar
          </button>
        )}

        <button 
          type="button" 
          className="delete-button" 
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
