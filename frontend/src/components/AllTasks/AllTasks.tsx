import { useTasks } from '../../context/TaskContext';

import Empty from '../Empty/Empty';
import Loading from '../Loading/Loading';
import TaskItem from '../TaskItem/TaskItem';

const AllTasks = () => {
    const { tasks, isLoading, error, toggleTask, deleteTask } = useTasks();

    if (isLoading) return <Loading className='py-8' />;
    if (error) return <div className='text-red-500 p-4'>Erro: {error}</div>;
    if (!tasks.length) return <Empty />;

    return (
        <ul aria-live='polite' className='grid gap-2 sm:gap-3 mt-4'>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={() => toggleTask(task.id)}
                    onDelete={() => deleteTask(task.id)}
                />
            ))}
        </ul>
    );
};

export default AllTasks;
