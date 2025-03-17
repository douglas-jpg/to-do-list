import { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

import { ITask } from '../../@types/Tasks';

import Button from '../Button/Button';
import DateComponent from '../DateComponent/DateComponent';
import PriorityFilter from '../PriorityFilter/PriorityFilter';
import TaskModal from '../TaskModal/TaskModal';

const Header = () => {
    const { createTask } = useTasks();
    const [modalOpen, setModalOpen] = useState(false);

    const handleSaveTask = (task: Partial<ITask>) => {
        createTask(task);
        setModalOpen(false);
    };

    return (
        <header className='mb-6'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4'>
                <div>
                    <h1 className='text-xl md:text-2xl font-bold text-gray-800 mb-2'>
                        Lista de Tarefas
                    </h1>
                    <DateComponent />
                </div>
                <Button
                    variant='primary'
                    onClick={() => setModalOpen(true)}
                    className='w-full sm:w-auto'
                >
                    Criar Tarefa
                </Button>
            </div>

            <PriorityFilter />
            <hr className='border-t border-gray-300 my-4' />

            <TaskModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveTask}
            />
        </header>
    );
};

export default Header;
