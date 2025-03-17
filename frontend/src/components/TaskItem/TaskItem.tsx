import { FiTrash2 } from 'react-icons/fi';

interface TaskItemProps {
    id: string;
    title: string;
    description: string | undefined;
    priority: 'baixa' | 'media' | 'alta';
    done: boolean;
    onToggle: () => void;
    onDelete: () => void;
}

const TaskItem = ({
    id,
    title,
    description,
    priority,
    done,
    onToggle,
    onDelete,
}: TaskItemProps) => {
    const priorityClass = {
        baixa: 'bg-green-100 text-green-800',
        media: 'bg-yellow-100 text-yellow-800',
        alta: 'bg-red-100 text-red-800 ',
    };

    return (
        <li>
            <div
                className={`flex justify-between items-center p-4  rounded-lg  transition-colors gap-4 border-1 border-indigo-950 ${
                    done ? 'bg-slate-200' : 'bg-slate-50 hover:bg-indigo-100'
                }`}
            >
                <div
                    className='flex items-center gap-3'
                    onClick={() => onToggle()}
                >
                    <input
                        type='checkbox'
                        id={id}
                        checked={done}
                        name='competar tarefa'
                        className='w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 cursor-pointer'
                    />
                    <label
                        htmlFor={id}
                        className={` w-full ${
                            !done && 'cursor-pointer'
                        }`}
                    >
                        <h2
                            className={`font-semibold text-base ${
                                done
                                    ? 'text-gray-400 line-through'
                                    : 'text-gray-800'
                            }`}
                        >
                            {title}
                        </h2>
                        {description && (
                            <p className='text-gray-600 text-sm mt-1 break-words whitespace-normal w-full '>
                                {description}
                            </p>
                        )}
                    </label>
                </div>
                <div className='flex items-center gap-4 shrink-0'>
                    <span
                        className={`flex items-center justify-center font-medium uppercase rounded-lg text-sm border py-1  min-w-16 w-fit h-fit ${priorityClass[priority]}`}
                    >
                        {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </span>
                    <menu className='flex gap-2' aria-label='Ações da tarefa'>
                        <button
                            className='text-gray-500 hover:text-blue-600 transition-colors duration-200 text-2xl cursor-pointer'
                            aria-label='Excluir tarefa'
                            onClick={() => onDelete()}
                        >
                            <FiTrash2 />
                        </button>
                    </menu>
                </div>
            </div>
        </li>
    );
};

export default TaskItem;
