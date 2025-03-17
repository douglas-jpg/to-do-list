import { useTasks } from '../../context/TaskContext';
import Empty from '../Empty/Empty';
import Loading from '../Loading/Loading';
import TaskItem from '../TaskItem/TaskItem';

const AllTasks = () => {
    const { tasks, isLoading, toggleTask, deleteTask } = useTasks();

    const handleToggleDone = async (id: string) => {
        try {
            await toggleTask(id);
        } catch (error) {
            console.error('Erro ao alternar status:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteTask(id);
        } catch (error) {
            console.error('Erro ao alternar status:', error);
        }
    };

    if (isLoading) {
        return <Loading />;
    } else if (!tasks.length) {
        return <Empty />;
    }
    return (
        <ul
            aria-live='polite'
            className='space-y-4 max-h-80 mx-auto mt-4 overflow-auto'
        >
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    done={task.done}
                    onToggle={() => handleToggleDone(task.id)}
                    onDelete={() => handleDelete(task.id)}
                />
            ))}
        </ul>
    );
};

export default AllTasks;
