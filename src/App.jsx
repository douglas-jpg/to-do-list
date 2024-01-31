import FormTask from './components/FormTaks/FormTask';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
    return (
        <>
            <Header taskNumbers={null} />
            <FormTask />
            <TodoList />
        </>
    );
}

export default App;
