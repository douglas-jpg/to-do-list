import { FaRegCalendarPlus } from 'react-icons/fa';
import { useState } from 'react';

const FormTask = ({ onFormSubmit }) => {
    const [dataTask, setDataTask] = useState({
        title: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (dataTask.title.length == 0) {
            return;
        }
        onFormSubmit(dataTask);
        setDataTask({ title: '', description: '' });
    };

    const handleChange = (e) => {
        setDataTask({
            ...dataTask,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>
                <span>
                    <FaRegCalendarPlus />
                </span>
                Insira a sua tarefa:
            </h3>
            <label htmlFor='titulo'>Nome da tarefa:</label>
            <input
                type='text'
                placeholder='Digite o titulo da tarefa'
                id='titulo'
                name='title'
                value={dataTask.title}
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor='descricao'>Tarefa:</label>
            <textarea
                name='description'
                id='descricao'
                placeholder='Digite a sua tarefa'
                value={dataTask.description}
                onChange={(e) => handleChange(e)}
            ></textarea>
            <button type='submit' className='submit'>
                Salvar tarefa
            </button>
        </form>
    );
};

export default FormTask;
