import { FormEvent, useState } from 'react';

import Button from '../Button/Button';
import { ITask, Priority } from '../../@types/Tasks';

type TaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (task: Partial<ITask>) => void;
};

const TaskModal = ({ isOpen, onClose, onSave }: TaskModalProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Priority>('baixa');
    const [touched, setTouched] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTouched(true);

        if (!title.trim()) return;

        onSave({
            title: title.trim(),
            description: description.trim(),
            priority,
        });

        onClose();
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setPriority('baixa');
        setTouched(false);
    };

    if (!isOpen) return null;

    return (
        <div
            role='dialog'
            className='fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50'
            onClick={onClose}
        >
            <div
                className='bg-white rounded-lg p-6 w-full max-w-md shadow-xl'
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                    Nova Tarefa
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label
                            htmlFor='title'
                            className='block mb-2 font-medium text-gray-700'
                        >
                            Título *
                        </label>
                        <input
                            id='title'
                            type='text'
                            value={title}
                            placeholder='Digite o título da tarefa'
                            onChange={(e) => setTitle(e.target.value)}
                            className={`w-full p-2 border rounded-md ${
                                touched && !title.trim()
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            }`}
                        />
                        {touched && !title.trim() && (
                            <p
                                id='title-error'
                                className='text-red-500 text-sm mt-1'
                            >
                                Título é obrigatório
                            </p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='descricao'
                            className='block mb-2 font-medium text-gray-700'
                        >
                            Descrição
                        </label>
                        <textarea
                            id='descricao'
                            value={description}
                            placeholder='Digite a descrição da tarefa'
                            onChange={(e) => setDescription(e.target.value)}
                            className='w-full p-2 border border-gray-300 rounded-md min-h-[100px]'
                        />
                    </div>

                    <fieldset className='mb-6'>
                        <legend className='block mb-2 font-medium text-gray-700'>
                            Prioridade
                        </legend>
                        <div className='flex gap-4'>
                            {(['baixa', 'media', 'alta'] as Priority[]).map(
                                (p) => (
                                    <label
                                        key={p}
                                        className='flex items-center gap-1'
                                    >
                                        <input
                                            type='radio'
                                            name='priority'
                                            value={p}
                                            checked={priority === p}
                                            onChange={() => setPriority(p)}
                                            className='h-4 w-4 text-blue-600'
                                        />
                                        <span className='capitalize'>{p}</span>
                                    </label>
                                )
                            )}
                        </div>
                    </fieldset>

                    <div className='flex justify-end gap-3'>
                        <Button
                            type='button'
                            variant='secondary'
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                        <Button type='submit' variant='primary'>
                            Salvar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
