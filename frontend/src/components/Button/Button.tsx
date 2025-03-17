import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary: boolean;
    text: string;
    onClick?: () => void;
}

const Button = ({ primary, text, onClick, ...rest }: ButtonProps) => {
    return (
        <button
            className={`font-inter text-white font-semibold py-2 px-4 rounded transition-colors duration-100 cursor-pointer ${
                primary
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label='Criar nova tarefa'
            onClick={onClick}
            {...rest}
        >
            {text}
        </button>
    );
};

export default Button;
