import { FaRegCalendarPlus } from 'react-icons/fa';
import { useState } from 'react';

const FormTask = ({ onFormSubmit, lastId }) => {
    const [data, setData] = useState({
        id: lastId,
        title: '',
        description: '',
        hasFinish: false,
    });

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(data);
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
                value={data.title}
                onChange={handleInput}
            />
            <label htmlFor='descricao'>Tarefa:</label>
            <textarea
                name='description'
                id='descricao'
                placeholder='Digite a sua tarefa'
                value={data.description}
                onChange={handleInput}
            ></textarea>
            <button type='submit' className='submit'>
                Salvar tarefa
            </button>
        </form>
    );
};

export default FormTask;