import { FaRegCircleCheck, FaRegTrashCan } from 'react-icons/fa6';

const Task = () => {
    return (
        <div className='task'>
            <p className='title'>Titulo da tarefa</p>
            <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, laboriosam?
            </p>
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
