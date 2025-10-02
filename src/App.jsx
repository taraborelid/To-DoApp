import { useState, useEffect, useMemo } from 'react'
import Header from './components/Header'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { FilterBar } from './components/FilterBar'
import './App.css'

export default function App() {
  
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem('tasks');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.warn('Failed to parse tasks from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.warn('Failed to persist tasks to localStorage', e);
    }
  }, [tasks]);


  const [filterState, setFilterState] = useState('todas');

  
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => filterState === 'todas' || task.state === filterState);
  }, [tasks, filterState]);

  const addTask = (formData) => {
    if (!formData.title) return;
    const newTask = {
      id: Date.now(),
      title: formData.title,
      state: formData.state,
    };
    setTasks([...tasks, newTask]);
  };

  const changeState = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        let newState;
        if (task.state === 'pendiente') {
          newState = 'completada';
        } else {
          newState = 'pendiente';
        }
        return { ...task, state: newState };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Header />
      <div className="taskform-container">
        <h2 className="taskform-title">Nueva Tarea</h2>
        <TaskForm addTask={addTask} />
      </div>

      <section className="task-list">
        <div className="task-list-header">
          <h3 className="task-list-title">Mis Tareas</h3>
          <FilterBar value={filterState} onChange={setFilterState} />
        </div>

        <TaskList
          tasks={filteredTasks}
          changeState={changeState}
          deleteTask={deleteTask}
        />
      </section>
    </div>
  )
}