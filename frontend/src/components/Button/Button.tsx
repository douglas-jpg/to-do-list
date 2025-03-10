const Button = () => {
    return (
        <button
            className='bg-blue-600 hover:bg-blue-700 text-white font-inter font-semibold py-2 px-4 rounded-md transition-colors duration-100 cursor-pointer'
            aria-label='Criar nova tarefa'
            onClick={() => console.log('Criar tarefa')}
        >
            Criar tarefa
        </button>
    );
};

export default Button;
