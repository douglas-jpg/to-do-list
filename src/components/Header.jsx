const Header = ({ taskNumbers }) => {
    return (
        <header>
            <h1>To Do List</h1>
            {taskNumbers ? (
                <h2>Atualmente você tem {taskNumbers} ativas</h2>
            ) : (
                <h2>Você não tem nenhuma tarefa</h2>
            )}

            <hr />
        </header>
    );
};

export default Header;
