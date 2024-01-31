const FormTask = () => {
    return (
        <form>
            <h3>Insira a sua tarefa:</h3>
            <label htmlFor='titulo'>Nome da tarefa:</label>
            <input
                type='text'
                placeholder='Digite o titulo da tarefa'
                id='titulo'
                name='titulo'
            />
            <label htmlFor='descricao'>Tarefa:</label>
            <input
                type='text'
                placeholder='Digite a sua tarefa'
                id='descricao'
                name='descricao'
            />
            <button type='submit'>Salvar tarefa</button>
        </form>
    );
};

export default FormTask;
