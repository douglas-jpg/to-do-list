import FormTask from './components/FormTask';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    return (
        <div className='container'>
            <Header taskNumbers={4} allTasks={5} />
            <FormTask />
            <TodoList />
        </div>
    );
}

export default App;
