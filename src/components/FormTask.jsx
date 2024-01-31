import { FaRegCalendarPlus } from 'react-icons/fa';

const FormTask = () => {
    return (
        <form>
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
                name='titulo'
            />
            <label htmlFor='descricao'>Tarefa:</label>
            <textarea
                name='descricao'
                id='descricao'
                placeholder='Digite a sua tarefa'
            ></textarea>
            <button type='submit' className='submit'>Salvar tarefa</button>
        </form>
    );
};

export default FormTask;
