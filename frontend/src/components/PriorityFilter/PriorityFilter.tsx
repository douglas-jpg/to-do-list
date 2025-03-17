import { useTasks } from '../../context/TaskContext';
import { Priority } from '../../@types/Tasks';

const PriorityFilter = () => {
    const { priorityFilter, setPriorityFilter } = useTasks();

    const priorities = [
        { value: 'todos', label: 'Todas' },
        { value: 'baixa', label: 'Baixa' },
        { value: 'media', label: 'Média' },
        { value: 'alta', label: 'Alta' },
    ];

    return (
        <section className='mb-6'>
            <div className='flex items-center gap-3'>
                <label className='text-gray-600 text-sm font-medium'>
                    Filtrar por prioridade:
                </label>
                <select
                    value={priorityFilter}
                    onChange={(e) =>
                        setPriorityFilter(e.target.value as Priority | 'todos')
                    }
                    className='border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer'
                >
                    {priorities.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
};

export default PriorityFilter;
