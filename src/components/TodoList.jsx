import Task from './Task';

const TodoList = ({ hasTasks, onDeleteTask }) => {
    return (
        <div>
            <p className='allTask'>Lista de tarefas:</p>
            <hr />
            <div>
                {hasTasks.length != 0 ? (
                    hasTasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            onDelete={() => onDeleteTask(task.id)}
                        />
                    ))
                ) : (
                    <h3>Sem tarefas</h3>
                )}
            </div>
        </div>
    );
};

export default TodoList;
