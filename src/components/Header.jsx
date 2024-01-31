import { FaRegListAlt, FaRegBell } from 'react-icons/fa';

const Header = ({ allTasks }) => {
    return (
        <header>
            <h1>To Do List</h1>
            {allTasks ? (
                <>
                    <h2>
                        <span>
                            <FaRegBell />
                        </span>
                        Você tem{' '}
                        {allTasks.filter((task) => !task.hasFinish).length}{' '}
                        tarefas pendentes
                    </h2>
                    <h3>
                        <span>
                            <FaRegListAlt />
                        </span>
                        Total de {allTasks.length} tarefas
                    </h3>
                </>
            ) : (
                <h2>Você não tem nenhuma tarefa</h2>
            )}

            <hr />
        </header>
    );
};

export default Header;
