import { FiLoader } from 'react-icons/fi';

interface LoadingProps {
    className?: string;
    message?: string;
}

const Loading = ({
    className = '',
    message = 'Carregando...',
}: LoadingProps) => {
    return (
        <div
            role='status'
            aria-live='polite'
            className={`flex flex-col items-center justify-center gap-3 py-8 ${className}`}
        >
            <FiLoader
                className='animate-spin text-3xl text-blue-600'
                aria-hidden='true'
            />
            <span className='text-gray-600 text-sm font-medium'>{message}</span>
        </div>
    );
};

export default Loading;
