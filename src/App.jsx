import FormTask from './components/FormTask';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const URL = 'http://localhost:5000/tasks';
    const [tasks, setTasks] = useState(null);
    const [lastId, setLastId] = useState();

    useEffect(() => {
        const searchTask = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setTasks(data);
            setLastId(data.length);
        };
        searchTask();
    });

    const handleFormSubmit = async (task) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
    };

    return (
        <div className='container'>
            <Header allTasks={tasks} />
            <FormTask onFormSubmit={handleFormSubmit} lastId={lastId} />
            <TodoList hasTasks={tasks} />
        </div>
    );
}

export default App;
