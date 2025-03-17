type ButtonProps = {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
    const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    };

    return (
        <button
            {...props}
            className={`w-full sm:w-auto cursor-pointer ${baseStyles} ${
                variants[variant]
            } ${props.className || ''}`}
        >
            {children}
        </button>
    );
};

export default Button;
