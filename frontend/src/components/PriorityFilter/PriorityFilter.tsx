import { useTasks } from '../../context/TaskContext';

const PriorityFilter = () => {
    const { selectedPriority, setSelectedPriority } = useTasks();

    return (
        <section className='mb-6'>
            <div className='flex items-center gap-3'>
                <label
                    htmlFor='priority'
                    className='text-gray-600 text-sm font-medium'
                >
                    Filtrar por prioridade:
                </label>
                <select
                    id='priority'
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className='border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer'
                >
                    <option value='todos'>Todas</option>
                    <option value='baixa'>Baixa</option>
                    <option value='media'>Média</option>
                    <option value='alta'>Alta</option>
                </select>
            </div>
        </section>
    );
};

export default PriorityFilter;
