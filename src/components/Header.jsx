import { FaRegListAlt, FaRegBell } from 'react-icons/fa';

const Header = ({ taskNumbers, allTasks }) => {
    return (
        <header>
            <h1>To Do List</h1>
            {taskNumbers ? (
                <>
                    <h2>
                        <span>
                            <FaRegBell />
                        </span>
                        Você tem {taskNumbers} tarefas pendentes
                    </h2>
                    <h3>
                        <span>
                            <FaRegListAlt />
                        </span>
                        Total de {allTasks} tarefas
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
