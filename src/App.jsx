import { useState, useEffect } from 'react';
import FormTask from './components/FormTask';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const URL = 'http://localhost:5000/tasks';
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleFormSubmit = async (task) => {
        if (!task.title || !task.description) {
            return;
        }
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        fetchTasks();
    };

    const handleDeletTask = async (id) => {
        await fetch(`${URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        fetchTasks();
    };

    return (
        <div className='container'>
            <Header allTasks={tasks} />
            <FormTask onFormSubmit={handleFormSubmit} />
            <TodoList hasTasks={tasks} onDeleteTask={handleDeletTask} />
        </div>
    );
}

export default App;
