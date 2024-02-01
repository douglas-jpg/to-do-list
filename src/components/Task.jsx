import { FaRegCircleCheck, FaRegTrashCan } from 'react-icons/fa6';

const Task = ({ title, description }) => {
    return (
        <div className='task'>
            <div className='text'>
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
            </div>
            <div className='btns'>
                <button className='delete'>
                    <FaRegTrashCan />
                </button>
                <button className='finish'>
                    <FaRegCircleCheck />
                </button>
            </div>
        </div>
    );
};

export default Task;
