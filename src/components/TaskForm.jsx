import React, { useState, useEffect } from 'react';
import './TaskForm.css';

export function TaskForm({ addTask }) {

    const [formData, setFormData] = useState({
        title: '',
        state: 'pendiente',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { title } = formData;

    useEffect(() => {
        if (!errorMsg) return;
        const timer = setTimeout(() => setErrorMsg(''), 5000);
        return () => clearTimeout(timer);
    }, [errorMsg]);     

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') {
            setErrorMsg('La tarea no puede estar vacia.');
            return;
        }
        setErrorMsg('');
        addTask(formData);
        setFormData({ 
            title: '', state: 'pendiente' 
        });
    };

    return (
        <>

            <div className="taskform-card">
            <form className="task-form" onSubmit={handleSubmit}>
                <div className="task-form-row">
                    <input
                        id="task-input"
                        type="text"
                        placeholder="Nombre de la Tarea"
                        className="form-input-task"
                        name="title"
                        value={title}
                        onFocus={() => setErrorMsg('')}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                    <button type="submit" className="form-button">Agregar</button>
                </div>
                {errorMsg && (
                    <div className="form-error">
                        {errorMsg}
                    </div>)}
            </form>
            </div>
        </>
    );
}