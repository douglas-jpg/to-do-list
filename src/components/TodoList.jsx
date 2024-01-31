import Task from './Task';

const TodoList = () => {
    return (
        <div>
            <p className='allTask'>Lista de tarefas:</p>
            <hr />
            <div>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
};

export default TodoList;
