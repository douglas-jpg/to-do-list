import { useState, useEffect } from 'react';
import FormTask from './components/FormTask';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const URL = 'http://localhost:5000/tasks';
    const [tasks, setTasks] = useState(null);
    const [lastId, setLastId] = useState(0);

    const fetchTasks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setTasks(data);
        setLastId(data.length);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleFormSubmit = async (task) => {
        if (!task.title || !task.description) {
            return;
        }

        setLastId((prevId) => prevId + 1);
        task.id = lastId;

        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        fetchTasks();
    };

    return (
        <div className='container'>
            <Header allTasks={tasks} />
            <FormTask onFormSubmit={handleFormSubmit} />
            <TodoList hasTasks={tasks} />
        </div>
    );
}

export default App;
