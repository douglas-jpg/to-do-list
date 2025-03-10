import { useEffect, useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';

const DateComponent = () => {
    const [date, setDate] = useState({
        semana: '',
        dia: '',
        mes: '',
        ano: '',
    });

    useEffect(() => {
        const updateDate = () => {
            const date = new Date();

            setDate({
                semana: date.toLocaleDateString('pt-BR', { weekday: 'short' }),
                dia: date.toLocaleDateString('pt-BR', { day: 'numeric' }),
                mes: date.toLocaleDateString('pt-BR', { month: '2-digit' }),
                ano: date.toLocaleDateString('pt-BR', { year: 'numeric' }),
            });
        };
        updateDate();
        const timer = setInterval(updateDate, 60000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='flex items-center gap-2 '>
            <MdOutlineDateRange className='w-4 h-4' />
            <span className=''>
                {date.semana} - {date.dia}/{date.mes}/{date.ano}
            </span>
        </div>
    );
};

export default DateComponent;
