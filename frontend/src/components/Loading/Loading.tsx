import { FiLoader } from "react-icons/fi";

const Loading = () => {
    return (
        <li className='flex justify-center items-center py-6'>
            <FiLoader
                className='animate-spin text-2xl text-blue-500'
                aria-label='Carregando tarefas'
            />
        </li>
    );
};

export default Loading;
