import { FormEvent, useState } from 'react';
import Button from '../Button/Button';
import { ITask } from '../../@types/Tasks';

interface TaskModalProps {
    onCancel: () => void;
    onSave: (task: Partial<ITask>) => void;
}

const TaskModal = ({ onCancel, onSave }: TaskModalProps) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [priority, setPriority] = useState<'baixa' | 'media' | 'alta'>(
        'baixa'
    );
    const [hasTitle, setHasTitle] = useState<boolean>(true);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            setHasTitle(false);
            return;
        }

        setHasTitle(true);
        const task = {
            title,
            description,
            priority,
        };

        onSave(task);
        setTitle('');
        setDescription('');
        setPriority('baixa');
        onCancel();
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-50'>
            <div className='bg-white w-11/12 max-w-md rounded-lg p-5 shadow-lg opacity-100'>
                <h2 className='mb-4 text-2xl text-gray-800 font-black'>
                    Nova Tarefa
                </h2>
                <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label
                            htmlFor='task-title'
                            className='block mb-1 font-bold text-gray-600'
                        >
                            Título <span>*</span>
                        </label>
                        {!hasTitle && (
                            <span className='text-red-600 text-sm'>
                                O texto precisa ter um titulo
                            </span>
                        )}
                        <input
                            type='text'
                            id='task-title'
                            placeholder='Digite o título da tarefa'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='w-full p-2 border border-gray-300 rounded text-sm'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='task-desc'
                            className='block mb-1 font-bold text-gray-600'
                        >
                            Descrição
                        </label>
                        <textarea
                            id='task-desc'
                            placeholder='Digite a descrição da tarefa'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='w-full p-2 border border-gray-300 rounded text-sm resize-vertical min-h-[80px]'
                        />
                    </div>
                    <div className='mb-4'>
                        <span className='block mb-1 font-bold text-gray-600'>
                            Prioridade:
                        </span>
                        <div className='flex items-center gap-4'>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='prioridade'
                                    value='baixa'
                                    checked={priority === 'baixa'}
                                    onChange={() => setPriority('baixa')}
                                    required
                                    className='mr-1'
                                />
                                Baixa
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='prioridade'
                                    value='media'
                                    checked={priority === 'media'}
                                    onChange={() => setPriority('media')}
                                    className='mr-1'
                                />
                                Média
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='prioridade'
                                    value='alta'
                                    checked={priority === 'alta'}
                                    onChange={() => setPriority('alta')}
                                    className='mr-1'
                                />
                                Alta
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2'>
                        <Button
                            primary={false}
                            text='Cancelar'
                            onClick={onCancel}
                        />
                        <Button primary text='Salvar' type='submit' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
