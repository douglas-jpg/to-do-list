import Task from './Task';

const TodoList = ({hasTasks}) => {

    return (
        <div>
            <p className='allTask'>Lista de tarefas:</p>
            <hr />
            <div>
                {hasTasks ? (
                    hasTasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            description={task.description}
                        />
                    ))
                ) : (
                    <p>Voce não tem tarefas</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
