interface EmptyProps {
    className?: string;
    title?: string;
    message?: string;
}

const Empty = ({
    className = '',
    title = 'Nenhuma tarefa encontrada!',
    message = 'Clique no botão "Criar tarefa" para começar',
}: EmptyProps) => {
    return (
        <div
            role='status'
            aria-live='polite'
            className={`flex flex-col items-center justify-center gap-2 p-6 text-center ${className}`}
        >
            <h3 className='text-lg font-medium text-gray-600'>{title}</h3>
            <p className='text-gray-500 text-sm max-w-xs mx-auto'>{message}</p>
        </div>
    );
};

export default Empty;
