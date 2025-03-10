import { ITask } from '../../@types/Tasks';
import Empty from '../Empty/Empty';
import Loading from '../Loading/Loading';
import TaskItem from '../TaskItem/TaskItem';

interface AllTasksProps {
    tasks: ITask[];
    isLoading: boolean;
}

const AllTasks = ({ tasks, isLoading }: AllTasksProps) => {
    const onToggle = (id: string) => {
        console.log('Toggle:', id);
    };

    const onEdit = (id: string) => {
        console.log('Editar:', id);
    };

    const onDelete = (id: string) => {
        console.log('Excluir:', id);
    };

    return (
        <ul
            aria-live='polite'
            className='space-y-4 max-h-80 mx-auto mt-4 overflow-auto'
        >
            {isLoading ? (
                <Loading />
            ) : tasks.length === 0 ? (
                <Empty />
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        priority={task.priority}
                        done={task.done}
                        onToggle={() => onToggle(task.id)}
                        onEdit={() => onEdit(task.id)}
                        onDelete={() => onDelete(task.id)}
                    />
                ))
            )}
        </ul>
    );
};

export default AllTasks;
