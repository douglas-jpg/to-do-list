import { FiTrash2 } from 'react-icons/fi';
import { ITask, Priority } from '../../@types/Tasks';

interface TaskItemProps {
    task: ITask;
    onToggle: () => void;
    onDelete: () => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
    const { id, title, description, priority, done } = task;

    const priorityClasses: Record<Priority, string> = {
        baixa: 'bg-green-100 text-green-800 border-green-200',
        media: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        alta: 'bg-red-100 text-red-800 border-red-200',
    };

    return (
        <li className='group'>
            <div
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 rounded-lg gap-3 sm:gap-4 border transition-colors
    ${
        done
            ? 'bg-gray-100 border-gray-200'
            : 'bg-white border-gray-300 hover:border-blue-300 hover:bg-blue-50'
    }`}
            >
                <div className='flex items-center gap-3 flex-1 min-w-0'>
                    <input
                        type='checkbox'
                        id={id}
                        checked={done}
                        onChange={onToggle}
                        className='shrink-0 w-4 h-4 mt-2 sm:mt-0 rounded border-gray-300 text-blue-600 
                            focus:ring-blue-500 cursor-pointer'
                    />

                    <div className='min-w-0 flex-1'>
                        <label htmlFor={id} className='cursor-pointer min-w-0'>
                            <h2
                                className={`text-base sm:text-[15px] md:text-base font-medium truncate ${
                                    done
                                        ? 'text-gray-400 line-through'
                                        : 'text-gray-800'
                                }`}
                            >
                                {title}
                            </h2>
                        </label>
                        {description && (
                            <p className='text-gray-600 text-sm sm:text-[13px] md:text-sm mt-1 whitespace-pre-wrap break-words'>
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                <div className='flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-3 ml-0 sm:ml-2'>
                    <span
                        className={`${priorityClasses[priority]} px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-lg font-medium border`}
                    >
                        {priority}
                    </span>
                    <button
                        onClick={onDelete}
                        className='p-2 sm:p-3 text-gray-400 hover:text-red-600 rounded-xl
                            hover:bg-red-100 transition-colors duration-150 cursor-pointer'
                        aria-label='Excluir tarefa'
                    >
                        <FiTrash2 className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default TaskItem;
