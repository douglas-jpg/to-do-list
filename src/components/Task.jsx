import { useState } from 'react';
import { FaRegCircleCheck, FaRegTrashCan } from 'react-icons/fa6';

const Task = ({ title, description, onDelete, task }) => {
    const [finish, setFinish] = useState(false);

    const handleFinishClick = () => {
        setFinish(!finish);
        task.hasFinish = finish;
        console.log(task.hasFinish);
    };
    return (
        <div className={`task ${finish ? 'marked' : ''}`}>
            <div className='text'>
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
            </div>
            <div className='btns'>
                <button className='delete' onClick={onDelete}>
                    <FaRegTrashCan />
                </button>
                <button className='finish' onClick={handleFinishClick}>
                    <FaRegCircleCheck />
                </button>
            </div>
        </div>
    );
};

export default Task;
