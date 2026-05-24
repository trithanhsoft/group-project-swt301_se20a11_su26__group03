import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error('Failed to fetch tasks', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        fetchTasks();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to add task');
      }
    } catch (err) {
      setError('Failed to add task');
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'completed' }),
      });

      if (response.ok) {
        fetchTasks();
      }
    } catch (err) {
      console.error('Failed to complete task', err);
    }
  };
  
  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTasks();
      }
    } catch (err) {
      console.error('Failed to delete task', err);
    }
  };

  return (
    <div className="App">
      <h1>Task Management System</h1>
      
      <div className="task-form-container">
        <h2>Add New Task</h2>
        {error && <p className="error" role="alert">{error}</p>}
        <form onSubmit={handleAddTask} data-testid="add-task-form">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="task-list-container">
        <h2>Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className={`task-item ${task.status}`}>
                <div className="task-content">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <span className={`status-badge ${task.status}`}>{task.status}</span>
                </div>
                <div className="task-actions">
                  {task.status !== 'completed' && (
                    <button onClick={() => handleCompleteTask(task.id)} className="btn-complete">
                      Complete
                    </button>
                  )}
                  <button onClick={() => handleDeleteTask(task.id)} className="btn-delete">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
