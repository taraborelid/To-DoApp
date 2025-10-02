import './FilterBar.css';

export function FilterBar({ value, onChange }) {
  return (
    <div className="task-list-controls">
      <label htmlFor="filter">Filtrar:</label>
      <select
        id="filter"
        className="form-select-filter"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="todas">Todas</option>
        <option value="pendiente">Pendientes</option>
        <option value="completada">Completadas</option>
      </select>
    </div>
  );
}
