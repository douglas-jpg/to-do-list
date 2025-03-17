import { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

import { createdTask } from '../../@types/Tasks';

import Button from '../Button/Button';
import DateComponent from '../DateComponent/DateComponent';
import PriorityFilter from '../PriorityFilter/PriorityFilter';
import TaskModal from '../TaskModal/TaskModal';

const Header = () => {
    const { createTask } = useTasks();
    const [modalOpen, setModalOpen] = useState(false);

    const handleSaveTask = (task: createdTask) => {
        createTask(task);
        setModalOpen(false);
    };

    return (
        <header className='mb-6'>
            <h1 className='text-2xl font-bold text-gray-800 mb-4'>
                Lista de Tarefas
            </h1>
            <div className='flex justify-between items-center mb-4'>
                <DateComponent />
                <Button variant='primary' onClick={() => setModalOpen(true)}>
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
