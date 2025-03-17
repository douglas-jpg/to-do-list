import { useState } from 'react';
import Button from '../Button/Button';
import DateComponent from '../DateComponent/DateComponent';
import PriorityFilter from '../PriorityFilter/PriorityFilter';
import TaskModal from '../TaskModal/TaskModal';
import { useTasks } from '../../context/TaskContext';
import { ITask } from '../../@types/Tasks';

const Header = () => {
    const { createTask } = useTasks();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSaveTask = (task: Partial<ITask>) => {
        createTask({ ...task } as ITask);
    };

    return (
        <>
            <header className='mb-6'>
                <h1 className='text-2xl font-bold text-gray-800 mb-4'>
                    Lista de Tarefas
                </h1>
                <div className='flex justify-between items-center mb-4'>
                    <DateComponent />
                    <Button primary text='Criar tarefa' onClick={openModal} />
                </div>
                <PriorityFilter />
                <hr className='text-gray-500' />
            </header>
            {modalOpen && (
                <TaskModal onCancel={closeModal} onSave={handleSaveTask} />
            )}
        </>
    );
};

export default Header;
