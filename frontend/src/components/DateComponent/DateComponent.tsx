import { useEffect, useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';

const DateComponent = () => {
    const formatDate = () => {
        const date = new Date();
        return {
            shortDate: date
                .toLocaleDateString('pt-BR', {
                    weekday: 'short',
                    day: 'numeric',
                    month: '2-digit',
                    year: 'numeric',
                })
                .replace(/\./g, ''),
        };
    };

    const [date, setDate] = useState(formatDate);

    useEffect(() => {
        const timer = setInterval(() => setDate(formatDate), 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='flex items-center gap-2 text-gray-600'>
            <MdOutlineDateRange className='w-4 h-4' />
            <span>{date.shortDate}</span>
        </div>
    );
};

export default DateComponent;
